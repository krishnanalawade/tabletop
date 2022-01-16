import './App.css';
import { Fragment } from 'react';
import Navbar from './components/Navbar';
import { Grid } from "@mui/material";
import UsersList from './components/UsersList';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import ViewUser from './components/ViewUser';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Grid container>
          <Grid item sm={2} xs={2}>

          </Grid>
          <Grid item sm={7} xs={10}>
            <Route exact path="/">
              <UsersList />
            </Route>
            <Route path="/user/add">
              <AddUser />
            </Route>
            <Route path="/user/view/:userid">
              <ViewUser />
            </Route>
            <Route path="/user/edit/:userid">
              <EditUser />
            </Route>
          </Grid>
        </Grid>
      </Router>
    </Fragment>
  );
}

export default App;
