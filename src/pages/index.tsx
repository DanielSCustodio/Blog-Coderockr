import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import api from '../service/api';
import { Container } from '../styles/styles';
import { Post, PostProps } from '../interface/pots';

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
    <Container>
      {list &&
        list.map((item: Post) => (
          <article key={item.id}>
            <h3>{item.author}</h3>
            <h2> {item.title}</h2>
            <img src={item.image} />
            <div></div>
            <time>{item.date}</time>
            <Link href={item.id}>
              <a> &#187;</a>
            </Link>
          </article>
        ))}
      <div id="limit" />
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('/articles?_page=1&_limit=99');

  const posts = response.data.map((post) => {
    return {
      id: post.id,
      author: post.author,
      title: post.title,
      article: String(post.article.slice(0, 115)),
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
