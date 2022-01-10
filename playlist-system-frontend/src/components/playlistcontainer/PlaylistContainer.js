import React,{useState, useEffect} from 'react';
import PlaylistItem from '../playlistitem/PlaylistItem';
import {getPlaylistForUser} from '../../utilities/PlaylistUtility'

const PlaylistContainer = (props) => {
    const [playlistItems, setPlaylistItems] = useState([])
    
    useEffect(async () => {
        setPlaylistItems(await getPlaylistForUser())
    }, [])
    return(
        <div>
            {
                playlistItems.map((playlistItem) => <PlaylistItem {...playlistItem} 
                                                                  setSelectedPlaylist = {props.setSelectedPlaylist}
                                                                  setSelectedPlaylistName = {props.setSelectedPlaylistName}
                                                                  />)
            }
        </div>
    )
}
export default PlaylistContainer;