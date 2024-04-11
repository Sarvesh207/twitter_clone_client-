"use client";
import Image from "next/image";
import {
  BsTwitterX,
  BsSearch,
  BsEnvelopeFill,
  BsBellFill,
  BsBookmark,
} from "react-icons/bs";
import { RiUser2Fill } from "react-icons/ri";
import { BiHomeCircle } from "react-icons/bi";
import { Inter } from "next/font/google";
import React, { useCallback } from "react";
import FeedCard from "../components/FeedCard";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";
import { graphqlClient } from "@/client/api";
import { verify } from "crypto";
import { verifyGoogleTokenQuery } from "@/graphql/query/user";

export default function Home() {
  const handleLoginWithGoogle = useCallback(
    async (cred: CredentialResponse) => {
      const googleToken = cred.credential;
      if (!googleToken) return toast.error("Google token not found");

      const { verifyGoogleToken } = await graphqlClient.request(
        verifyGoogleTokenQuery,
        { token: googleToken }
      );

      toast.success('Verified Success')
      console.log(verifyGoogleToken)
    },
    []
  );
  interface TwitterSideBarButton {
    title: String;
    icons: React.ReactNode;
  }

  const sideBarMenuItems: TwitterSideBarButton[] = [
    {
      title: "Home",
      icons: <BiHomeCircle />,
    },
    {
      title: "Explore",
      icons: <BsSearch />,
    },
    {
      title: "Notifications",
      icons: <BsBellFill />,
    },
    {
      title: "Messages",
      icons: <BsEnvelopeFill />,
    },
    {
      title: "Bookmarks",
      icons: <BsBookmark />,
    },
    {
      title: "Profile",
      icons: <RiUser2Fill />,
    },
  ];

  return (
    <div className="grid grid-cols-12 h-screen px-56 w-screen">
      <div className="col-span-3  pt-1 ml-10 ">
        <div className=" text-2xl rounded-full hover:bg-gray-700 w-fit h-fit p-2  transition-all cursor-pointer">
          <BsTwitterX />
        </div>
        <div className="mt-4 text-xl pr-4 w-fit h-fit">
          <ul>
            {sideBarMenuItems.map((item) => (
              <li key={item.title} className="flex justify-start mt-2 items-center gap-4 hover:bg-gray-800 cursor-pointer rounded-2xl px-2 py-3">
                <span className="text-3xl">{item.icons}</span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 pr-10">
            <button className="bg-[#1D9BF0] px-8 font-semibold py-2 text-xl w-full rounded-full">
              Post
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-6 broder  border-l-[0.2px]  h-screen overflow-y-hidden border-r-[0.2px] border-gray-600">
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </div>
      <div className="col-span-3 p-5">
        <div className="border p-5 bg-slate-700 rounded-lg text-center">
          <h1 className="my-2 text-lg">New to Twitter ? </h1>
          <GoogleLogin onSuccess={handleLoginWithGoogle} />
        </div>
      </div>
    </div>
  );
}
