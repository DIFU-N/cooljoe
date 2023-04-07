import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogPosts: [
    {
      id: 1,
      tag: "stryda",
      name: "Styda",
      title: "How Stryda is Revolutionizing Football Training",
      related_tags: ["tech community", "apex"],
      date: "March 29, 2023",
    },
    {
      id: 2,
      tag: "csgo",
      name: "CS:GO",
      title: "The Evolution of CS:GO as an Esport",
      related_tags: ["esports", "stream"],
      date: "February 28, 2023",
    },
    {
      id: 3,
      tag: "dota",
      name: "Dota 2",
      title: "5 Reasons Why Dota 2 is Still Relevant in 2023",
      related_tags: ["esports", "tmfight"],
      date: "January 15, 2023",
    },
    {
      id: 4,
      tag: "esports",
      name: "Esports",
      title: "The Rise of Esports: A Billion Dollar Industry",
      related_tags: [
        "csgo",
        "dota",
        "ftnite",
        "lgnds",
        "pubg",
        "rl",
        "stream",
        "tmfight",
        "valorant",
      ],
      date: "March 10, 2023",
    },
    {
      id: 5,
      tag: "ftnite",
      name: "Fortnite",
      title: "How Fortnite Became a Cultural Phenomenon",
      related_tags: ["esports", "stream"],
      date: "April 5, 2023",
    },
    {
      id: 6,
      tag: "lgnds",
      name: "League of Legends",
      title: "The History and Future of League of Legends Esports",
      related_tags: ["esports", "tmfight"],
      date: "March 23, 2023",
    },
    {
      id: 7,
      tag: "pubg",
      name: "PUBG",
      title: "Is PUBG Still Relevant in 2023?",
      related_tags: ["esports", "stream"],
      date: "February 1, 2023",
    },
    {
      id: 8,
      tag: "rl",
      name: "Rocket League",
      title: "The Intersection of Sports and Esports in Rocket League",
      related_tags: ["esports", "stream"],
      date: "March 18, 2023",
    },
    {
      id: 9,
      tag: "stream",
      name: "Streaming",
      title: "The Future of Streaming in the Gaming Industry",
      related_tags: ["csgo", "ftnite", "pubg", "rl", "valorant"],
      date: "January 30, 2023",
    },
    {
      id: 10,
      tag: "tmfight",
      name: "Teamfight Tactics",
      title: "The Emergence of Teamfight Tactics in Esports",
      related_tags: ["dota", "esports", "lgnds"],
      date: "February 8, 2023",
    },
    {
      id: 11,
      tag: "valorant",
      name: "Valorant",
      title: "How Valorant is Changing the FPS Esports Landscape",
      related_tags: ["esports", "stream"],
      date: "January 20, 2023",
    },
    {
      id: 12,
      tag: "apex",
      name: "Apex Legends",
      title: "The Evolution of Apex Legends as an Esport",
      related_tags: ["esports", "stryda"],
      date: "March 12, 2023",
    },
    {
      id: 13,
      tag: "comm",
      name: "Community",
      title: "Why Tech Communities are Essential for Innovation",
      related_tags: ["apex", "esports"],
      date: "February 28, 2023",
    },
    {
      id: 14,
      tag: "stryda",
      name: "Styda",
      title: "The Future of Football Training: Insights from Stryda",
      related_tags: ["tech community"],
      date: "January 17, 2023",
    },
    {
      id: 15,
      tag: "csgo",
      name: "CS:GO",
      title: "The History and Evolution of CS:GO as an Esport",
      related_tags: ["esports", "stream"],
      date: "November 9, 2022",
    },
    {
      id: 16,
      tag: "ftnite",
      name: "Fortnite",
      title: "The Impact of Fortnite on the Gaming Industry",
      related_tags: ["esports", "stream"],
      date: "September 5, 2022",
    },
    {
      id: 17,
      tag: "lgnds",
      name: "League of Legends",
      title: "The Role of Strategy in League of Legends Esports",
      related_tags: ["esports", "tmfight"],
      date: "October 22, 2022",
    },
    {
      id: 18,
      tag: "pubg",
      name: "PUBG",
      title: "The Evolution of PUBG Mobile Esports",
      related_tags: ["esports", "stream"],
      date: "December 14, 2022",
    },
    {
      id: 19,
      tag: "comm",
      name: "Community",
      title: "The Importance of Diversity in Tech Communities",
      related_tags: ["apex", "esports"],
      date: "February 15, 2023",
    },
    {
      id: 20,
      tag: "dota",
      name: "Dota 2",
      title: "Why Dota 2 is Still One of the Most Popular Esports Today",
      related_tags: ["esports", "tmfight"],
      date: "October 31, 2022",
    },
    {
      id: 21,
      tag: "stream",
      name: "Streaming",
      title: "The Rise of Streaming Platforms in the Gaming Industry",
      related_tags: ["csgo", "ftnite", "pubg", "rl", "valorant"],
      date: "December 28, 2022",
    },
    {
      id: 22,
      tag: "rl",
      name: "Rocket League",
      title: "The Future of Rocket League Esports",
      related_tags: ["esports", "stream"],
      date: "April 15, 2023",
    },
    {
      id: 23,
      tag: "csgo",
      name: "CS:GO",
      title: "The Competitive Scene of CS:GO: An Overview",
      related_tags: ["esports", "stream"],
      date: "May 2, 2023",
    },
    {
      id: 24,
      tag: "valorant",
      name: "Valorant",
      title: "The Importance of Teamwork in Valorant Esports",
      related_tags: ["esports", "stream"],
      date: "June 1, 2023",
    },
    {
      id: 25,
      tag: "ftnite",
      name: "Fortnite",
      title: "The Future of Fortnite Esports",
      related_tags: ["esports", "stream"],
      date: "July 8, 2023",
    },
    {
      id: 26,
      tag: "apex",
      name: "Apex Legends",
      title: "The Growing Popularity of Apex Legends Esports",
      related_tags: ["esports", "stryda"],
      date: "August 12, 2023",
    },
    {
      id: 27,
      tag: "comm",
      name: "Community",
      title: "The Benefits of Community-driven Tech Development",
      related_tags: ["apex", "esports"],
      date: "September 6, 2023",
    },
    {
      id: 28,
      tag: "stryda",
      name: "Styda",
      title: "The Use of Technology in Football Training",
      related_tags: ["tech community", "apex"],
      date: "October 4, 2023",
    },
    {
      id: 29,
      tag: "lgnds",
      name: "League of Legends",
      title: "The Evolution of League of Legends Esports",
      related_tags: ["esports", "tmfight"],
      date: "November 1, 2023",
    },
    {
      id: 30,
      tag: "dota",
      name: "Dota 2",
      title: "The Exciting Future of Dota 2 Esports",
      related_tags: ["esports", "tmfight"],
      date: "December 5, 2023",
    },
  ],
  articleData: [],
  blogData: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setAsArticle: (state, action) => {
        // const { payload } = action;
        // console.log(state.articleData);
      return {
        ...state,
        articleData: [],
        articleData: [...action.payload],
      };
    },
    setAsBlog: (state, action) => {
      //   const { payload } = action;
      return {
        ...state,
        blogData: [...action.payload],
      };
    },
    removeFromSetPosts: (state, action) => {
      const postId = action.payload;
      const updatedPosts = state.blogPosts.filter((post) => post.id !== postId);
      return {
        ...state,
        blogPosts: updatedPosts,
      };
    },
    setBlogPosts: (state, action) => {
      return {
        ...state,
        blogPosts: [action.payload]
      };
    }
  },
});

export default postsSlice.reducer;
export const posts = (state) => state.postsSlice.headlineTag;
export const { setAsArticle, setAsBlog, removeFromSetPosts, setBlogPosts } =
  postsSlice.actions;
