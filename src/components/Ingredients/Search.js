import React from "react";
import Card from "../UI/Card";
import "./Search.css";

const Search = React.memo(props =>{
    return(
        <section className="search">
        <Card>
        <div className="search-input">
        <label>Search by title</label>
        <input type="text"/>
        </div>
        </Card>
        </section>
    )
})

export default Search;
