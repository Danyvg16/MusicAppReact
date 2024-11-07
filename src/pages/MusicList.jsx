import MUSIC_DATA from '../musicData.js'
import MusicListContainer from "../components/MusicListContainer.jsx"



function MusicList() {
    return (
        <main>
        <h1>Lista de Canciones</h1>
        
        <MusicListContainer musicArr={MUSIC_DATA}></MusicListContainer>
      </main>
    )
  }

export default MusicList