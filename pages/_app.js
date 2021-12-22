import '../styles/reset.css';
import '../styles/main.css';
// import "bulma/css/bulma.css"
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
