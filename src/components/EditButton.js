import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    floatRight: {
        float: "right"
    }
}));
const EditButton = (props) => {
    const { id } = props;
    const classes = useStyles();
    return (
        <Link to={"/user/edit/"+id}>
            <IconButton aria-label="edit" className={classes.floatRight}>
                <EditIcon />
            </IconButton>
        </Link>
    )
}

export default EditButton;