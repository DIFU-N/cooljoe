import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    headlineTag: [
        {id:1, name:"APEX LEGENDS", tag:"apex", image:"src\assets\images\news\apex.jpg"},
        {id:2, name:"COMMUNITY", tag:"comm", image:"src\assets\images\news\community.jpg"},
        {id:3, name:"CS:GO", tag:"csgo", image:"src\assets\images\news\csgo.jpeg"},
        {id:4, name:"DOTA 2", tag:"dota", image:"src\assets\images\news\dota.png"},
        {id:5, name:"ESPORTS", tag:"esports", image:"src\assets\images\news\esports.jpg"},
        {id:6, name:"FORTNITE", tag:"ftnite", image:"src\assets\images\news\fortnite.jpg"},
        {id:7, name:"LEAGUE OF LEGENDS", tag:"lgnds", image:"src\assets\images\news\leagueoflegends.jpg"},
        {id:8, name:"PUBG:BATTLEGROUNDS", tag:"pubg", image:"src\assets\images\news\pubg.jpg"},
        {id:9, name:"RAINBOW SIX SEIGE", tag:"seige", image:"src\assets\images\news\rainbowsixsiege.jpg"},
        {id:10, name:"ROCKET LEAGUE", tag:"rl", image:"src\assets\images\news\rocketleague.jpg"},
        {id:11, name:"STREAMING", tag:"stream", image:"src\assets\images\news\streaming.png"},
        {id:12, name:"STRYDA", tag:"stryda", image:"src\assets\images\news\stryda.png"},
        {id:13, name:"TEAMFIGHT TACTICS", tag:"tmfight", image:"src\assets\images\news\teamfight.jpeg"},
        {id:14, name:"VALORANT", tag:"valorant", image:"src\assets\images\news\valorant.jpg"},
    ]
}

export const tagSlice = createSlice({
    name: "tag",
    initialState,
    reducers: {}
})

export default tagSlice.reducer;
export const tagLines = (state) => state.tagSlice.headlineTag;
