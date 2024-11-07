import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import MusicList from './pages/MusicList';
import Song from './pages/Song';
import NotFound from './pages/NotFound';
import NotFoundSong from './pages/NotFoundSong';
import Navbar from './layout/NavBar/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs">
        <Route index={true} element={<MusicList />}/>
        <Route path=":id" element={<Song />}/>
        <Route path="new" element={
          <h1>Agregar formulario</h1>
        }/>
        </Route>
        <Route path="/error" element={<NotFoundSong />}/>
        <Route path="*" element={<NotFound />}/>
    </Routes>
    </>
  )
}

export default App
