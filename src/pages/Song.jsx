import { Navigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import MUSIC_DATA from "../musicData";
import styles from "./Music.module.css"
import YoutubePlayer from "react-player/youtube"

function Song() {
    const {id} = useParams();
    const songId = Number(id)
    const selectedSongs = MUSIC_DATA.find((song) => song.id === songId) 

    if(!selectedSongs){ 
        return <Navigate to="/error"/> 
    }    
    return(

    <main className={styles.albumContainer}>
        <div className="card">
            <img src={selectedSongs.cover.imgSrc} alt={selectedSongs.cover.imgSrc} className="card-img-top"/>
            <div className="card-body">
                <h1>{selectedSongs.song}</h1>
                <address rel="author">{selectedSongs.artist}</address>
                <p className="card-text">{selectedSongs.album}</p>
                <p className="card-text">{selectedSongs.category}</p>
            </div>
        </div>
        <YoutubePlayer url={selectedSongs.video} loop light />
        <Link to="/songs" type="button" className="btn btn-outline-info">Back</Link>
        
    </main>
    )
  
  }

export default Song