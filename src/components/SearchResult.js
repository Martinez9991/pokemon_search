import React, { useEffect, useState } from "react"
import axios from "axios";

import "./SearchResult.css"

const SearchResult = () => {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleInputChange = (event) => {
        setQuery(event.target.value);
      };

    useEffect(() =>{
        const fetchdata = async () => { 
            try {
            axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
            .then((reponse) => {setData(reponse.data.results)})
            setLoading(false);
        }   catch(err) {
            setError(err);
            setLoading(false);
        }
    }

    fetchdata();
 
    },[])

    if(loading){
        return(
            <div>
                <h1>Loading Pokemon...</h1>
            </div>
        )
    }

    if(error){
        return(
            <div>
                <h1>Error: {error.message}</h1>
            </div>
        )
    }

    return(
        <div className="container">
        {data.map((item) => {
            <table>
                <tr>
                    <tr>No/ID: </tr>
                    <tr>Name: </tr>
                    <tr>Name</tr>
                    <tr>Img</tr>
                    <tr>Type</tr>
                    <tr>Abilities</tr>
                    <tr>Stats</tr>
                </tr>
            </table>
        })}

    </div>
    )
}

export default SearchResult;

