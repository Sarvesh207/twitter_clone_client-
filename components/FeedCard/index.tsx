import React from "react";
import Image from "next/image";
import { BiMessage } from "react-icons/bi";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import { FiUpload } from "react-icons/fi";

const FeedCard: React.FC = () => {
  return (
    <div className="border border-gray-600 border-r-0 border-l-0 border-b-0 p-3 hover:bg-gray-950 transition-none cursor-pointer ">
      <div className="grid grid-cols-12 gap-3 ">
        <div className="col-span-1">
          <Image
            src="https://avatars.githubusercontent.com/u/109072302?s=400&u=64ee7461b64d6cf4810ea84321b4b44d922cfa68&v=4"
            alt="user-image"
            height={50}
            width={50}
          />
        </div>
        <div className="col-span-11">
          <h5> Sarvesh Gaynar</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            cupiditate.
          </p>
          <div className="flex justify-between items-center mt-5 text-lg p-2 w-[90%]">
            <div>
              <BiMessage />
            </div>
            <div>
              <AiOutlineRetweet />
            </div>
            <div>
              <AiOutlineHeart />
            </div>
            <div>
              <FiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
