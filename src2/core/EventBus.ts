import { EventEmitter } from 'node:events';

/**
 * An interface defining how the EventBus is structured.
 */
interface EventBusScheme {
  on<T = any>(
    event: string,
    handler: (payload: T) => void
  ): this;
  
  off<T = any>(
    event: string,
    handler: (payload: T) => void
  ): this;
  
  emit<T = any>(
    event: string,
    payload?: T
  ): boolean;
  
  once<T = any>(
    event: string,
    handler: (payload: T) => void
  ): this;
  
  clear(event: string): this;
 
  clearAll(): this;
  
  listenerCount(event: string): number;
  
  eventNames(): string[];
}

/**
 * A class to handle custom events using Node.js EventEmitter.
 * Provides a type-safe wrapper around EventEmitter with enhanced functionality.
 */
export class EventBus implements EventBusScheme {
  /**
   * Internal EventEmitter instance.
   */
  private emitter: EventEmitter;

  constructor(options?: { maxListeners?: number }) {
    this.emitter = new EventEmitter();
    if (options?.maxListeners) {
      this.emitter.setMaxListeners(options.maxListeners);
    }
  }

  /**
   * Register an event listener.
   */
  public on<T>(
    event: string,
    handler: (payload: T) => void
  ): this {
    this.validateEvent(event);
    this.validateHandler(handler);
    
    this.emitter.on(event, handler);
    return this;
  }

  /**
   * Remove an event listener.
   */
  public off<T>(
    event: string,
    handler: (payload: T) => void
  ): this {
    this.validateEvent(event);
    this.validateHandler(handler);
    
    this.emitter.off(event, handler);
    return this;
  }

  /**
   * Emit an event with optional payload.
   * Returns true if the event had listeners, false otherwise.
   */
  public emit<T>(
    event: string,
    payload?: T
  ): boolean {
    this.validateEvent(event);
    
    try {
      return this.emitter.emit(event, payload);
    } catch (error) {
      console.error(`Error emitting event '${event}':`, error);
      return false;
    }
  }

  /**
   * Register a one-time event listener.
   */
  public once<T>(
    event: string,
    handler: (payload: T) => void
  ): this {
    this.validateEvent(event);
    this.validateHandler(handler);
    
    this.emitter.once(event, handler);
    return this;
  }

  /**
   * Remove all listeners for a specific event.
   */
  public clear(event: string): this {
    this.validateEvent(event);
    this.emitter.removeAllListeners(event);
    return this;
  }

  /**
   * Remove all listeners for all events.
   */
  public clearAll(): this {
    this.emitter.removeAllListeners();
    return this;
  }

  /**
   * Get the number of listeners for a specific event.
   */
  public listenerCount(event: string): number {
    this.validateEvent(event);
    return this.emitter.listenerCount(event);
  }

  /**
   * Get an array of all event names that have listeners.
   */
  public eventNames(): string[] {
    return this.emitter.eventNames().map(name => String(name));
  }

  /**
   * Set the maximum number of listeners for this EventBus.
   */
  public setMaxListeners(max: number): this {
    this.emitter.setMaxListeners(max);
    return this;
  }

  /**
   * Get the maximum number of listeners for this EventBus.
   */
  public getMaxListeners(): number {
    return this.emitter.getMaxListeners();
  }

  /**
   * Validate event name.
   */
  private validateEvent(event: string): void {
    if (!event || typeof event !== 'string') {
      throw new Error('Event name must be a non-empty string');
    }
  }

  /**
   * Validate event handler.
   */
  private validateHandler(handler: Function): void {
    if (typeof handler !== 'function') {
      throw new Error('Event handler must be a function');
    }
  }
}

// Usage example:
const eventBus = new EventBus({ maxListeners: 50 });

// Chaining support
eventBus
  .on<string>('user:login', (username) => {
    console.log(`User ${username} logged in`);
  })
  .on<{ id: number; name: string }>('user:created', (user) => {
    console.log(`New user created: ${user.name} (ID: ${user.id})`);
  });

// One-time listener
eventBus.once<string>('app:ready', (message) => {
  console.log('App is ready:', message);
});

// Emit events
eventBus.emit('user:login', 'john_doe');
eventBus.emit('user:created', { id: 1, name: 'John Doe' });
eventBus.emit('app:ready', 'All systems operational');

// Check listener count
console.log('Login listeners:', eventBus.listenerCount('user:login'));

// Get all event names
console.log('Active events:', eventBus.eventNames());