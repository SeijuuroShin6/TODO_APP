import "@/styles/main.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export const metaData = {
   title: "Todo App",
};