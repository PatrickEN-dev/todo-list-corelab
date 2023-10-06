import Colors from "@/components/Colors";
import Header from "@/components/Header";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Colors />
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
