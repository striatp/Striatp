// src/core/ForgeCommand.ts
import { Command } from 'commander';
import * as path from 'path';
import * as fs from 'fs';
import chalk from 'chalk';
import { Spinner } from 'cli-spinner';
import { EventEmitter } from 'events';

/**
 * Logging levels for the ForgeCommand system
 * @enum {string}
 */
export enum LogLevel {
  DEBUG = 'debug',
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error',
  SILENT = 'silent'
}

/**
 * Configuration options for ForgeCommand
 * @interface ForgeCommandOptions
 */
export interface ForgeCommandOptions {
  /** Suppress all output */
  silent?: boolean;
  /** Enable debug logging */
  debug?: boolean;
  /** Enable verbose logging */
  verbose?: boolean;
  /** Configure logging level */
  logLevel?: LogLevel;
  /** Path to configuration file */
  config?: string;
  /** Force run even with warnings */
  force?: boolean;
  /** Display timing information */
  timing?: boolean;
  /** Disable colored output */
  noColor?: boolean;
  /** Path to store logs */
  logFile?: string;
}

/**
 * Interface for command configuration loaded from files
 * @interface CommandConfig
 */
export interface CommandConfig {
  defaultOptions?: Record<string, any>;
  plugins?: string[];
  hooks?: Record<string, Function[]>;
  aliases?: Record<string, string>;
  [key: string]: any;
}

/**
 * Extended Command class with additional features for building robust CLIs
 * 
 * ForgeCommand provides:
 * - Enhanced logging and error handling
 * - Configuration file support
 * - Command lifecycle hooks
 * - Spinner for long-running tasks
 * - Plugin architecture
 * - Event system for command execution
 * - Metrics and timing features
 * 
 * @class ForgeCommand
 * @extends Command
 */
export class ForgeCommand extends Command {
  private static readonly DEFAULT_CONFIG_LOCATIONS = [
    '.forgecli.json',
    '.forgecli.js',
    '.config/forgecli.json'
  ];
  
  /** Event emitter for inter-command communication */
  protected events: EventEmitter = new EventEmitter();
  
  /** Current logging level */
  protected logLevel: LogLevel = LogLevel.INFO;
  
  /** Configuration loaded from config file */
  protected config: CommandConfig = {};
  
  /** Spinner instance for progress indication */
  protected spinner: Spinner | null = null;
  
  /** Performance measurement storage */
  protected timers: Record<string, { start: number; end?: number }> = {};
  
  /** Flag to indicate if colors should be used */
  protected useColors: boolean = true;

  /**
   * Creates a new ForgeCommand instance
   * @param {string} [name] - The name of the command
   */
  constructor(name?: string) {
    super(name);
    this.configureBaseOptions();
  }

  /**
   * Add global options that apply to every command
   * @private
   */
  private configureBaseOptions() {
    this
      .option('--silent', 'Suppress all output')
      .option('--debug', 'Enable debug logging')
      .option('--verbose', 'Enable verbose logging')
      .option('--log-level <level>', 'Set logging level (debug|info|warn|error|silent)', /^(debug|info|warn|error|silent)$/i)
      .option('--config <path>', 'Path to config file')
      .option('--force', 'Force run command even with warnings')
      .option('--timing', 'Display timing information for command execution')
      .option('--no-color', 'Disable colored output')
      .option('--log-file <path>', 'Path to store logs');
  }

  /**
   * Override parse to hook into args before command logic runs
   * @param {readonly string[]} [argv] - Command line arguments to parse
   * @returns {Promise<this>} The command instance
   */
  override async parseAsync(argv?: readonly string[]): Promise<this> {
    try {
      // Start command execution timer
      this.startTimer('command');
      
      // Parse arguments
      const result = await super.parseAsync(argv);
      
      // Handle global flags
      const opts = this.opts<ForgeCommandOptions>();
      this.handleGlobalFlags(opts);
      
      // Load configuration
      await this.loadConfig(opts.config);
      
      // Apply configuration options
      this.applyConfigDefaults();
      
      // Run "pre" lifecycle hooks
      await this.runLifecycleHooks('pre');
      
      return result;
    } catch (error) {
      this.handleError(error);
      process.exit(1);
      return this; // Unreachable but needed for TypeScript
    }
  }

