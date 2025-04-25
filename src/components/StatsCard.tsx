import { JSX } from 'react';
import Container from '@components/Container';

export default function StatsCard({ name, value }: { name: string, value: string | number }): JSX.Element {
  return (
    <Container>
        <div>
          <h3>{name}</h3>
          <p>{value}</p>
        </div>
    </Container>
  )
}