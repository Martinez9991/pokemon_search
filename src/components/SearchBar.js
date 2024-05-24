import React from "react"

import './SearchBar.css'


const SearchBar = () => {
    return (
        <div className="grid">
            <input type="text" className="texbox"/>
            <br/>
            <input type="submit" className="button" value="Search"/>
        </div>
    )
}

export default SearchBar;