  /**
   * Handle global command flags
   * @param {ForgeCommandOptions} opts - Parsed command options
   * @private
   */
  private handleGlobalFlags(opts: ForgeCommandOptions) {
    // Configure logging based on options
    if (opts.logLevel) {
      this.logLevel = opts.logLevel as LogLevel;
    } else if (opts.silent) {
      this.logLevel = LogLevel.SILENT;
    } else if (opts.debug) {
      this.logLevel = LogLevel.DEBUG;
    }

    // Set environment variables
    if (opts.debug) {
      process.env.DEBUG = 'true';
    }

    if (opts.verbose) {
      process.env.VERBOSE = 'true';
    }

    // Configure color usage
    this.useColors = opts.noColor !== true;

    // Set up log file if requested
    if (opts.logFile) {
      this.setupLogFile(opts.logFile);
    }
    
    // Override console methods based on log level
    this.configureLoggers();
  }

  /**
   * Configure console loggers based on current log level
   * @private
   */
  private configureLoggers() {
    const originalConsole = {
      log: console.log,
      info: console.info,
      warn: console.warn,
      error: console.error,
      debug: console.debug || console.log
    };

    // Store original methods for potential restoration
    (global as any).__originalConsole = originalConsole;

    // Helper to determine if a log level should be shown
    const shouldLog = (level: LogLevel): boolean => {
      const levels: Record<LogLevel, number> = {
        [LogLevel.DEBUG]: 0,
        [LogLevel.INFO]: 1,
        [LogLevel.WARN]: 2,
        [LogLevel.ERROR]: 3,
        [LogLevel.SILENT]: 4
      };
      
      return levels[level] >= levels[this.logLevel];
    };

    // Customize console methods based on log level
    if (shouldLog(LogLevel.DEBUG)) {
      console.debug = (message?: any, ...optionalParams: any[]) => {
        originalConsole.debug(
          this.useColors ? chalk.gray('[DEBUG]') : '[DEBUG]',
          message,
          ...optionalParams
        );
      };
    } else {
      console.debug = () => {};
    }

    if (shouldLog(LogLevel.INFO)) {
      console.log = originalConsole.log;
      console.info = (message?: any, ...optionalParams: any[]) => {
        originalConsole.info(
          this.useColors ? chalk.blue('[INFO]') : '[INFO]',
          message,
          ...optionalParams
        );
      };
    } else {
      console.log = () => {};
      console.info = () => {};
    }

    if (shouldLog(LogLevel.WARN)) {
      console.warn = (message?: any, ...optionalParams: any[]) => {
        originalConsole.warn(
          this.useColors ? chalk.yellow('[WARN]') : '[WARN]',
          message,
          ...optionalParams
        );
      };
    } else {
      console.warn = () => {};
    }

    if (shouldLog(LogLevel.ERROR)) {
      console.error = (message?: any, ...optionalParams: any[]) => {
        originalConsole.error(
          this.useColors ? chalk.red('[ERROR]') : '[ERROR]',
          message,
          ...optionalParams
        );
      };
    } else {
      console.error = () => {};
    }
  }

