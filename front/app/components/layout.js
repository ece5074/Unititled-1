import Header from './header'

const layoutStyle = {
    margin: 15,
    padding: 15,
    border: '1px solid #DDD'
}

const Layout = (props) => (
    <div style={layoutStyle}>
        <Header/>
        {props.children}
    </div>
)

export default Layout