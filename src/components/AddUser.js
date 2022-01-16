import Button from '@mui/material/Button';
import { makeStyles } from "@mui/styles";
import TextField from '@mui/material/TextField';
import { Grid } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import GameSessionsList from '../data/gameSession'
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux"
import { usersActions } from '../redux/reducers/users-slice'
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    addUserHolder: {
        paddingTop: theme.spacing(10),
    },
    margin: {
        marginBottom: "10px !important"
    }
}));


const AddUser = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [sessions, setGameSession] = useState('');
    
    const [formData, setInputValues] = useState({
        'first_name': '',
        'last_name': "",
        'contact_number': "",
        'sessions': "",
    });
    const classes = useStyles();
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case "First Name":
                setInputValues((prevInput) => {
                    return {
                        ...prevInput,
                        first_name: value
                    }
                })
                break;
            case "Last Name":
                setInputValues((prevInput) => {
                    return {
                        ...prevInput,
                        last_name: value
                    }
                })
                break;
            case "Contact Number":
                setInputValues((prevInput) => {
                    return {
                        ...prevInput,
                        contact_number: value
                    }
                })
                break;
            case "Sessions":
                setInputValues((prevInput) => {
                    return {
                        ...prevInput,
                        sessions: value
                    }
                });
                setGameSession(value)
                break;

            default:
                break;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(usersActions.addUser(formData));
        history.push("/")
    }
    return (
        <div className={classes.addUserHolder}>
            <form onSubmit={handleSubmit}>
                <Grid container>
                    <Grid item xs={6}>
                        <TextField id="first_name" label="First Name" fullWidth className={classes.margin}
                            onChange={handleInputChange} name="First Name" />

                        <TextField id="last_name" label="Last Name" fullWidth className={classes.margin}
                            onChange={handleInputChange} name="Last Name" />

                        <TextField fullWidth inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                            id="contact_number" label="Contact Number" className={classes.margin}
                            onChange={handleInputChange} name="Contact Number" />

                        <TextField
                            fullWidth
                            id="outlined-select-currency"
                            select
                            label="Select"
                            helperText="Please select"
                            onChange={handleInputChange}
                            name="Sessions"
                            value={sessions}
                        >
                            {GameSessionsList.map((option) => (
                                <MenuItem key={option.id} value={option.name}>
                                    {option.name}
                                </MenuItem>
                            ))}
                        </TextField>
                        <div>
                            <Button variant="contained" className={classes.floatRight} type="submit">
                                Submit
                            </Button>

                        </div>

                    </Grid>
                </Grid>

            </form>
        </div >
    )
}

export default AddUser