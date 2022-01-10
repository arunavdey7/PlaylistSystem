import React,{useState,useEffect} from 'react'
import PlaylistContainer from '../../components/playlistcontainer/PlaylistContainer'
import SongContainer from '../../components/songcontainer/SongContainer'
import { getAllSongs } from '../../utilities/SongUtility'
import {logout} from '../../utilities/LogoutUtility'
import Login from '../login/Login'
import {getSongsInPlaylist} from '../../utilities/SongUtility'
import './styles.css'
const Home = () => {
    const [allSongs, setAllSongs] = useState([])
    const [loggedInState, setLoggedInState] = useState(false)
    const [currentUser, setCurrentUser] = useState("")
    const [selectedPlaylist, setSelectedPlaylist] = useState(-1)
    const [selectedPlaylistName, setSelectedPlaylistName] = useState("")
    const [currentPlaylistSongs, setCurrentPlaylistSongs] = useState([]);
    const [refresh, refreshHome] = useState(0)

    useEffect(async () => {
        setAllSongs(await getAllSongs())
    },[])

    useEffect(async () => {
        setCurrentPlaylistSongs(await getSongsInPlaylist(selectedPlaylist))
    },[selectedPlaylist,refresh])

    const terminateSession = () => {
        logout()
        setLoggedInState(false)
        setCurrentUser("")
    }
    console.log('I am reloaded')
    return(
        <>
        {
            loggedInState === false ? <Login p1={setLoggedInState} p2={setCurrentUser}/> :
            <div>
                <h1>Current user: {currentUser}</h1>
                <button onClick={terminateSession}>Logout</button>
                <div className='home_page_container'>
                    <div className='playlists_section'>
                        <h1>Playlists</h1>
                        <button>Add new playlist</button>
                        <h3>Selected Playlist: {selectedPlaylistName}</h3>
                        <PlaylistContainer setSelectedPlaylist = {setSelectedPlaylist}
                                           setSelectedPlaylistName = {setSelectedPlaylistName}
                        />
                    </div>
                    <div className='playlist_songs_section'>
                        <h1>Songs</h1>
                        <SongContainer songs = {currentPlaylistSongs} 
                                       status = "added" 
                                       playlistId = {selectedPlaylist}
                                       refresh = {refresh}
                                       refreshHome = {refreshHome} 
                        />
                    </div>
                    <div className='all_songs_section'>
                        <h1>All Songs</h1>
                        <SongContainer songs = {allSongs} 
                                       status = "not_added" 
                                       playlistId = {selectedPlaylist}
                                       refresh = {refresh}
                                       refreshHome = {refreshHome}  
                        />
                    </div>
                </div>
            </div>
        }
        </>
    )
}
export default Home;