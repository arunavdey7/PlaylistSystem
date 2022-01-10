import testUtils from "react-dom/test-utils";

export const signup = async (name,email,password) => {

    const credentials = {
        name,
        email,
        password
    }
    var requestOptions = {
        method: 'POST',
        body: JSON.stringify(credentials),
        mode:'cors',
        headers:{
            'Content-type':'Application/json'
        }
      }
      
    const response = await fetch("/api/adduser/", requestOptions)
    const {
        success,
        token
    } = await response.json()

    if(success)
    {
        localStorage.setItem('token',token)
        return true
    }
    else
    {
        return false
    }
}
