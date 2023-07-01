import Layout from "@/components/layout/layout";
import { AuthProvider } from "@/contexts/AuthContext";
import { BookingsProvider } from "@/contexts/BookingsContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider>
      <AuthProvider>
        <BookingsProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </BookingsProvider>
      </AuthProvider>
    </SnackbarProvider>
  );
}
