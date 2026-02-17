import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCategory: "all",
  bgImage: "",
  activeName: "",
  activeText: "",
  headlineTag: [
    {
      id: 1,
      name: "APEX LEGENDS",
      tag: "apex",
      image: "/images/news/apex.jpg",
      text: "Set in the same universe as the popular Titanfall franchise, Apex Legends takes place 30 years after Titanfall 2. It turns out the Frontier War’s end was less sunshine and roses and more ruin and constant power struggles. Residents of the Outlands compete in a bloodsport known as the Apex Games in a bid to gain power, glory, and money. Players all over the world compete in these games to become not only Apex legends, but esports legends too.",
    },
    {
      id: 2,
      name: "COMMUNITY",
      tag: "comm",
      image: "/images/news/community.jpg",
      text: "Our players make G-Loot. We strive to make the G-Loot community a welcoming environment for all gamers, no matter who you are. Here, you'll find information about our community, how to get involved, and updates from our community manager, MEH.",
    },
    {
      id: 3,
      name: "CS:GO",
      tag: "csgo",
      image: "/images/news/csgo.jpeg",
      text: "Valve’s multiplayer first-person shooter Counter-Strike: Global Offensive (CS:GO) pits two teams, Terrorists and Counter-Terrorists, against one another in an epic battle for victory. The fourth game in the series, it continues its history of being a big player in the esports scene. Teams will compete internationally for various titles, but ultimately for the same goal: ass-whooping victory",
    },
    {
      id: 4,
      name: "DOTA 2",
      tag: "dota",
      image: "/images/news/dota.png",
      text: "Spawned from the hit Warcraft III mod Defense of the Ancients, DOTA 2 is a Multiplayer Online Battle Arena game in which two teams of five players fight to defend their base from their opponents. How does a game go from a simple mod to the most played game on Steam to one of the world’s most lucrative esports? The answer may lie in Dota 2’s complexity. With over 119 Heroes to choose from, each with their own unique talents and weaknesses, there’s a lot to learn if you want to master the game. Luckily, the Dota 2 ranking system matches players of similar abilities, and there are also bots to play against while you’re learning.",
    },
    {
      id: 5,
      name: "ESPORTS",
      tag: "esports",
      image: "/images/news/esports.jpg",
      text: "Competing in video games has been around for as long as people have lost friends over pong. Esports is the intricate art of competition through video games. Be it online or through the age old tradition of LAN parties, esports has gathered quite the competitive following from players young and old, pro and noob, casual and devoted. The international acclaim of it has meant esports has gone from a small 1972 contest to an estimated 1.8 billion dollar industry!",
    },
    {
      id: 6,
      name: "FORTNITE",
      tag: "ftnite",
      image: "/images/news/fortnite.jpg",
      text: "Fortnite is an online video game developed by Epic Games and released in 2017. It is available in three distinct game mode versions that otherwise share the same general gameplay and game engine: Fortnite: Save the World, a cooperative hybrid-tower defense-shooter-survival game for up to four players to fight off zombie-like creatures and defend objects with traps and fortifications they can build; Fortnite Battle Royale, a free-to-play battle royale game in which up to 100 players fight to be the last person standing; and Fortnite Creative, in which players are given complete freedom to create worlds and battle arenas",
    },
    {
      id: 7,
      name: "LEAGUE OF LEGENDS",
      tag: "lgnds",
      image: "/images/news/leagueoflegends.jpg",
      text: "Dive into an epic 5v5 battle in League of Legends, a team-based multiplayer online battle arena game from Riot Games. Even if you’re new to esports, you’ve probably heard of League of Legends (also known as League or LoL). With 27 million active players every day, it’s one of the world’s most popular games. A typical game sees two teams of five battle it out to destroy the other’s base but this is no simple run-and-gun affair, before you’re even able to get close to your opponents’ Nexus, you’ll need to destroy a series of turrets while fighting off waves of minions. In return for staying alive and destroying turrets, enemy champions, and minions, you’ll earn gold which can be used to buy items.",
    },
    {
      id: 8,
      name: "PUBG:BATTLEGROUNDS",
      tag: "pubg",
      image: "/images/news/pubg.jpg",
      text: "When Brendan “PlayerUnknown” Greene started modding ArmA II, he just wanted a cool new way to play his favorite games. Inspired by movies such as Battle Royale and Hunger Games, Greene created a mod that forced players into smaller and smaller areas of the map in a fight to the death. Jump forward a few short years and PUBG: BATTLEGROUNDS is one of the world’s most popular games, both inside the esports scene and out. Check out our guides to learn more about how to play PUBG.",
    },
    {
      id: 9,
      name: "RAINBOW SIX SEIGE",
      tag: "seige",
      image: "/images/news/rainbowsixsiege.jpg",
      text: "First released December 1, 2015, Tom Clancy's Rainbow Six Siege is an online tactical shooter with a dedicated Esports fanbase. The game focuses on teamwork with a loose narrative, where recruits are preparing for future confrontation with a terrorist group, ‘The White Masks’ that threatens world peace.",
    },
    {
      id: 10,
      name: "ROCKET LEAGUE",
      tag: "rl",
      image: "/images/news/rocketleague.jpg",
      text: "Love driving games? Love soccer games? Well, we’ve got great news for you. Rocket League is a high-octane, arcade-style vehicular soccer game in which two teams race to maneuver their rocket-powered cars around pitches in the hopes of scoring goals. Players can choose from a variety of different customizable cars and can also unlock boosts during the game to improve their performance. Whichever vehicle you choose, you’ll need quick reactions and a lot of dexterity to rise up the ranks in this fun, fast-paced game.",
    },
    {
      id: 11,
      name: "STREAMING",
      tag: "stream",
      image: "/images/news/streaming.png",
      text: "When you were a kid, what did you want to be when you grew up? Ask an American kid today and the top answer is no longer musician or athlete—not even astronaut—it's YouTuber. With 40% of the top YouTube channels being gaming-related, it's no wonder that more and more people are getting into streaming.",
    },
    {
      id: 12,
      name: "STRYDA",
      tag: "stryda",
      image: "/images/news/stryda.png",
      text: "Stryda is a gaming companion app where you can instantly join competitions that suit your style, your level, and your schedule. Ace Stryda Battle Pass by completing daily Missions and climbing Ladders. Rewards await you as you keep playing with Stryda!",
    },
    {
      id: 13,
      name: "TEAMFIGHT TACTICS",
      tag: "tmfight",
      image: "/images/news/teamfight.jpeg",
      text: "Choose your champions, take your positions, and watch the carnage unfold in this round-based League of Legends spinoff. Teamfight Tactics is a free-to-play auto battler. 8 players face off against each other across several rounds. At the beginning of each round, champions are placed on the board. The positioning and combination of the champions are crucial, as it changes the way champions fight and even unlocks bonuses and upgrades. In between rounds, players can draft new champions and change the composition of their team. Once the champions are chosen, the fun really starts. Watch as the units battle each other automatically. Will your strategy work out?",
    },
    {
      id: 14,
      name: "VALORANT",
      tag: "valorant",
      image: "/images/news/valorant.jpg",
      text: "VALORANT is a competitive, first person, tactical shooter. The story takes place in an Earth from a not-too-distant future where players get to play from one of the ever-growing number of characters, The Agents. Each character has their own abilities. The game has gained a cult-like following of devoted fans and has quickly gained popularity in the esports scene.",
    },
  ],
};

export const tagSlice = createSlice({
  name: "tag",
  initialState,
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    setBgImage: (state, action) => {
      state.bgImage = action.payload;
    },
    setActiveName: (state, action) => {
      state.activeName = action.payload;
    },
    setActiveText: (state, action) => {
      state.activeText = action.payload;
    },
  },
});

export default tagSlice.reducer;
export const { setActiveText, setActiveCategory, setBgImage, setActiveName } =
  tagSlice.actions;
export const tagLines = (state) => state.tagSlice.headlineTag;
