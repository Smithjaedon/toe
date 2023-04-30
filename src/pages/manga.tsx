/* eslint-disable @next/next/no-page-custom-font */
import { type NextPage } from "next";
import Head from "next/head";
import React from "react";
import Link from "next/link";
import Navbar from "./components/navbar";

const Test: NextPage = () => {
  return (
    <>
      <Head>
        <title>AnimeDB</title>
        <meta name="description" content="Anime DataBase" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 font-[Lato]">
        <Navbar />
        <h1>Hello World</h1>
      </main>
    </>
  );
};

export default Test;
