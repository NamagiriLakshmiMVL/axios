import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "./API";
import Badge from './Badge'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import RoomIcon from '@mui/icons-material/Room';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from "@mui/material";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import axios from "axios"
function ProductList() {
    const navigate = useNavigate()
    const [show, setShow] = useState(true)
    const [show1, setShow1] = useState(true)
    const [show2, setShow2] = useState(true)
    const styles = {
        display: show ? "block" : "none",
        marginTop: "0px"

    }
    const styles1 = {
        display: show1 ? "block" : "none",
        marginTop: "0px"

    }
    const styles2 = {
        display: show2 ? "block" : "none",
        marginTop: "0px"

    }
    const [productlist, setProductlist] = useState([])
    const getProduct = () => {
        axios.get(`${API}`)
            .then((res) => setProductlist(res.data))

    }

    useEffect(() => getProduct(), [])

    return (
        <div className="whole-element">
            {productlist.map((product) =>
                <div className="root" >
                    <div>
                        <div className="badge">
                            <h4 style={{ marginLeft: "110px", fontSize: "30px", color: "darkgreen" }}>User-{product.id}</h4>
                            <div className="newBadge" style={{ marginLeft: "100px" }}>
                                <Badge firstletter={product.name[0]} />
                            </div>
                        </div>
                        <h4 style={{ color: "darkred" }}>Name : {product.name}</h4>
                        <h4 style={{ color: "darkblue" }}>Username : {product.username}</h4>
                        <div className="address">
                            <h4 style={{ display: "flex", alignItems: "center", color: "darkred" }}>Address: <HomeIcon color="success" /></h4>
                            <IconButton aria-label="toggleBtn" color="error" onClick={() => setShow(!show)}>
                                {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}  </IconButton>
                        </div>
                        <div style={styles}>
                            <h4 style={{ color: "darkblue" }}>Street : {product.street}</h4>
                            <h4 style={{ color: "darkred" }}>Suite : {product.suite}</h4>
                            <h4 style={{ color: "darkblue" }}>City : {product.city}</h4>
                            <h4 style={{ color: "darkred" }}>ZipCode : {product.zipcode}</h4>
                        </div>


                        <div className="address">
                            <h4 style={{ display: "flex", alignItems: "center", color: "darkblue" }}>Geo :   <RoomIcon color="success" /> </h4>
                            <IconButton aria-label="toggleBtn" color="error" onClick={() => setShow1(!show1)}>
                                {show1 ? <ExpandLessIcon /> : <ExpandMoreIcon />}  </IconButton>
                        </div>
                        <div style={styles1}>
                            <h4 style={{ color: "darkred" }}>Latitude : {product.lat}</h4>
                            <h4 style={{ color: "darkblue" }}>Longitude : {product.lng}</h4>
                        </div>
                        <h4 style={{ display: "flex", alignItems: "center", color: "darkred" }}><EmailIcon color="success" /> : {product.email}</h4>
                        <h4 style={{ display: "flex", alignItems: "center", color: "darkblue" }}><LocalPhoneIcon color="success" /> :   {product.phone}</h4>
                        <h4 style={{ display: "flex", alignItems: "center", color: "darkred" }}><LanguageIcon color="success" /> : {product.website}</h4>
                        <div className="address">
                            <h4 style={{ display: "flex", alignItems: "center", color: "darkblue" }}>Company : <BusinessIcon color="success" /></h4>
                            <IconButton aria-label="toggleBtn" color="primary" onClick={() => setShow2(!show2)}>
                                {show2 ? <ExpandLessIcon color="error" /> : <ExpandMoreIcon color="success" />}  </IconButton>
                        </div>
                        <div style={styles2}>
                            <h4 style={{ color: "darkred" }}>Name : {product.name}</h4>
                            <h4 style={{ color: "darkblue" }}>CatchPhrase : {product.catchPhrase}</h4>
                            <h4 style={{ color: "darkred" }}>BS : {product.bs}</h4>
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-end", gap: "20px" }}>
                            <IconButton aria-label="editBtn" color="error"
                                onClick={() => navigate(`/userdata/${product.id}`)} >
                                <EditIcon />
                            </IconButton>

                            <IconButton aria-label="deleteBtn" color="secondary"
                                onClick={() => {
                                    axios.delete(`${API}/${product.id}`)
                                        .then(() => getProduct())
                                }}>
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}




export default ProductList