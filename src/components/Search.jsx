import React, { useEffect, useState } from "react";
import MusicListContainer from "../components/MusicListContainer.jsx"
import MUSIC_DATA from '../musicData.js'

function Search(){
    const [search,setSearch] = useState("")

    const musicData = MUSIC_DATA;

    const showData = async() =>{
        const music = JSON.stringify(musicData);
    }

    const searcher = (e) =>{
        setSearch(e.target.value)
        console.log(e);
        
    }

    
   

    useEffect(() =>{
        showData()
    })


    return(
        <form className="d-flex" role="search">
        <input value={search} onChange={searcher} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-info" type="submit">Search</button>
        </form>
        
    )
}

export default Search