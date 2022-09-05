// Pages that begin with [ and end with ] are dynamic routes in Next.js.

import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from '../../styles/utils.module.css';

// add the async function getStaticPaths() above the Post component
// The getStaticPaths() function returns an array of possible values for id
export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    }
}

// which will return the post data based on id:
// This getStaticProps({ params }) function will fetch the necessary data for the
// post with id ( based on file name)
export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

// this Post component will dynamically render (generate) post pages & was added here first
// updating the Post component to use postData parameter
const Post = ({ postData }) => {
    return (
        <Layout>
            {/* Adding title to the Post Page */}
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            
            <div className={utilStyles.lightText}>
            {/* Date component used with dateString object */}
            <Date dateString={postData.date} />

            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

            </article>
        </Layout>
    );
}

export default Post


