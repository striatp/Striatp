import { JSX } from "react";

export default function ProjectCard({ emoji, title, description, tools }: { emoji: string, title: string, description: string, tools: string[] }): JSX.Element {
  return (
    <div>
      <div>{emoji}</div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
          {tools.map((tool, index) => <span key={index}>{tool}</span>)}
        </div>
      </div>
    </div>
  )
}