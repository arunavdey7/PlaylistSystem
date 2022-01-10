import React,{useState} from 'react'
import SongItem from '../songitem/SongItem'
const SongContainer = ({
    songs,
    status,
    playlistId,
    refreshHome,
    refresh
}) => {
    return(
        <div>
            {
                songs.map((song) => <SongItem {...song} 
                                              toggle={status} 
                                              playlistId={playlistId} 
                                              refreshHome = {refreshHome}
                                              refresh = {refresh}
                                    />
                        )
            }
        </div>
    )
}
export default SongContainer;