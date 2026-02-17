import React from "react";
import { useSelector } from "react-redux";

const ArticlePost = ({ name, title, date }) => {
  const divStyle = {
    fontFamily: "Barlow, sans-serif",
  };
  const data = useSelector((state) => state.posts.articleData);
  // console.log(data);
  const textImage = "/images/news/apex.jpg";
  const testImage1 =
    "https://www.datocms-assets.com/92583/1676974664-apex-legends-team-deathmatch-1.jpg";
  return (
    <div >
      <div className="mx-6 md:mx-0">
        <div
          style={{ backgroundImage: `url(${testImage1})` }}
          className="w-full bg-cover rounded-md h-[200px] md:h-[340px] lg:h-[400px] bg-center bg-[#05070f] bg-no-repeat"
        >
          {/* {data.map(({ name, title, date }) => ( */}
          <div className="rounded-md px-5 h-full bg-gradient-to-b flex from-transparent to-black">
            <div className="container items-center mx-auto flex py-5 mb-10">
              <div style={divStyle} className="grid gap-y-8 grid-flow-row">
                <span className="font-bold w-fit rounded-full flex px-2 items-center h-[28px] text-[#05070F] text-lg border bg-white">
                  {name}
                </span>
                <div className="opacity-75 text-xl w-fit">
                  {title}
                </div>
                <div className="text-base text-[#818495]">
                  {date}
                </div>
              </div>
            </div>
          </div>
          {/* ))} */}
        </div>
      </div>
    </div>
  );
};

export default ArticlePost;
