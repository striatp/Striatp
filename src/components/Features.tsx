import Feature from '@components/Feature';
import Container from '@components/Container';

export default function Features() {
  return (
    <Container>
      <section>
        <div>
          <h2>Nos expertises</h2>
          <div>
            <Feature emoji='⚛️' headline='Développement Next.js' description="Création d'applications web performantes et SEO-friendly avec le framework React Next.js et TypeScript."></Feature>
            <Feature emoji='🔒' headline='Sécurité Applicative' description="Mise en œuvre des meilleures pratiques de sécurité pour protéger vos données et applications."></Feature>
            <Feature emoji='📱' headline='Interfaces Responsives' description="Conception d'interfaces utilisateur élégantes et adaptatives avec Tailwind CSS."></Feature>
          </div>
        </div>
      </section>
    </Container>
  )
}