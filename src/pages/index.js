import Head from 'next/head';
import Layout, { siteTitle }  from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import getSortedPostsData  from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

// add the following code above the exported Home component:
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

// the blog posts will be passed to the Home component as a prop.
const Home = ({ allPostsData }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[My name is SK, and I am a software and web developer with
           a degree in computer science. Currently I am looking for an 
           entry level Front-End Developer or Web Content Developer position.]</p>
        <p>
          (This is a demo website - you can also follow the step-by-step instructions from this tutorial and learn more about Next.js{' '}
          <a href='https://nextjs.org/learn'>Our Next.js Tutorial</a>
        </p>

      </section>

      {/* To display & import the blog posts from Markdown files, update Home component and it is styled using
      properties from css file from '../styles/utils.module.css';  */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}><a> {title}</a></Link>
             
              <br />
             <small className={utilStyles.lightText}>
              <Date  dateString={date} />
             </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export default Home



