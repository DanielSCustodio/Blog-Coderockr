import React from 'react';
import Link from 'next/link';
import { Container } from './styles';

export default function NotFound() {
  return (
    <Container>
      <h1>
        <span>404</span> - This page could not be found.
      </h1>
      <Link href="/">
        <a>↩ Back</a>
      </Link>
    </Container>
  );
}
