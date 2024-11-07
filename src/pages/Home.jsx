import React from "react";
import MusicListContainer from "../components/MusicListContainer.jsx"

import MUSIC_DATA from "../musicData";
import Carousel from "../layout/carousel/Carousel.jsx";

const homemusic = MUSIC_DATA.slice(2, 7)

function Home() {
    return (
        <main>
        <h1>Inicio</h1>
        <Carousel/>
        <h1>Musica Escuchada Recientemente</h1>
        <MusicListContainer musicArr={homemusic}/>
      </main>
    )
  }

export default Home