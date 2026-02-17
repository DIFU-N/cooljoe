import React from "react";
import { useSelector } from "react-redux";

const OtherPost = ({ name, title, date }) => {
  const divStyle = {
    fontFamily: "Barlow, sans-serif",
  };
  const data = useSelector((state) => state.posts.blogData);
  // console.log(data);
  const textImage = "/images/news/apex.jpg";
  const testImage1 =
    "https://www.datocms-assets.com/92583/1676974664-apex-legends-team-deathmatch-1.jpg";

  return (
    <div className="">
      <div className="mx-6 md:mx-0">
        <div
        //   style={{ backgroundImage: `url(${testImage1})` }}
          className="w-full rounded-t-lg bg-cover h-full bg-center bg-[#05070f] bg-no-repeat"
        >
            <img src={testImage1} 
            className="rounded-t-lg"
            alt="" />
        </div>
        <div className="px-5 h-full lg:pt-5 md:h-[255px] lg:h-[210px] bg-white rounded-b-lg">
          <div className="container items-center mx-auto flex py-8 md:py-2 lg:py-8">
            <div style={divStyle} className="grid gap-y-2 grid-flow-row">
              <div className="flex justify-between md:justify-start md:flex-col lg:flex-row w-full lg:justify-between">
                <span className="font-bold w-fit rounded-full flex px-2 text-center items-center h-[28px] md:h-full text-[#05070F] text-lg border bg-[#e1e2e7]">
                {name}
                </span>
                <div className="text-base text-[#818495]">{date}</div>
              </div>
              <div className="opacity-75 md:text-base text-[#05070F] text-xl w-fit">
              {title}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherPost;
