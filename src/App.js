import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from './components/header/header';
import HomePage from './pages/home';
import ProductDisplayPage from './pages/productDisplay';
import 'bootstrap/dist/css/bootstrap.css';

// import './App.css';
import './assets/App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
      
            <Grid item xs={12}>
              <Paper className={classes.paper}> 
                <Header/>
              </Paper>
             
            </Grid>
            <Grid item xs={12}>
            <Typography component="div" style={{ backgroundColor: 'white', height: '80vh' }}>
              <Route path="/" component={HomePage} exact/>
              <Route path="/shop" component={ProductDisplayPage} />
              </Typography>
            </Grid>
            <Grid item xs={12}>
             
            </Grid>
      </Container>
    </React.Fragment>
    </Router>
  );
}

export default App;
