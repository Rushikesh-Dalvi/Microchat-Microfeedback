import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function TopdevicesBread() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
     {/* <Typography color="textPrimary" style={{fontSize:'1.7vw',posotion:'absolute' }}>Top Devices</Typography> */}
     <Typography color="textPrimary"style={{position:"absolute",top:"-5.5px"}}>Top Devices</Typography>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
      
        <Link color="inherit" href="/" onClick={handleClick}style={{fontSize:"11px"}}>
          Home
        </Link>
        <Link color="inherit" href="/getting-started/installation/" onClick={handleClick} style={{fontSize:"11px"}}>
          Smartphones
        </Link>
        <Typography color="textPrimary"style={{fontSize:"11px"}}>Top Devices</Typography>
      </Breadcrumbs>
    </div>
  );
}
