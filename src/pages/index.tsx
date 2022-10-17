/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from 'next';
import parse from 'html-react-parser';
import Link from 'next/link';
import React from 'react';
import api from '../service/api';
import { Post, PostProps } from '../interface/post';
import styles from '../styles/home.module.sass';

export default function Index({ posts }: PostProps) {
  const [list, setList] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(0);
  React.useEffect(() => {
    setList([...posts.slice(0, currentPage)]);
  }, [currentPage, posts]);

  React.useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      const isVisible = entries.some((entry) => entry.isIntersecting);
      if (isVisible) {
        setCurrentPage((currentPageInside) => currentPageInside + 5);
      }
    });
    intersectionObserver.observe(document.querySelector('#limit'));
    return () => intersectionObserver.disconnect();
  }, []);

  return (
    <div className={styles.container}>
      {list &&
        list.map((item: Post) => (
          <article key={item.id}>
            <img src={item.image} alt={item.title} />
            <section className="content">
              <h3>{item.author}</h3>
              <h2> {parse(item.title)}</h2>
              <span>{parse(item.article)}</span>
              <div>
                <time>
                  <b>{item.date}</b>
                </time>
                <Link href={`posts/${item.id}`}>
                  <a> &#187;</a>
                </Link>
              </div>
            </section>
          </article>
        ))}
      <div id="limit" />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('/articles?_page=1&_limit=99');

  const posts = response.data.map((post) => {
    return {
      id: post.id,
      author: post.author,
      title: post.title,
      article: post.article.slice(0, 121) + '...',
      image: post.imageUrl,
      date: new Date(post.date).toLocaleDateString('en-us', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    };
  });

  return {
    props: { posts },
    revalidate: 60 * 60, //generates a static page every hour
  };
};
