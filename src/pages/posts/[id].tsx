import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import parse from 'html-react-parser';
import api from '../../service/api';
import styles from './styles.module.sass';
import { SinglePost } from '../../interface/post';

export default function Post({ postSingle }: SinglePost) {
  return (
    <div className={styles.container}>
      {postSingle && (
        <div className={styles.content}>
          <div className={styles.info}>
            <div>
              <img src={postSingle.image} alt={postSingle.title} />
            </div>
            <div>
              <time>{postSingle.date}</time>
              <p>{postSingle.author}</p>
              <h1>{postSingle.title}</h1>
            </div>
          </div>
          <div className={styles.article}>
            <span>{parse(postSingle.article)}</span>
          </div>
        </div>
      )}
      {!postSingle && <p className={styles.loading}>Loading...</p>}
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params;
  const response = await api.get('/articles?_page=1&_limit=99');
  const data = response.data.find((item) => item.id === id);

  const postSingle = {
    id,
    author: data.author,
    title: data.title,
    article: data.article,
    image: data.imageUrl,
    date: new Date(data.date).toLocaleDateString('en-us', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  };

  return {
    props: {
      postSingle,
    },
    revalidate: 60 * 60 * 12,
  };
};
