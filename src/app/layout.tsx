"use client"; // Ensures this layout runs as a client component

import { Inter } from "next/font/google";
import "./globals.css";
import "rsuite/dist/rsuite.min.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../utils/redux/store";
import ClientAuth from "../components/ClientAuth";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={inter.className}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ClientAuth>
              <main>{children}</main>
            </ClientAuth>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
