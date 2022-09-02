// Global CSS to be loaded by every page and can only be imported
// from here in pages/_app.js because global CSS affects all elements on the page.

import '../styles/global.css';

const App = ({ Component, pageProps }) => {
    return <Component  {...pageProps} />
}

export default App