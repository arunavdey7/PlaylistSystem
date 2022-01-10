import React from 'react';
import { toast } from 'react-toastify';
import {removePlaylistForUser} from '../../utilities/PlaylistUtility'
const PlaylistItem = ({
    playlist_id,
    playlist_name,
    setSelectedPlaylist,
    setSelectedPlaylistName,
    refresh,
    refreshHome
}) => {
    const removePlaylist = async () => {
        var result = await removePlaylistForUser(playlist_id)
        if(result)
        {
            toast("Playlist Removed Successfully")
            setSelectedPlaylist(playlist_id)
            refreshHome(refresh + 1)
        }
        else
            toast("Unable to remove playlist")
    }
    const selectPlaylist = () => {
        setSelectedPlaylist(playlist_id)
        setSelectedPlaylistName(playlist_name)
    }
    return(
        <div>
            {playlist_name}
            <button onClick={selectPlaylist}>Show songs</button>
            <button onClick={removePlaylist}>Remove</button>
        </div>
    )
}
export default PlaylistItem