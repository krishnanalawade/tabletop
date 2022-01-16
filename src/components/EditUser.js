import Button from '@mui/material/Button';
import { makeStyles } from "@mui/styles";
import TextField from '@mui/material/TextField';
import { Grid } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import GameSessionsList from '../data/gameSession'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { usersActions } from '../redux/reducers/users-slice'
import { useHistory, useParams } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
    addUserHolder: {
        paddingTop: theme.spacing(10),
    },
    margin: {
        marginBottom: "10px !important"
    }
}));


const EditUser = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const usersList = useSelector(state => state.users.usersList)
    const { userid } = useParams();
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [contact_number, setContactNumber] = useState('');
    const [sessions, setGameSession] = useState('');

    useEffect(() => {
        const user = usersList.find((user) => user.id == userid);
        setFirstName(user.first_name);
        setLastName(user.last_name);
        setContactNumber(user.contact_number);
        setGameSession(user.sessions);
    }, [userid])
    
    const classes = useStyles();

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value)
    }
    const handleLastNameChange = (event) => {
        setLastName(event.target.value)
    }
    const handleContactNumberChange = (event) => {
        setContactNumber(event.target.value)
    }
    const handleSessionChange = (event) => {
        setGameSession(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(usersActions.updateUser({
            id: userid,
            first_name,
            last_name,
            contact_number,
            sessions,
        }));
        history.push("/")
    }
    return (
        <div className={classes.addUserHolder}>
            <form onSubmit={handleSubmit}>
                <Grid container>
                    <Grid item xs={6}>
                        <TextField id="first_name" label="First Name" fullWidth className={classes.margin} value={first_name}
                            onChange={handleFirstNameChange} name="First Name" />

                        <TextField id="last_name" label="Last Name" fullWidth className={classes.margin} value={last_name}
                            onChange={handleLastNameChange} name="Last Name" />

                        <TextField fullWidth inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                            id="contact_number" label="Contact Number" className={classes.margin}
                            onChange={handleContactNumberChange} name="Contact Number" value={contact_number} />

                        <TextField
                            fullWidth
                            id="outlined-select-session"
                            select
                            label="Select"
                            helperText="Please select"
                            onChange={handleSessionChange}
                            name="sessions"
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
                                Update
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </form>
        </div >
    )
}

export default EditUser