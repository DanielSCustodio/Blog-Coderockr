import React from 'react';
import Link from 'next/link';
import { Container, Info, Navigation } from './styles';

export const Header: React.FC = () => {
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
          <Link href="/posts">
            <a>Posts</a>
          </Link>
          <Link href="#">
            <a>Contact</a>
          </Link>
        </nav>
      </Navigation>
    </Container>
  );
};
