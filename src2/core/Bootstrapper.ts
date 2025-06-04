import { ForgeCommand } from '../managers';
import { CommandRegistry } from '../core';

import { Commands } from '../commands';
import { version } from '../../package.json';

import type { BootstrapOptions } from '...';

// Make so it checks the cache and based
// on the current cache, it setup options
// use the ConfigManager class

interface BootstrapperScheme {
  initialize?(): void;
}

export class Bootstrapper {
  constructor(options?: 
}
