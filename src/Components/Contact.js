import React, { useState } from "react";
import Button from "@mui/material/Button";
import { db } from "../firebase";
import {onSnapshot, collection} from "@firebase/firestore";
import Box from "@mui/material/Box";
import validator from "validator";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

function Contact() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validator.isEmpty(email) || validator.isEmpty(password)) {
      setError(true);
    } else {
      

      db.collection("contacts")
        .add({
          email: email,
          password: password,
        })
        .then(() => {
         
          alert("Your email and password has been submitted!");
        })
        .catch((error) => {
          alert(error.message);
        });
        onSnapshot(collection(db, 'contacts'), (snapshot) => {
            console.log("Data from firebase", snapshot.docs.map(doc => doc.data()));
        });
      setEmail("");
      setPassword("");
    }
  };
 
  return (
    <div style={{ textAlign: "center" }}>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" }, mt: 12 }}
      >
        <h1 style={{ marginTop: "30px" }}>Contact Form</h1>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            {error ? (
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                margin="dense"
                size="small"
                value={email}
                error
                helperText="Required field"
                onChange={(e) => setEmail(e.target.value)}
              />
            ) : (
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                margin="dense"
                size="small"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            )}
          </Grid>

          <Grid item xs={12}>
            {error ? (
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                margin="dense"
                size="small"
                value={password}
                error
                helperText="Required field"
                onChange={(e) => setPassword(e.target.value)}
              />
            ) : (
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                margin="dense"
                size="small"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            )}
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Contact;
