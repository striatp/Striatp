import { z } from 'zod';

/**
 * Enum representing the status of a component in the system.
 * 
 * @enum {string}
 * @property {string} Stable - Indicates that the component is stable and ready for production use.
 * @property {string} Beta - Indicates that the component is in beta and may still undergo changes.
 * @property {string} Deprecated - Indicates that the component is deprecated and should no longer be used.
*/
export enum ComponentStatus {
  Stable = "Stable",
  Beta = "Beta",
  Deprecated = "Deprecated",
};

/**
 * Represents the theme options available for the application.
 * 
 * @typedef Theme
 * @type {"Light" | "Dark"}
 * 
 * @remarks
 * - `"Light"`: Represents a light theme.
 * - `"Dark"`: Represents a dark theme.
*/
export type Theme = "Light" | "Dark";

/**
 * Represents the category of a component in the system.
 * 
 * Categories are used to classify components based on their purpose or functionality.
 * 
 * Possible values:
 * - `"Layout"`: Components related to structuring and arranging content.
 * - `"Navigation"`: Components that facilitate movement within the application.
 * - `"Input"`: Components for user input, such as forms or controls.
 * - `"Data Display"`: Components for presenting data to the user.
 * - `"Feedback"`: Components for providing feedback to the user, such as alerts or notifications.
 * - `"Overlay"`: Components that appear on top of other content, such as modals or popups.
 * - `"Media"`: Components for handling media content, such as images or videos.
 * - `"Other"`: Components that do not fit into the predefined categories.
*/
export type ComponentCategory =
  | "Layout"
  | "Navigation"
  | "Input"
  | "Data Display"
  | "Feedback"
  | "Overlay"
  | "Media"
  | "Other";

/**
 * Represents an example usage of a component, including a description
 * and the corresponding code snippet.
*/
export interface UsageExample {
  /** Short description of the usage example */
  readonly description: string;
  /** Code for the usage example */
  readonly code: string;
};

/**
 * Interface representing metadata for a component.
*/
export default interface ComponentMetadata {
  /** Display name of the component */
  readonly title: string;

  /** Short description of what the component does */
  readonly description: string;

  /** Author or team name */
  readonly author: string;

  /** Searchable tags or keywords */
  readonly keywords: string[];

  /** Optional component identifier for systems like Storybook */
  readonly componentName?: string | null; // Default: null

  /** Which category the component belongs to */
  readonly category?: ComponentCategory | null; // Default: null

  /** Development status */
  readonly status?: ComponentStatus | null; // Default: null

  /** JSX usage snippet */
  readonly usage?: string | null; // Default: null

  /** ISO 8601 string (e.g., 2025-04-24T12:00:00Z) */
  readonly createdAt?: string | null; // Default: null

  /** ISO 8601 updated timestamp */
  readonly updatedAt?: string | null; // Default: null

  /** Semantic version string (e.g., 1.0.0) */
  readonly version?: string | null; // Default: null

  /** If true, this component is internal-only */
  readonly private?: boolean | null; // Default: null

  /** If false, hide it from navigation menus or UI explorer */
  readonly visibleInNav?: boolean | null; // Default: null

  /** If true, the component should be lazy-loaded */
  readonly lazyLoad?: boolean | null; // Default: null

  /** If true, viewing the component requires authentication */
  readonly requiresAuth?: boolean | null; // Default: null

  /** Optional list of authorized roles */
  readonly roles?: string[] | null; // Default: null

  /** Related API endpoint */
  readonly apiEndpoint?: string | null; // Default: null

  /** Indicates dynamic behavior (like SSR or ISR) */
  readonly dynamic?: boolean | null; // Default: null

  /** How often to refetch dynamic data (in seconds) */
  readonly fetchInterval?: number | null; // Default: null

  /** Link to external documentation */
  readonly documentationUrl?: string | null; // Default: null

  /** Optional link to changelog */
  readonly changelogUrl?: string | null; // Default: null

  /** List of related or similar components */
  readonly relatedComponents?: string[] | null; // Default: null

  /** Code examples for docs or previews */
  readonly examples?: UsageExample[] | null; // Default: null

