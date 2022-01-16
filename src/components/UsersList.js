import { makeStyles } from "@mui/styles";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Add from '@mui/icons-material/Add';
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';
import DeleteButton from "./DeleteButton"
import EditButton from "./EditButton"
import TextField from '@mui/material/TextField';
import { Grid } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import GameSessionsList from '../data/gameSession'
import { useState ,useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
    },
    floatRight: {
        float: "right"
    }
}));
const UsersList = () => {
    const usersList = useSelector(state => state.users.usersList);
    const [filteredUsersList , setFilteredUsersList] = useState(usersList);
    const [gameSession , setGameSession ] = useState('');
    const classes = useStyles();
    const handleSearchReq = (event) => {
        let filteredUsers = usersList.filter((user)=>user.sessions === event.target.value);
        setFilteredUsersList(filteredUsers);
        setGameSession(event.target.value)
    }
    const clearSearchReq = (event) => {
        setFilteredUsersList(usersList);
        setGameSession('')
    }
    useEffect(()=>{
        setFilteredUsersList(usersList);
    },[usersList])
    return (
        <div className={classes.container}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        id="outlined-select-game-sessions"
                        select
                        label="Select"
                        helperText="Please Filter By Game Sessions"
                        onChange={handleSearchReq}
                        value={gameSession}
                        name="Sessions"
                        fullWidth
                    >
                        {GameSessionsList.map((option) => (
                            <MenuItem key={option.id} value={option.name}>
                                {option.name}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={1} style={{marginTop:"5px"}}>
                    <IconButton aria-label="clear" className={classes.floatRight} onClick={clearSearchReq}>
                        <ClearIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={5} style={{float:"right"}}>
                    <Link to="/user/add" >
                        <Button variant="contained" startIcon={<Add />} className={classes.floatRight}>
                            Add Player
                </Button>
                    </Link>
                </Grid>
            </Grid>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>First Name</TableCell>
                            <TableCell align="right">Contact Number</TableCell>
                            <TableCell align="right">Campaign Name</TableCell>
                            <TableCell align="right">Game Sessions</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredUsersList.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <Link to={"/user/view/" + row.id}>
                                        {row.first_name} {row.last_name}
                                    </Link>
                                </TableCell>
                                <TableCell align="right">{row.contact_number}</TableCell>
                                <TableCell align="right">{row.campaign_name}</TableCell>
                                <TableCell align="right">{row.sessions}</TableCell>
                                <TableCell align="right">
                                    <DeleteButton id={row.id} />
                                    <EditButton id={row.id} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default UsersList;
