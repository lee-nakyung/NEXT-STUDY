import Layout from "@/components/Layout";
export default function App({Component, pageProps}){
    return (
        <Layout>
    <Component {...pageProps}/>
    <footer></footer>
    </Layout>
    );
}