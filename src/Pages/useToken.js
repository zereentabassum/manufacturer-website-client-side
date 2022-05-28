import { useEffect, useState } from "react"

const useToken = user =>{
    const [token, setToken] = useState('');

    useEffect( () => {
        // console.log('user inside usetoken:',  user);
        const email = user?.user?.email;
        const currentUser = {email: email};
        if(email){
            fetch(`https://vast-savannah-90121.herokuapp.com/user/${email}`, {
                method:'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data => {
                
                const accessToken = data.token;
                // console.log('tok:', data.token)
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
                // console.log('data inside useToken', data);
                console.log(data);
            })
        }


    },[user]);


    return [token];
}

export default useToken;