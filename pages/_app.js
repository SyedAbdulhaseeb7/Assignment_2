import "@/styles/globals.css";

// pages/_app.js
import Layout from "./layout";


function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