  /** Embed styling for preview or social cards */
  readonly embed?: {
    /** Accent or card color */
    readonly color?: string | null; // Default: null

    /** Screenshot or preview image */
    readonly image?: string | null; // Default: null

    /** Optional icon (URL or local path) */
    readonly icon?: string | null; // Default: null

    /** Light/dark visual context */
    readonly theme?: Theme | null; // Default: null
  };
}

/**
 * Represents a type that makes all properties of `ComponentMetadata` optional.
 * This is useful for scenarios where only a subset of the `ComponentMetadata` 
 * properties are required or need to be specified.
*/
type PartialComponentMetadata = Partial<ComponentMetadata>;

/**
 * Schema for defining metadata of a component.
 * 
 * @constant
 * @property {string} title - The title of the component.
 * @property {string} description - A brief description of the component.
 * @property {string} author - The author of the component.
 * @property {string[]} keywords - An array of keywords associated with the component.
 * @property {string} [componentName] - The name of the component (optional).
 * @property {"Layout" | "Navigation" | "Input" | "Data Display" | "Feedback" | "Overlay" | "Media" | "Other"} [category] - The category of the component (optional).
 * @property {"Stable" | "Beta" | "Deprecated"} [status] - The current status of the component (optional).
 * @property {string} [createdAt] - The creation date of the component (optional).
 * @property {string} [updatedAt] - The last updated date of the component (optional).
 * @property {string} [version] - The version of the component (optional).
 * @property {boolean} [private] - Indicates if the component is private (optional).
 * @property {boolean} [visibleInNav=true] - Determines if the component is visible in navigation (default: true).
 * @property {boolean} [lazyLoad=false] - Indicates if the component should be lazy-loaded (default: false).
 * @property {boolean} [requiresAuth=false] - Indicates if the component requires authentication (default: false).
 * @property {string[]} [roles] - An array of roles required to access the component (optional).
 * @property {string} [apiEndpoint] - The API endpoint associated with the component (optional).
 * @property {boolean} [dynamic] - Indicates if the component is dynamic (optional).
 * @property {number} [fetchInterval] - The interval for fetching data in milliseconds (optional).
 * @property {string} [documentationUrl] - The URL to the component's documentation (optional).
 * @property {string} [changelogUrl] - The URL to the component's changelog (optional).
 * @property {string[]} [relatedComponents] - An array of related component names (optional).
 * @property {Array<{description: string, code: string}>} [examples] - An array of examples with descriptions and code snippets (optional).
 * @property {Object} embed - Embed configuration for the component.
 * @property {string} embed.color - The color used in the embed.
 * @property {string} embed.image - The image URL used in the embed.
 * @property {string} [embed.icon] - The icon URL used in the embed (optional).
 * @property {"Light" | "Dark"} [embed.theme] - The theme of the embed (optional).
*/
export const ComponentMetadataSchema = z.object({
  title: z.string(),
  description: z.string(),
  author: z.string(),
  keywords: z.array(z.string()),
  componentName: z.string().optional(),
  category: z.enum(["Layout", "Navigation", "Input", "Data Display", "Feedback", "Overlay", "Media", "Other"]).optional(),
  status: z.enum(["Stable", "Beta", "Deprecated"]).optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  version: z.string().optional(),
  private: z.boolean().optional(),
  visibleInNav: z.boolean().default(true),
  lazyLoad: z.boolean().default(false),
  requiresAuth: z.boolean().default(false),
  roles: z.array(z.string()).optional(),
  apiEndpoint: z.string().optional(),
  dynamic: z.boolean().optional(),
  fetchInterval: z.number().optional(),
  documentationUrl: z.string().optional(),
  changelogUrl: z.string().optional(),
  relatedComponents: z.array(z.string()).optional(),
  examples: z.array(
    z.object({
      description: z.string(),
      code: z.string(),
    })
  ).optional(),
  embed: z.object({
    color: z.string(),
    image: z.string(),
    icon: z.string().optional(),
    theme: z.enum(["Light", "Dark"]).optional(),
  }),
});