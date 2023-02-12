import "../styles/globals.css";
import { BagContextProvider } from "../contexts/BagContext";

export default function App({ Component, pageProps }) {
  return (
    <BagContextProvider>
      <Component {...pageProps} />
    </BagContextProvider>
  );
}
