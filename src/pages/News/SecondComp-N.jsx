import React, { useCallback, useEffect, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import ArticlePost from "../../components/ArticlePost";
import OtherPost from "../../components/OtherPosts";
import {
  removeFromSetPosts,
  setAsArticle,
  setAsBlog,
  setBlogPosts,
} from "../../app/blogPosts";
import Pagination from "../../components/Pagination";

const SecondComp = () => {
  const divStyle = {
    fontFamily: "Anton, sans-serif",
  };
  const divStyle1 = {
    fontFamily: "Barlow, sans-serif",
  };
  const activeCategory = useSelector((state) => state.tag.activeCategory);
  const bgDefaultImage = "src\/assets\/images\/news\/news.jpg"
  const bgImage = useSelector((state) => state.tag.bgImage);
  const activeName = useSelector((state) => state.tag.activeName);
  const activeText = useSelector((state) => state.tag.activeText);
  // const shouldDisplayTable = Math.random() < 0.5;
  // const setPosts = useSelector((state) => state.posts.blogPosts);
  const articleData = useSelector((state) => state.posts.articleData);
  const blogData = useSelector((state) => state.posts.blogData);

  const dispatch = useDispatch();
  // console.log(useSelector((state) => state.posts.articleData));
  const setPosts = useSelector((state) => state.posts.blogPosts, shallowEqual);
  // console.log(setPosts);
  const finalPosts = JSON.parse(JSON.stringify(setPosts));
  finalPosts.sort((a, b) => {
    let sort1 = new Date(a.date).toISOString().slice(0, 10);
    let sort2 = new Date(b.date).toISOString().slice(0, 10);
    // console.log(sort1, sort2);
    // return sort1 - sort2
    if (sort1 < sort2) {
      return -1;
    } else if (sort1 > sort2) {
      return 1;
    } else {
      return 0;
    }
  });
  const updatePosts = useCallback(() => {
    // Create new arrays for article and blog posts
    let articlePosts = [];
    let blogPosts = [];
    // Iterate over the setPosts array and dispatch the appropriate action
    // console.log(setPosts);
    finalPosts.map((post) => {
      const shouldDisplayTable = Math.random() < 0.5;
      if (shouldDisplayTable) {
        articlePosts = [...articlePosts, post];
      } else {
        blogPosts = [...blogPosts, post];
      }
      dispatch(removeFromSetPosts(post.id));
    });
    console.log(articlePosts);
    console.log(blogPosts);

    // Remove the product from setPosts once it has been dispatched
    // });
    // Update the Redux state with the new article and blog posts
    dispatch(setAsArticle(articlePosts));
    dispatch(setAsBlog(blogPosts));
    dispatch(setBlogPosts([...articlePosts, ...blogPosts]));
  }, []);
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(count);
  let usedIds = [];
  useEffect(() => {
    if (prevCountRef.current === count) {
      // Do something only if the count has changed
      updatePosts();
      setCount(1);
      console.log("Count has changed");
      // prevCountRef.current = count;
    }
  }, []);
  let mixedPosts = [];
  return (
    <div style={divStyle} className="pb-20">
      <div className={`text-white ${bgImage === "" ? "px-28" : "px-0"}`}>
        <div
          style={{ backgroundImage: `url(${bgImage === "" ? bgDefaultImage : bgImage}?fit=fill&q=90&w=1600)` }}
          className={`w-full bg-cover h-full lg:mb-20 bg-center bg-[#05070f] bg-no-repeat ${bgImage === "" ? "h-[250px] lg:h-[350px] mb-10 rounded-lg" : "h-full lg:h-[430px]"}`}
        >
          <div className={`bg-gradient-to-r px-4  from-[#080b18] via-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.6)] ${bgImage === "" ? "h-[250px] lg:h-[350px] rounded-lg" : "h-full lg:flex lg:items-center lg:h-[430px]"}`}>
            <div className={`container mx-auto flex py-8 mb-10 ${bgImage === "" ? "grid gap-y-20 lg:gap-y-40" : "flex lg:pl-8 lg:mx-0 lg:w-[50%]"}`}>
                <span style={divStyle1} className={`font-semibold w-fit rounded-full flex px-2 ${bgImage === "" ? "flex" : "hidden"} items-center h-[28px] text-[#05070F] text-lg border bg-white`}>
                  Get Ready
                </span>
                <span style={divStyle1}>
                  <div className={`opacity-75 text-x border-whitel w-fit ${bgImage === "" ? "flex" : "hidden"}`}>
                    {/* {title} */} Got What You Expected?
                  </div>
                  <div className={`text-2xl ${bgImage === "" ? "flex" : "hidden"}`}>
                    {/* {date} */} {'Check Again :) '} 
                  </div>
                </span>
              <span className={`flex-shrink-0 mr-6 w-1 bg-${bgImage === "" ? "" : "[#f3c351]"}`}></span>
              <div className="grid grid-flow-row">
                <span className="mb-4 text-6xl lg:text-5xl">{activeName === "" ? "" : activeName}</span>
                <div style={divStyle1} className="text-lg opacity-75">{activeText === "" ? "" : activeText}</div>
              </div>
            </div>
          </div>
        </div>
        {/* {console.log("Before sort: ", finalPosts)} */}
        {finalPosts
          .filter(
            ({ tag }) => activeCategory === tag || activeCategory === "all"
          )
          .forEach((post) => {
            let articlePost = articleData.find(
              (articlePost) =>
                post.id === articlePost.id && post.date === articlePost.date
            );
            if (articlePost) {
              mixedPosts.push(
                <ArticlePost
                  key={articlePost.id + articlePost.date}
                  name={articlePost.name}
                  title={articlePost.title}
                  date={articlePost.date}
                />
              );
            } else {
              let otherPost = blogData.find(
                (otherPost) =>
                  post.id === otherPost.id && post.date === otherPost.date
              );
              if (otherPost) {
                mixedPosts.push(
                  <OtherPost
                    key={otherPost.id + otherPost.date}
                    name={otherPost.name}
                    title={otherPost.title}
                    date={otherPost.date}
                  />
                );
              }
            }
          })}
        <div
          className="grid w-full px-12 justify-between gap-y-8"
        >
          <Pagination data={mixedPosts} />
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export { SecondComp };
