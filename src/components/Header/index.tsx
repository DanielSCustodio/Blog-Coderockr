import React from 'react';
import Link from 'next/link';
import { Container, Info, Navigation } from './styles';

export default function Header() {
  return (
    <Container>
      <Info>
        <Link href="/">
          <a>
            <p>Rockr Blog</p>
            <img src="images/logo.svg" alt="Rockr Blog" />
          </a>
        </Link>
      </Info>
      <Navigation>
        <nav>
          <Link href="/">
            <a>Posts</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </nav>
      </Navigation>
    </Container>
  );
}
