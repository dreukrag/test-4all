import React, { Component } from 'react';
import './App.css';
import Widget from './components/cards/Widget';
import ChartCard from './components/cards/ChartCard';
import ChatCard from './components/cards/ChatCard';
import Header from './components/Header';
import { Grid , AppBar, Typography, Toolbar, MuiThemeProvider} from '@material-ui/core/';
import { ShoppingBasketOutlined, ChatBubbleOutline, PersonOutlined, ViewQuiltOutlined, Apps } from '@material-ui/icons/';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const Orders = withStyles({   primary:{backgroundColor:'#30a5ff'}, })(Widget)
const Comments = withStyles({ primary:{backgroundColor:'#ffb53e'}, })(Widget)
const Users = withStyles({    primary:{backgroundColor:'#1ebfae'}, })(Widget)
const Views = withStyles({    primary:{backgroundColor:'#f9243f'}, })(Widget)

const iconSettings = { root:{color:'white', fontSize:'64px'} }
const OrdersIcon = withStyles(iconSettings)(ShoppingBasketOutlined)
const CommentsIcon = withStyles(iconSettings)(ChatBubbleOutline)
const UsersIcon = withStyles(iconSettings)(PersonOutlined)
const ViewsIcon = withStyles(iconSettings)(ViewQuiltOutlined)

const WidgetGrid = (props) => ( <Grid item xs={12} sm={12} md={6} lg={3} xl={3} {...props} />)
const ChartGrid = (props) => ( <Grid item xs={12} sm={12} md={12} lg={12} xl={12} {...props} />)
const ChatGrid = (props) => ( <Grid item xs={12} sm={12} md={12} lg={12} xl={12} {...props} />)
const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: {
      main: '#ffffff',
    },
  },
});


const appbarStyle = {
  color:'white',
  fontWeight:'800',
  fontSize:'24px',
  height:'56px',
  display:'none'
  
}
class App extends Component {
  render() {
    return (
      <div style={{marginTop:'64px'}} className="App">
        <MuiThemeProvider theme={theme}>
        <Header/>
        <AppBar style={appbarStyle}> 
          <Toolbar style={{padding:'0', display:'flex'}}>
            <Apps style={{width:'48px', height:'48px'}}/>
            <Typography variant="display2" color="inherit" >Dashboard</Typography>
          </Toolbar>
        </AppBar>

        <Grid container spacing={24} style={{width:'100%', margin:'0px'}}>
          <WidgetGrid children={
            <Orders type='orders'  icon={<OrdersIcon />} 
              content={'2'} suffix={' new orders'} />} />
          <WidgetGrid children={
            <Comments type='comments'  icon={<CommentsIcon />} 
              content={'2'} suffix={' comments'} />} />
          <WidgetGrid children={
            <Users type='users' icon={<UsersIcon />} 
              content={'2'} suffix={' new users'} />} />
          <WidgetGrid children={
            <Views type='views' icon={<ViewsIcon />} 
              content={'2'} suffix={' page views'} />} />
      
          <ChartGrid children={<ChartCard />}/>
          <ChatGrid children={<ChatCard />} />
        </Grid>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
