export const getAllSongs = async () => {

    var requestOptions = {
        method: 'GET',
        mode:'cors',
        headers:{
            'Content-type':'Application/json',
        }
      }
      
    const response = await fetch("/api/allsongs", requestOptions)
    const {
        success,
        songs
    } = await response.json()

    if(success)
    {
        return songs
    }
    else
    {
        return []
    }
}

export const getSongsInPlaylist = async (playlistId) => {
    var requestData = {
        playlist_id : playlistId
    }
    var requestOptions = {
        method: 'POST',
        mode:'cors',
        body: JSON.stringify(requestData),
        headers:{
            'Content-type':'Application/json',
            'token' : localStorage.getItem('token')
        }
      }
      
    const response = await fetch("/api/getsongsforplaylist/", requestOptions)
    const {
        success,
        songs
    } = await response.json()

    if(success)
    {
        return songs
    }
    else
    {
        return []
    }
}

