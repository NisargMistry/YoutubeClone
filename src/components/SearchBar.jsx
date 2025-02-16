import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { Paper, IconButton } from "@mui/material";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const navigate=useNavigate();

  const handleSumbit=()=>{
    if(searchTerm){
      navigate(`/search/${searchTerm}`)
    }
  }
  return (
    <Paper
      component="form"
      onSubmit={handleSumbit}
      sx={{ borderRadius: 20, border: "1px solid #e3e3", pl: 2, mr: { sm: 5 } }}
    >
      <input type="text" className="search-bar" placeholder="Search..." onChange={(e)=>{setSearchTerm(e.target.value)}} value={searchTerm} />

      <IconButton type="submit" sx={{p:"10px" ,color:"red"}}>
        <SearchIcon/>
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
