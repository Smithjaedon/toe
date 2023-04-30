/* eslint-disable @next/next/no-page-custom-font */
import { type NextPage } from "next";
import React from "react";
import Link from "next/link";

const Navbar: NextPage = () => {
  const [toggle, setToggle] = React.useState(false);

  function handleClick() {
    setToggle(!toggle);
  }
  return (
    <>
      <div className="flex h-12 w-screen items-center justify-center bg-gradient-to-br from-slate-100 from-[5%] to-indigo-400 font-[Lato] drop-shadow-lg">
        <div
          onClick={handleClick}
          className=" h-full w-[4%] cursor-pointer py-2 pr-1 lg:w-[3%]"
        >
          {!toggle && (
            <svg
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>70 Basic icons by Xicons.co</title>
                <path
                  d="M41,14H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,14Z"
                  fill="#6f7380"
                ></path>
                <path
                  d="M41,26H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,26Z"
                  fill="#6f7380"
                ></path>
                <path
                  d="M41,38H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,38Z"
                  fill="#6f7380"
                ></path>
              </g>
            </svg>
          )}
          {toggle && (
            <svg
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>70 Basic icons by Xicons.co</title>
                <path
                  d="M41,43a2,2,0,0,1-1.41-.59L5.62,8.44A2,2,0,0,1,8.44,5.62L42.38,39.56A2,2,0,0,1,41,43Z"
                  fill="#6f7380"
                ></path>
                <path
                  d="M7,43a2,2,0,0,1-1.41-3.41L39.56,5.62a2,2,0,0,1,2.83,2.83L8.44,42.38A2,2,0,0,1,7,43Z"
                  fill="#6f7380"
                ></path>
              </g>
            </svg>
          )}
        </div>
        <Link
          href="/"
          className="flex w-[80%] cursor-pointer justify-center pt-2 text-center text-4xl text-white drop-shadow-sm"
        >
          <h1 className="">
            Anime<span className=" font-bold text-indigo-600">DB</span>
          </h1>
        </Link>
        <button className="mx-2 flex w-24 items-center justify-center rounded-md bg-indigo-600 drop-shadow-md hover:bg-indigo-500">
          <span className="btn py-1 text-right text-xl text-white ">
            SignIn
          </span>
        </button>
        {toggle && (
          <section className="absolute left-0 top-[3.02rem] h-24 w-[20%] bg-slate-200">
            <div className="mt-5">
              <Link href="/manga" className=" hover:text-gray-500">
                Manga
              </Link>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default Navbar;
