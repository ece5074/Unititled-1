import Layout from '../app/components/layout'
import Link from 'next/link'

const PostLink = (props) => (
    <li>
        <Link as={`/blog/${props.id}`} href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)


export default () => (
    <Layout>
        <h1>Blog Test</h1>
        <ul>
            <PostLink id="admin" title="Hello.js"/>
            <PostLink id="root"  title="react.js"/>
            <PostLink id="none" title="next.js"/>
        </ul>
    </Layout>
);