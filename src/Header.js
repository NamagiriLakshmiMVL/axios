import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {

    const navigate = useNavigate();
    return (
        <div className='top-header'>
            <h1 style={{ fontSize: "40px", color: "brown" }}>User Details With CRUD Operations</h1>
            <Button sx={{
                marginLeft: {
                    xs: "0px", 
                    sm: "200px",
                    md: "300px",
                    lg: "400px",
                    xl: "500px",
                },
                marginBottom:"10px"
            }} className="btnresponse" variant="contained" onClick={() => navigate("/userdata/add")}>Add User</Button>
        </div>
    )
}

export default Header
