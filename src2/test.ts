import { type ApplicationCommand } from "../command/command";
import { type CommandHooks } from "../command/hooks";
import { type ApplicationOptions } from "../config/app-options";
import { type Flag } from "../core/flag";
import {
  type ApplicationInternalization,
  type ApplicationMetadata,
} from "./metadata";
import { type ApplicationOriginMetadata } from "./metadata";
import { type ApplicationDocumentation } from "./metadata";
import { type ApplicationSecurity } from "./metadata";

/**
 * Represents a Nocra application.
 */
export interface NocraApplication
  extends ApplicationMetadata,
    ApplicationPlugins,
    ApplicationHooks,
    ApplicationGlobalFlags,
    ApplicationCommands,
    ApplicationInternalization,
    ApplicationOriginMetadata,
    ApplicationDocumentation,
    ApplicationSecurity {
  /** Whether the application is deprecated. */
  deprecated?: boolean;

  /** Whether to enable strict mode. */
  strict?: boolean;

  /** Whether to allow unknown flags. */
  allowUnknownFlags?: boolean;

  /** Application configuration options. */
  configuration: ApplicationOptions;
}

/**
 * Represents application plugins.
 */
export interface ApplicationPlugins {
  /** List of plugin names or paths. */
  plugins: string[];
}

/**
 * Represents application hooks.
 */
export interface ApplicationHooks {
  /** Global hooks for all commands. */
  hooks?: CommandHooks;
}

/**
 * Represents global flags for the application.
 */
export interface ApplicationGlobalFlags {
  /** Global flags available to all commands. */
  flags?: Record<string, Flag<any>>;
}

/**
 * Represents application commands.
 */
export interface ApplicationCommands {
  /** List of commands. */
  commands: ApplicationCommand[];
}
