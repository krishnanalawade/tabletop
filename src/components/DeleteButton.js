import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux"
import { usersActions } from '../redux/reducers/users-slice'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const useStyles = makeStyles((theme) => ({
    floatRight: {
        float: "right"
    }
}));
const DeleteButton = (props) => {
    const dispatch = useDispatch();
    const { id } = props;
    const deleteUserHandler = () => {
        dispatch(usersActions.deleteUser({ id }))
    }
    const classes = useStyles();
    return (
        <IconButton aria-label="delete" className={classes.floatRight} onClick={deleteUserHandler}>
            <DeleteIcon />
        </IconButton>
    )
}

export default DeleteButton;