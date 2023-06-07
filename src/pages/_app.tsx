import { Layout } from "@/components";
import { LoaderProvider } from "@/context/Loader";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LoaderProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LoaderProvider>
  );
}
