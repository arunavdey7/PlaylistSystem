import React from 'react';

const PlaylistItem = ({
    playlist_id,
    playlist_name,
    setSelectedPlaylist,
    setSelectedPlaylistName
}) => {
    const removePlaylist = () => {
        setSelectedPlaylist(playlist_id)
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