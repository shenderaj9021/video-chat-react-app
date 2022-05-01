
import './App.css';
import {Typography,AppBar} from "@material-ui/core"
import { makeStyles } from '@material-ui/core';
import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notifications';
import Options from './components/Options';
const useStyles = makeStyles((theme)=>({
  appBar: {
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid black',
    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}))
function App() {
  const classes = useStyles();
  return (
    <div className="{classes.wrapper">
      <AppBar position="static" color="inherit" className={classes.appBar}>
        <Typography variant="h2" align="center">video chat</Typography>
      </AppBar>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  );
}

export default App;
