export const getPlaylistForUser = async () => {

    var requestOptions = {
        method: 'POST',
        mode:'cors',
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
      
    const response = await fetch("/api/getallplaylistsforuser/", requestOptions)
    const {
        success,
        playlists
    } = await response.json()

    if(success)
    {
        return playlists
    }
    else
    {
        return []
    }
}

export const addPlaylistForUser = async (playlistName) => {
    var playlistName = {
        playlist_name : playlistName
    }
    var requestOptions = {
        method: 'POST',
        mode:'cors',
        body: JSON.stringify(playlistName),
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
      
    const response = await fetch("/api/addplaylistforuser/", requestOptions)
    const {
        success
    } = await response.json()
    if(success)
    {
        return true
    }
    return false;
}
export const removePlaylistForUser = async (playlistId) => {
    var requestData = {
        playlist_id : playlistId
    }
    var requestOptions = {
        method: 'POST',
        mode:'cors',
        body: JSON.stringify(requestData),
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
      
    const response = await fetch("/api/removeplaylistforuser/", requestOptions)
    const {
        success
    } = await response.json()
    if(success)
    {
        return true
    }
    return false;
}

export const addSongToPlaylist = async (playlistId,songId) => {
    var requestData = {
        playlist_id : playlistId,
        song_id : songId
    }
    var requestOptions = {
        method: 'POST',
        mode:'cors',
        body: JSON.stringify(requestData),
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
      
    const response = await fetch("/api/addsongtoplaylist/", requestOptions)
    const {
        success
    } = await response.json()

    if(success)
    {
        return true
    }
    else
    {
        return false
    }
}

export const removeSongFromPlaylist = async (playlistId,songId) => {
    var requestData = {
        playlist_id : playlistId,
        song_id : songId
    }
    var requestOptions = {
        method: 'POST',
        mode:'cors',
        body: JSON.stringify(requestData),
        headers:{
            'Content-type':'Application/json',
            'token': localStorage.getItem('token')
        }
      }
      
    const response = await fetch("/api/removesongfromplaylist/", requestOptions)
    const {
        success
    } = await response.json()

    if(success)
    {
        return true
    }
    else
    {
        return false
    }
}
