import { JSX } from "react";
import ProjectCard from '@components/ProjectCard';
import Container from '@components/Container';

export default function Projects(): JSX.Element {
  return (
    <section>
      <Container>
        <h2>Nos projets</h2>
        <div>
          <ProjectCard emoji="📊" title="DataViz Platform" description="Plateforme de visualisation de données open source avec des graphiques interactifs." tools={["Next.js", "TypeScript"]}></ProjectCard>
          <ProjectCard emoji="🔧" title="DevTools Suite" description="Collection d'outils pour optimiser le workflow des développeurs." tools={["TypeScript", "Node.js", "CLI"]}></ProjectCard>
          <ProjectCard emoji="🚀" title="Performance Analyzer" description="Outil d'analyse de performance pour applications web modernes." tools={["Next.js", "WebAssembly", "Tailwind"]}></ProjectCard>
        </div>
      </Container>
    </section>
  )
}