export enum ComponentStatus {
  Stable = "stable",
  Beta = "beta",
  Deprecated = "deprecated",
}
  
export type Theme = "light" | "dark";
  
export type ComponentCategory =
  | "Layout"
  | "Navigation"
  | "Input"
  | "Data Display"
  | "Feedback"
  | "Overlay"
  | "Media"
  | "Other";
  
export interface UsageExample {
  description: string;
  code: string;
}
  
export interface ComponentMetadata {
  /** Display name of the component */
  title: string;

  /** Short description of what the component does */
  description: string;

  /** Author or team name */
  author: string;

  /** Searchable tags or keywords */
  keywords: string[];

  /** Optional component identifier for systems like Storybook */
  componentName?: string;

  /** Which category the component belongs to */
  category?: ComponentCategory;

  /** Development status */
  status?: ComponentStatus;

  /** JSX usage snippet */
  usage?: string;

  /** ISO 8601 string (e.g., 2025-04-24T12:00:00Z) */
  createdAt?: string;

  /** ISO 8601 updated timestamp */
  updatedAt?: string;

  /** Semantic version string (e.g., 1.0.0) */
  version?: string;

  /** If true, this component is internal-only */
  private?: boolean;

  /** If false, hide it from navigation menus or UI explorer */
  visibleInNav?: boolean;

  /** If true, the component should be lazy-loaded */
  lazyLoad?: boolean;

  /** If true, viewing the component requires authentication */
  requiresAuth?: boolean;

  /** Optional list of authorized roles */
  roles?: string[];

  /** Related API endpoint */
  apiEndpoint?: string;

  /** Indicates dynamic behavior (like SSR or ISR) */
  dynamic?: boolean;

  /** How often to refetch dynamic data (in seconds) */
  fetchInterval?: number;

  /** Link to external documentation */
  documentationUrl?: string;

  /** Optional link to changelog */
  changelogUrl?: string;

  /** List of related or similar components */
  relatedComponents?: string[];

  /** Code examples for docs or previews */
  examples?: UsageExample[];

  /** Embed styling for preview or social cards */
  embed: {
    /** Accent or card color */
    color: string;

    /** Screenshot or preview image */
    image: string;

    /** Optional icon (URL or local path) */
    icon?: string;

    /** Light/dark visual context */
    theme?: Theme;
  };
}