import Layout from '../app/components/layout'

export default (props) => (
    <Layout> 
        <h1>{props.url.query.title}</h1>
        <p>this is the blog describe.</p>
    </Layout>
)