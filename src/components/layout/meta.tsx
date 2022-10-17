import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta name="title" content="Maxim Zhelev | Frontend Developer" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Maxim Zhelev - Frontend Developer',
  keywords: 'web development, programming, web design',
  description:
    'Frontend Developer. A self-motivated and lifelong learner familiar with modern web development and web3 technologies.'
};

export default Meta;
