import { makeStyles } from "@mui/styles";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';


const useStyles = makeStyles((theme) => ({
    ViewUserHolder: {
        paddingTop: theme.spacing(10),
    }
}));

const ViewUser = () => {
    const classes = useStyles();
    const usersList = useSelector(state => state.users.usersList)
    const { userid } = useParams();
    const [selectedUser, setSelectedUser] = useState({});
    useEffect(() => {
        const user = usersList.find((user) => user.id == userid);
        setSelectedUser(user);
    }, [userid, setSelectedUser])
    

    const style = {
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
    };

    return (
        <div className={classes.ViewUserHolder}>
            <Typography variant="h4">Player Details </Typography>
            <List sx={style} component="nav" aria-label="mailbox folders">
                <ListItem>
                    <Typography>
                        First Name : {selectedUser.first_name}
                    </Typography>
                </ListItem>
                <Divider />
                <ListItem>
                    <Typography>
                        Last Name : {selectedUser.last_name}
                    </Typography>
                </ListItem>
                <Divider />
                <ListItem>
                    <Typography>
                        Contact Number : {selectedUser.contact_number}
                    </Typography>
                </ListItem>
                <Divider />
                <ListItem>
                    <Typography>
                        Campaign Name : {selectedUser.campaign_name ? selectedUser.campaign_name : "Not Available"} 
                    </Typography>
                </ListItem>
                <Divider />
                <ListItem>
                    <Typography>
                        Game Session : {selectedUser.sessions}
                    </Typography>
                </ListItem>
                <Divider />
            </List>
        </div>
    )
}

export default ViewUser;