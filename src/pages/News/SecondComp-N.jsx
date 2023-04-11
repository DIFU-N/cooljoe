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

const SecondComp = () => {
  const divStyle = {
    fontFamily: "Anton, sans-serif",
  };
  const activeCategory = useSelector((state) => state.tag.activeCategory);
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
  // console.log(finalSort);
  // const finalPosts = [...setPosts[0]]
  // console.log(finalPosts);
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
    <div style={divStyle}>
      <div className="text-white">
        <div
          style={{ backgroundImage: `url(${bgImage}?fit=fill&q=90&w=1600)` }}
          className="w-full bg-cover h-full bg-center bg-[#05070f] bg-no-repeat"
        >
          <div className="bg-gradient-to-r px-4 from-[#05070f] via-transparent to-transparent h-full">
            <div className="container mx-auto flex py-8 mb-10">
              <span className="flex-shrink-0 mr-6 w-1 bg-[#f3c351]"></span>
              <div className="grid grid-flow-row">
                <span className="mb-4 text-6xl">{activeName}</span>
                <div className="text-lg opacity-75">{activeText}</div>
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
        <div>{mixedPosts}</div>;
        {/* {finalPosts
          .filter(
            ({ tag }) => activeCategory === tag || activeCategory === "all"
          )
          .map((okay) => {
            let articlePosts = articleData
            .map((post) => {
              if (post.id === okay.id && post.date === okay.date) {
                usedIds.push(okay.id);
                return (
                  <ArticlePost
                    key={post.id + post.date}
                    name={post.name}
                    title={post.title}
                    date={post.date}
                  />
                );
              } else {
                let matchFound = false;
                for (let i = 0; i < articleData.length; i++) {
                  if (
                    post.id === articleData[i].id &&
                    post.date === articleData[i].date
                  ) {
                    usedIds.push(articleData[i].id);
                    matchFound = true;
                    // console.log(matchFound);
                  }
                  break;
                }
                if (!matchFound && post.id && !usedIds.includes(post.id)) {
                  usedIds.push(post.id);
                  console.log("ad");
                  return (
                    <div
                      key={post.id + post.date}
                      className="flex flex-row border-8 border-green-800  justify-between mb-2"
                    >
                      <OtherPost
                        key={post.id + post.date}
                        name={post.name}
                        title={post.title}
                        date={post.date}
                      />
                    </div>
                  );
                }
              }
            });
            return (
              <div
              key={okay.id + okay.date}
              className="grid w-full justify-between mb-2"
              >
                {articlePosts}
              </div>
            );
          })} */}
        {/* {finalPosts
          .filter(
            ({ tag }) => activeCategory === tag || activeCategory === "all"
          )
          .map((okay) => {
            let articlePosts = [];
            let otherPosts = [];
            articleData.forEach((post) => {
              if (post.id === okay.id && post.date === okay.date) {
                usedIds.push(okay.id);
                articlePosts.push(
                  <ArticlePost
                    key={post.id + post.date}
                    name={post.name}
                    title={post.title}
                    date={post.date}
                  />
                );
              } else {
                let matchFound = false;
                for (let i = 0; i < articleData.length; i++) {
                  if (
                    post.id === articleData[i].id &&
                    post.date === articleData[i].date
                  ) {
                    usedIds.push(articleData[i].id);
                    matchFound = true;
                    // console.log(matchFound);
                  }
                  break;
                }
                if (!matchFound && post.id && !usedIds.includes(post.id)) {
                  usedIds.push(post.id);
                  // console.log("ad");
                  otherPosts.push(
                    <OtherPost
                      key={post.id + post.date}
                      name={post.name}
                      title={post.title}
                      date={post.date}
                    />
                  );
                }
              }
            });
            let mixedPosts = [];
            let i = 0;
            let j = 0;
            finalPosts.forEach((post) => {
              console.log(post);

            })
            while (i < articlePosts.length && j < otherPosts.length) {
              console.log(articlePosts[i].props.name);
              // if (articlePosts[i].name) {
              //   mixedPosts.push(articlePosts[i]);
              //   i++;
              // } else {
              //   mixedPosts.push(otherPosts[j]);
              //   j++;
              // }
            }
            mixedPosts = mixedPosts.concat(
              otherPosts.slice(j),
              articlePosts.slice(i),
            );
            // for (let j = 0, n = 0; j < otherPosts.length, n < articlePosts.length; n++, j++) {
            //     for (let i = 0; i < finalPosts.length; i++) {
            //     // console.log(finalPosts[i].date === articlePosts[n].props.date);
            //     // console.log(finalPosts[i].date === otherPosts[n].props.date);
            //     console.log(articlePosts[n].props);
            //     if (finalPosts[i].date === articlePosts[n].props.date) {
            //       mixedPosts.push(articlePosts[n]);
            //       n++;
            //     } else if (finalPosts[i].date === otherPosts[j].props.date) {
            //       mixedPosts.push(otherPosts[j]);
            //       j++;
            //     } 
            //     // if(articlePosts[i].props.name)
                
            //   }
            // //   // console.log(articlePosts);
            // //   // if (otherPosts[i]) mixedPosts.push(otherPosts[i]);
            // //   // if (articlePosts[i]) mixedPosts.push(articlePosts[i]);
            // }

            // console.log(articlePosts);
            
            return (
              <div
                key={okay.id + okay.date}
                className="grid w-full justify-between mb-2"
              >
                {mixedPosts}
              </div>
            );
          })} */}
        {/* {console.log("After sort: ", articleData)} */}
        {console.log("After sort: ", finalPosts)}
        {/* for (let i = 0; i < articleData.length; i++) {
            if (articleData[i].id === okay.id && articleData[i].date === okay.date) {
              return (
                <div
                  key={okay.id + okay.date}
                  className="category__list-item flex items-center justify-between mb-2"
                >
                  {/* {isArticlePost ? ( 
                    <ArticlePost
                      key={okay.id + okay.date}
                      name={okay.name}
                      title={okay.title}
                      date={okay.date}
                    />
                </div>
            )} else {
              return(
                <div
                key={okay.id + okay.date}
                className="category__list-item flex items-center justify-between mb-2"
                >
                  <OtherPost
                  key={okay.id + okay.date}
                  name={okay.name}
                  title={okay.title}
                  date={okay.date}
                  />
                </div>
              )
            }
          } */}
        {/* {setPosts
  .filter(({ tag }) => activeCategory === tag || activeCategory === "all")
  .map((post => 
    <div
      key={post.id + post.date}
      className="category__list-item flex items-center justify-between mb-2"
    >
      {console.log(post.id)}
      {post.isArticle ? (
        <ArticlePost
          key={post.id + post.date}
          name={post.name}
          title={post.title}
          date={post.date}
        />
      ) : (
        <OtherPost key={post.id + post.date} />
      )}
    </div>
  ))} */}
      </div>
    </div>
  );
};

export { SecondComp };
