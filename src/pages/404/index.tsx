import React from 'react';
import Link from 'next/link';
import styles from './styles.module.sass';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1>
        <span>404</span> - This page could not be found.
      </h1>
      <Link href="/">
        <a>↩ Back</a>
      </Link>
    </div>
  );
}
