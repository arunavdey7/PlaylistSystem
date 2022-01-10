import React,{useState, useEffect} from 'react';
import PlaylistItem from '../playlistitem/PlaylistItem';
import {getPlaylistForUser} from '../../utilities/PlaylistUtility'

const PlaylistContainer = (props) => {
    const [playlistItems, setPlaylistItems] = useState([])
    console.log('I am reloaded')
    useEffect(async () => {
        setPlaylistItems(await getPlaylistForUser())
    }, [])
    useEffect(async () => {
        setPlaylistItems(await getPlaylistForUser())
    }, [props.refresh])
    return(
        <div>
            {
                playlistItems.map((playlistItem) => <PlaylistItem {...playlistItem} 
                                                                  setSelectedPlaylist = {props.setSelectedPlaylist}
                                                                  setSelectedPlaylistName = {props.setSelectedPlaylistName}
                                                                  refresh = {props.refresh}
                                                                  refreshHome = {props.refreshHome}
                                                                  />)
            }
        </div>
    )
}
export default PlaylistContainer;