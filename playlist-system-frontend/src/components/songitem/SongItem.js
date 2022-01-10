import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addSongToPlaylist, removeSongFromPlaylist } from '../../utilities/PlaylistUtility'

const SongItem = ({
    song_id,
    song_name,
    singer,
    duration,
    release_date,
    album,
    play_count,
    toggle,
    playlistId,
    refresh,
    refreshHome
}) => {

    const handleAddSongToPlaylist = async () => {
        if (playlistId == 0) {
            toast("No playlist selected")
        }
        else {
            var status = await addSongToPlaylist(playlistId, song_id)
            refreshHome(refresh+1)
            if (status)
            {
                toast("Song successfully added to playlist")
            }
            else
                toast("Song failed to be added to playlist")
        }
    }

    const handleRemoveSongFromPlaylist = async () => {
        if (playlistId == 0) {
            toast("No playlist selected")
        }
        else {
            var status = await removeSongFromPlaylist(playlistId, song_id)
            refreshHome(refresh+1)
            if (status)
            {
                toast("Song successfully added to playlist")
            }
            else
                toast("Song failed to be added to playlist")
        }
    }
    
return (
    <div>
        {song_name}
        {
            toggle === "not_added" ? <button onClick={handleAddSongToPlaylist}>Add</button> : <button onClick={handleRemoveSongFromPlaylist}>Remove</button>
        }
    </div>
)
}
export default SongItem;