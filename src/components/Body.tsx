import { JSX } from 'react';
import Children from '@children';
import ComponentMetadata from '@/types/component-metadata';

/**
 * Metadata for the Footer Component.
 *
 * @title Footer Component
 * @description This is the footer component for the Ravium Labs website.
 * @author Ravium Labs
 * @componentName Footer
 * @category Layout
 * @usage Beta
 * @createdAt 2025-04-25
 * @updatedAt 2025-04-29
 * @version 1.0
 * @private false
 * @visibleInNav false
 * @requiresAuth false
 * @keywords ["Footer", "Ravium Labs", "React", "Next.js", "Component"]
 * @embed.color #0f172a
 * @embed.image https://example.com/footer-image.png
*/
const componentMetadata: ComponentMetadata = {
  title: "Body Component",
  description: "This is the body wrapper for the Ravium Labs website.",
  author: "Ravium Labs",
  componentName: "Body",
  category: "Layout",
  usage: "Beta",
  createdAt: "2025-04-30",
  updatedAt: "2025-04-30",
  version: "1.0.0",
  private: false,
  visibleInNav: false,
  requiresAuth: false,
  keywords: ["Footer", "Ravium Labs", "React", "Next.js", "Component"],
  embed: {
    color: "#0f172a",
    image: "https://example.com/footer-image.png",
  },
};



/**
 * Props for the `Body` component.
 *
 * @extends Children
 * 
 * @property {string} [bgColor] - Optional background color for the component.
*/
interface BodyProps extends Children {
  bgColor?: string;
}

/**
 * The `Body` component serves as a wrapper for the main content of the Ravium Labs website.
 * It provides a flexible layout with customizable background color.
 *
 * @component
 * @param {BodyProps} props - The properties for the `Body` component.
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the `Body` component.
 * @param {string} [props.bgColor='#1e293b'] - The background color of the `Body` component. Defaults to a dark blue shade.
 * @returns {JSX.Element} A styled `div` element wrapping the provided children.
 *
 * @example
 * ```tsx
 * <Body bgColor="#ffffff">
 *   <h1>Welcome to Ravium Labs</h1>
 * </Body>
 * ```
*/
export default function Body({ children, bgColor = '#1e293b' }: BodyProps): JSX.Element {
  return (
    <div className={`flex flex-col justify-center min-h-screen text-white`} style={{ backgroundColor: bgColor }}>
      {children}
    </div>
  );
}