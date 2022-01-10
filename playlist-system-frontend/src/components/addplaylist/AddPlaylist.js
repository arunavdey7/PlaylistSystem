import React,{useState} from 'react';
import { toast } from 'react-toastify';

import { addPlaylistForUser } from '../../utilities/PlaylistUtility';
const AddPlaylist = ({
    refresh,
    refreshHome
}) => {

    const [playlistToBeAddedName, setPlaylistToBeAddedName] = useState("")
    const handleAddButtonClick =  () =>
    {
        refreshHome(refresh + 1)
        var result =  addPlaylistForUser(playlistToBeAddedName)
        if(result)
            toast("Playlist Added Successfully")
        else
            toast("Unable to add playlist")
    }
    return(
        <div>
            <h3>Add a new playlist</h3>
            <input onChange={e => setPlaylistToBeAddedName(e.target.value)} placeholder='Enter playlist name'></input>
            <button onClick={handleAddButtonClick}>Add</button>
        </div>
    )
}
export default AddPlaylist