import React from "react";
import { Link } from "react-router-dom";
import styles from "./MusicList.module.css"

function MusicListContainer({musicArr}){
    return(
        <div className= {styles.musicListContainer}>
          {musicArr.map((songs)=> (
            <Link key={songs.id} to={`/songs/${songs.id}`}>
              <img src={songs.cover.imgSrc} alt={songs.cover.alt} />
            </Link>
          ))}
        </div>
    )
}

export default MusicListContainer