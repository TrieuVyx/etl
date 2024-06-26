import { Layout } from "antd"
import Navbar from "../component/header/navbar/navbar"
const { Header, Footer, Content, Sider } = Layout;
const headerStyle = {
    background: "rgba(0, 0, 0, 0.88)"
}



export default function homePages() {

    return (
        <div className="w-100">
            <Layout >
                <Sider width="30%"><Navbar/></Sider>
                <Layout >
                    <Header style={headerStyle}></Header>
                    <Content></Content>
                    <Footer></Footer>
                </Layout>
            </Layout>

        </div>
            
    )
}