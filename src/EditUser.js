import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { API } from "./API";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { TextField } from "@mui/material";


function EditUser() {

    const [product, setProduct] = useState(null)
    const { productid } = useParams();
    const getProduct = () => {
        axios.get(`${API}/${productid}`)                                     //using Axios GET Method
            .then((res) => setProduct(res.data))
    }
    useEffect(() => getProduct(), [])

    return product ? <EditUserData product={product} /> : "Loading....."

}


function EditUserData({ product }) {
    const navigate = useNavigate()


    const [name, setName] = useState(product.name)
    const [username, setUsername] = useState(product.username)
    const [email, setEmail] = useState(product.email)
    const [phone, setPhone] = useState(product.phone)
    const [street, setStreet] = useState(product.street)
    const [suite, setSuite] = useState(product.suite)
    const [city, setCity] = useState(product.city)
    const [zipcode, setZipcode] = useState(product.zipcode)
    const [lat, setLat] = useState(product.lat)
    const [lng, setLng] = useState(product.lng)
    const [website, setWebsite] = useState(product.website)
    const [compname, setCompname] = useState(product.compname)
    const [phrase, setPhrase] = useState(product.phrase)
    const [bs, setBs] = useState(product.bs)
    return (
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
                    const UpdatedUser = {
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
                    axios.put(`${API}/${product.id}`, UpdatedUser)
                        .then(() => navigate("/"))                              //using Axios PUT Method
                }}>Edit User</Button>
            </div>

        </div>
    )
}




export default EditUser