  /**
   * Set up logging to a file
   * @param {string} logFilePath - Path to the log file
   * @private
   */
  private setupLogFile(logFilePath: string) {
    try {
      const logDir = path.dirname(logFilePath);
      
      // Create directory if it doesn't exist
      if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true });
      }
      
      // Create write stream for logs
      const logStream = fs.createWriteStream(logFilePath, { flags: 'a' });
      
      // Store original console methods
      const originalMethods = {
        log: console.log,
        info: console.info,
        warn: console.warn,
        error: console.error,
        debug: console.debug || console.log
      };
      
      // Tee logging to both console and file
      const createTeeLogger = (originalFn: typeof console.log, prefix: string) => {
        return (message?: any, ...optionalParams: any[]) => {
          // Call original method
          originalFn(message, ...optionalParams);
          
          // Write to log file with timestamp
          const timestamp = new Date().toISOString();
          const formattedMessage = `[${timestamp}] ${prefix} ${message} ${optionalParams.join(' ')}`.trim();
          logStream.write(formattedMessage + '\n');
        };
      };
      
      // Override console methods to tee output
      console.log = createTeeLogger(originalMethods.log, '[LOG]');
      console.info = createTeeLogger(originalMethods.info, '[INFO]');
      console.warn = createTeeLogger(originalMethods.warn, '[WARN]');
      console.error = createTeeLogger(originalMethods.error, '[ERROR]');
      console.debug = createTeeLogger(originalMethods.debug, '[DEBUG]');
      
      // Handle process exit to close log file
      process.on('exit', () => {
        logStream.end();
      });
    } catch (error) {
      console.error(`Failed to set up log file: ${error}`);
    }
  }

  /**
   * Load configuration from config file
   * @param {string} [configPath] - Optional path to config file
   * @returns {Promise<void>}
   * @private
   */
  private async loadConfig(configPath?: string): Promise<void> {
    try {
      let config: CommandConfig = {};
      
      // If path is explicitly provided, only look there
      if (configPath) {
        if (fs.existsSync(configPath)) {
          if (configPath.endsWith('.js')) {
            config = require(path.resolve(configPath));
          } else {
            const content = fs.readFileSync(configPath, 'utf8');
            config = JSON.parse(content);
          }
        } else {
          throw new Error(`Config file not found: ${configPath}`);
        }
      } else {
        // Otherwise check default locations
        const homeDir = process.env.HOME || process.env.USERPROFILE || '';
        
        // Look for config in default locations
        for (const location of ForgeCommand.DEFAULT_CONFIG_LOCATIONS) {
          const filePath = path.resolve(process.cwd(), location);
          const homeFilePath = path.resolve(homeDir, location);
          
          if (fs.existsSync(filePath)) {
            const content = fs.readFileSync(filePath, 'utf8');
            config = JSON.parse(content);
            break;
          } else if (fs.existsSync(homeFilePath)) {
            const content = fs.readFileSync(homeFilePath, 'utf8');
            config = JSON.parse(content);
            break;
          }
        }
      }
      
      // Store config for use in commands
      this.config = config;
      
      // Load plugins if defined
      if (Array.isArray(config.plugins)) {
        await this.loadPlugins(config.plugins);
      }
      
    } catch (error) {
      console.debug(`Config loading error: ${error}`);
      // Continue without config if there's an error
    }
  }

  /**
   * Apply default options from config file
   * @private
   */
  private applyConfigDefaults() {
    if (this.config.defaultOptions) {
      const currentOpts = this.opts();
      
      // Only apply defaults for options not explicitly set via CLI
      for (const [key, value] of Object.entries(this.config.defaultOptions)) {
        if (currentOpts[key] === undefined) {
          // Use Command's setOptionValue to properly register the default
          this.setOptionValue(key, value);
        }
      }
    }
  }

  /**
   * Load and initialize plugins
   * @param {string[]} plugins - Array of plugin module names or paths
   * @returns {Promise<void>}
   * @private
   */
  private async loadPlugins(plugins: string[]): Promise<void> {
    for (const pluginPath of plugins) {
      try {
        // Try to require the plugin
        let plugin;
        try {
          // First try as module name
          plugin = require(pluginPath);
        } catch {
          // Then try as relative path
          plugin = require(path.resolve(process.cwd(), pluginPath));
        }
        
        // Initialize plugin if it has an init function
        if (typeof plugin.init === 'function') {
          await plugin.init(this);
        }
        
        console.debug(`Loaded plugin: ${pluginPath}`);
      } catch (error) {
        console.warn(`Failed to load plugin ${pluginPath}: ${error}`);
      }
    }
  }

  /**
   * Run lifecycle hooks for the command
   * @param {string} hookName - Name of the hook to run
   * @returns {Promise<void>}
   * @private
   */
  private async runLifecycleHooks(hookName: string): Promise<void> {
    if (!this.config.hooks || !Array.isArray(this.config.hooks[hookName])) {
      return;
    }
    
    for (const hook of this.config.hooks[hookName]) {
      if (typeof hook === 'function') {
        try {
          await hook(this);
        } catch (error) {
          console.warn(`Hook '${hookName}' failed: ${error}`);
        }
      }
    }
  }

  /**
   * Custom action wrapper to safely run async or sync handlers
   * Includes command lifecycle management
   * 
   * @param {Function} fn - Command action function to wrap
   * @returns {this} - The command instance for chaining
   */
  public forgeAction(
    fn: (...args: any[]) => any | Promise<any>
  ): this {
    return this.action(async (...args) => {
      try {
        // Emit "beforeAction" event
        this.events.emit('beforeAction', this.name());
        
        // Execute the command function
        await fn(...args);
        
        // Run "post" lifecycle hooks
        await this.runLifecycleHooks('post');
        
        // Stop command timer and show timing if requested
        this.stopTimer('command');
        this.displayTimingInfo();
        
        // Emit "afterAction" event
        this.events.emit('afterAction', this.name());
      } catch (err) {
        // Run "error" lifecycle hooks
        await this.runLifecycleHooks('error');
        
        // Handle the error
        this.handleError(err);
      }
    });
  }

  /**
   * Start a timer for performance measurement
   * @param {string} label - Label for the timer
   * @returns {void}
   */
  public startTimer(label: string): void {
    this.timers[label] = { start: performance.now() };
  }

  /**
   * Stop a timer for performance measurement
   * @param {string} label - Label for the timer
   * @returns {number} Duration in milliseconds
   */
  public stopTimer(label: string): number {
    if (!this.timers[label]) {
      return 0;
    }
    
    this.timers[label].end = performance.now();
    return this.getTimerDuration(label);
  }

  /**
   * Get duration of a timer
   * @param {string} label - Label for the timer
   * @returns {number} Duration in milliseconds
   */
  public getTimerDuration(label: string): number {
    const timer = this.timers[label];
    if (!timer || !timer.end) {
      return 0;
    }
    
    return Math.round(timer.end - timer.start);
  }

  /**
   * Display timing information if enabled
   * @private
   */
  private displayTimingInfo(): void {
    const opts = this.opts<ForgeCommandOptions>();
    if (!opts.timing) {
      return;
    }
    
    console.log('\nTiming Information:');
    
    for (const [label, timer] of Object.entries(this.timers)) {
      if (timer.end) {
        const duration = this.getTimerDuration(label);
        console.log(`- ${label}: ${duration}ms`);
      }
    }
  }

  /**
   * Register a plugin with the command system
   * @param {string} name - Plugin name
   * @param {object} plugin - Plugin implementation
   * @returns {this} The command instance for chaining
   */
  public registerPlugin(name: string, plugin: any): this {
    if (!this.config.plugins) {
      this.config.plugins = [];
    }
    
    // Store plugin reference
    (this as any)[`plugin_${name}`] = plugin;
    
    console.debug(`Registered plugin: ${name}`);
    return this;
  }

  /**
   * Centralized error handling
   * @param {unknown} error - Error to handle
   * @private
   */
  private handleError(error: unknown) {
    // Stop spinner if active
    this.stopSpinner();
    
    // Get detailed error information
    const errorMessage = error instanceof Error ? error.message : String(error);
    const errorStack = error instanceof Error ? error.stack : undefined;
    
    // Determine error severity based on error type
    const isFatal = !(error instanceof Warning);
    
    // Get options
    const opts = this.opts<ForgeCommandOptions>();
    
    // Skip if silent mode is enabled
    if (this.logLevel !== LogLevel.SILENT) {
      // Display error message
      if (this.useColors) {
        console.error(chalk.red(`\n[ForgeCLI Error] ${errorMessage}\n`));
      } else {
        console.error(`\n[ForgeCLI Error] ${errorMessage}\n`);
      }
      
      // Print stack trace in debug mode
      if (opts.debug && errorStack) {
        console.debug(chalk.gray(errorStack));
      }
    }

    // Emit error event
    this.events.emit('error', error);
    
    // Exit on fatal errors
    if (isFatal) {
      process.exit(1);
    }
  }

  /**
   * Display a spinner for long-running tasks
   * @param {string} message - Message to display while spinning
   * @returns {this} The command instance for chaining
   */
  public showSpinner(message: string): this {
    // Don't show spinner in silent mode
    if (this.logLevel === LogLevel.SILENT) {
      return this;
    }
    
    // Create spinner if it doesn't exist
    if (!this.spinner) {
      this.spinner = new Spinner({
        text: message,
        stream: process.stderr,
        onTick: function(msg) {
          this.clearLine(this.stream);
          this.stream.write(msg);
        }
      });
      
      // Configure spinner
      this.spinner.setSpinnerString('⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏');
      this.spinner.start();
    } else {
      // Update spinner text
      this.spinner.setSpinnerTitle(message);
    }
    
    return this;
  }

  /**
   * Update spinner message
   * @param {string} message - New message for the spinner
   * @returns {this} The command instance for chaining
   */
  public updateSpinner(message: string): this {
    if (this.spinner) {
      this.spinner.setSpinnerTitle(message);
    }
    return this;
  }

  /**
   * Stop the spinner
   * @param {string} [finalMessage] - Optional final message to display
   * @returns {this} The command instance for chaining
   */
  public stopSpinner(finalMessage?: string): this {
    if (this.spinner) {
      this.spinner.stop(true);
      this.spinner = null;
      
      if (finalMessage && this.logLevel !== LogLevel.SILENT) {
        console.log(finalMessage);
      }
    }
    return this;
  }

  /**
   * Add a command alias
   * @param {string} alias - Alias for the command
   * @returns {this} The command instance for chaining
   */
  public setAlias(alias: string): this {
    return this.alias(alias);
  }

  /**
   * Register an event listener
   * @param {string} event - Event name
   * @param {Function} listener - Event listener
   * @returns {this} The command instance for chaining
   */
  public on(event: string, listener: (...args: any[]) => void): this {
    this.events.on(event, listener);
    return this;
  }

  /**
   * Get configuration value
   * @param {string} key - Configuration key
   * @param {any} [defaultValue] - Default value if key doesn't exist
   * @returns {any} Configuration value
   */
  public getConfig<T = any>(key: string, defaultValue?: T): T {
    return key.split('.').reduce((obj, part) => obj && obj[part], this.config as any) || defaultValue;
  }

  /**
   * Set configuration value
   * @param {string} key - Configuration key
   * @param {any} value - Value to set
   * @returns {this} The command instance for chaining
   */
  public setConfig(key: string, value: any): this {
    const parts = key.split('.');
    const lastKey = parts.pop()!;
    const target = parts.reduce((obj, part) => {
      if (!obj[part]) obj[part] = {};
      return obj[part];
    }, this.config as any);
    
    target[lastKey] = value;
    return this;
  }

  /**
   * Create an interactive prompt for user input
   * @param {object} options - Prompt options
   * @returns {Promise<any>} User input
   */
  public async prompt<T = any>(options: any): Promise<T> {
    try {
      // Import inquirer dynamically to avoid dependency if not used
      const { default: inquirer } = await import('inquirer');
      return await inquirer.prompt(options);
    } catch (error) {
      throw new Error(`Failed to create prompt: ${error}`);
    }
  }

  /**
   * Create a subclass of Error for non-fatal warnings
   */
  public createWarning(message: string): Warning {
    return new Warning(message);
  }
}

/**
 * Warning class for non-fatal errors
 * @class Warning
 * @extends Error
 */
export class Warning extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'Warning';
  }
}

/**
 * Create a command with default configuration
 * @param {string} [name] - Command name
 * @returns {ForgeCommand} Configured command instance
 */
export function createCommand(name?: string): ForgeCommand {
  return new ForgeCommand(name);
}
