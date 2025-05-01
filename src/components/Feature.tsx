import { JSX } from "react";

export default function Feature({ emoji, headline, description }: { emoji: string, headline: string, description: string }): JSX.Element {
  return (
    <div>
      <div>{emoji}</div>
      <h3>{headline}</h3>
      <p>{description}</p>
    </div>
  )
}