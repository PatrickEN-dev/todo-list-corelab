import { CardCrudProvider } from "@/context/Card/CardCrudContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CardCrudProvider>
      <Component {...pageProps} />
    </CardCrudProvider>
  );
}
