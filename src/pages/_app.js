import Theme from '../styles/theme';
import '../styles/global.css';
import "tailwindcss/tailwind.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 