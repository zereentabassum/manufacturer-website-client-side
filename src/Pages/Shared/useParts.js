import {useState, useEffect} from "react";


const useParts = () =>{
    const [parts, setParts] = useState([]);


    useEffect(()=>{
        fetch('https://vast-savannah-90121.herokuapp.com/parts')
        .then(res=> res.json())
        .then(data=> setParts(data));
    } ,[])

    return [parts, setParts];
}


export default useParts;