import React from 'react';
import Link from 'next/link';
import styles from './styles.module.sass';
export default function Header() {
  return (
    <header className={styles.container}>
      <div>
        <Link href="/">
          <a>
            <p>Rockr Blog</p>
            <img src="images/logo.svg" alt="Rockr Blog" />
          </a>
        </Link>
      </div>
      <div>
        <nav>
          <Link href="/">
            <a>Posts</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
