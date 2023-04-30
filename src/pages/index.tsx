/* eslint-disable @next/next/no-page-custom-font */
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
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
        <div className="flex h-12 w-screen items-center justify-center">
          <h1 className="w-[80%] pt-2 text-center text-4xl text-white drop-shadow-md">
            Anime<span className=" font-bold text-indigo-600">DB</span>
          </h1>
          <button className="mx-2 flex w-24 items-center justify-center rounded-md bg-indigo-600 drop-shadow-md">
            <span className="btn py-1 text-right text-xl text-white">
              SignIn
            </span>
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;
