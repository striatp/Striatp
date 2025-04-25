import Container from "@components/Container"

export default function Header() {
  return (
    <header>
      <Container>
        <div className="">
          <span className="logo-icon">R</span> Ravium Labs
        </div>
        <nav>
          <ul>
            <li><a href="#features">Fonctionnalités</a></li>
            <li><a href="#projects">Projets</a></li>
            <li><a href="#about">À propos</a></li>
            <li><a href="https://github.com/RaviumLabs" target="_blank">GitHub</a></li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}