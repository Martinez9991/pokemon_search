import React, { useEffect, useState } from "react"
import axios from "axios"

import './SearchBar.css'


const SearchBar = () => {
    const [nameList, setNameList] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() =>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then((reponse) => {setNameList(reponse.data.results)})        
    },[])

    const onChange = (event) => {
        setSearch(event.target.value)
    }

    const handleItemClick  = (value) => {
        setSearch(value);
      };

    return (
        <div className="grid">
            <input type="text" className="texbox" value={search} onChange={onChange}/>
            <div className="dropdown">
            {nameList.filter((item)=>{
                const searchTerm = search.toLowerCase();
                const pokemonName = item.name.toLowerCase();

                return searchTerm && pokemonName.startsWith(searchTerm) && pokemonName !== searchTerm;

            }).slice(0,10)
            .map((item)=>{
                return(
                <div onClick={(e) => handleItemClick(item.name)} className="dropdown-row" key={item.name}>
                    {item.name}
                </div>
                )
            })}
            </div>
            <br/>
            <input type="submit" className="button" value="Search"/>
        </div>
    )
}

export default SearchBar;