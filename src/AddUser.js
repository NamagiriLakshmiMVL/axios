import React, { useState } from "react";
import { Button } from "@mui/material";
import { API } from "./API";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TextField } from "@mui/material";


function AddUser() {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [street, setStreet] = useState("")
    const [suite, setSuite] = useState("")
    const [city, setCity] = useState("")
    const [zipcode, setZipcode] = useState("")
    const [lat, setLat] = useState("")
    const [lng, setLng] = useState("")
    const [website, setWebsite] = useState("")
    const [compname, setCompname] = useState("")
    const [phrase, setPhrase] = useState("")
    const [bs, setBs] = useState("")
    return (<div>
        <div><h1 style={{ fontSize: "30px", textAlign: "center", color: "darkred" }}>ADDING NEW USER</h1></div>
        <div className="add-root">

            <div className="input-field">
                <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(event) => setName(event.target.value)} />
                <TextField id="outlined-basic" label="Username" variant="outlined" value={username} onChange={(event) => setUsername(event.target.value)} />
                <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(event) => setEmail(event.target.value)} />
                <TextField id="outlined-basic" label="Phone" variant="outlined" value={phone} onChange={(event) => setPhone(event.target.value)} />
                <TextField id="outlined-basic" label="Street" variant="outlined" value={street} onChange={(event) => setStreet(event.target.value)} />
                <TextField id="outlined-basic" label="Suite" variant="outlined" value={suite} onChange={(event) => setSuite(event.target.value)} />
                <TextField id="outlined-basic" label="City" variant="outlined" value={city} onChange={(event) => setCity(event.target.value)} />
            </div>
            <div className="input-field">
                <TextField id="outlined-basic" label="Zipcode" variant="outlined" value={zipcode} onChange={(event) => setZipcode(event.target.value)} />
                <TextField id="outlined-basic" label="Latitude" variant="outlined" value={lat} onChange={(event) => setLat(event.target.value)} />
                <TextField id="outlined-basic" label="Longitude" variant="outlined" value={lng} onChange={(event) => setLng(event.target.value)} />
                <TextField id="outlined-basic" label="Website" variant="outlined" value={website} onChange={(event) => setWebsite(event.target.value)} />
                <TextField id="outlined-basic" label="Company Name" variant="outlined" value={compname} onChange={(event) => setCompname(event.target.value)} />
                <TextField id="outlined-basic" label="Company CompanyPhrase" variant="outlined" value={phrase} onChange={(event) => setPhrase(event.target.value)} />
                <TextField id="outlined-basic" label="Company BS" variant="outlined" value={bs} onChange={(event) => setBs(event.target.value)} />

            </div>

            <div className="adduser">
                <Button variant="contained" onClick={() => {
                    const newUser = {
                        name,
                        username,
                        email,
                        phone,
                        street,
                        suite,
                        city,
                        zipcode,
                        lat,
                        lng,
                        website,
                        compname,
                        phrase,
                        bs
                    }

                    axios.post(`${API}`, (newUser))
                        .then(res => (res.data))
                        .then(() => navigate("/"))

                }}>Add User</Button>
            </div>

        </div>
    </div>




    )
}

export default AddUser