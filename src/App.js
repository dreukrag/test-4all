import React, { Component } from 'react';
import './App.css';
import Widget from './components/cards/Widget'
import { Grid } from '@material-ui/core/';
import { ShoppingBasketOutlined, ChatBubbleOutline, PersonOutlined, ViewQuiltOutlined } from '@material-ui/icons/';
import { withStyles } from '@material-ui/core/styles';

const Orders = withStyles({   primary:{backgroundColor:'#30a5ff'}, })(Widget)
const Comments = withStyles({ primary:{backgroundColor:'#ffb53e'}, })(Widget)
const Users = withStyles({    primary:{backgroundColor:'#1ebfae'}, })(Widget)
const Views = withStyles({    primary:{backgroundColor:'#f9243f'}, })(Widget)

const iconSettings = { root:{color:'white', fontSize:'64px'} }
const OrdersIcon = withStyles(iconSettings)(ShoppingBasketOutlined)
const CommentsIcon = withStyles(iconSettings)(ChatBubbleOutline)
const UsersIcon = withStyles(iconSettings)(PersonOutlined)
const ViewsIcon = withStyles(iconSettings)(ViewQuiltOutlined)

const WidgetCard = (props) => ( <Grid item xs={12} sm={12} md={6} lg={3} xl={3} {...props} />)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid container spacing={24} style={{width:'100%', margin:'0px'}}>
          <WidgetCard children={
            <Orders  icon={<OrdersIcon />} 
              content={'2'} suffix={' new orders'} />} />
          <WidgetCard children={
            <Comments  icon={<CommentsIcon />} 
              content={'2'} suffix={' comments'} />} />
          <WidgetCard children={
            <Users  icon={<UsersIcon />} 
              content={'2'} suffix={' new users'} />} />
          <WidgetCard children={
            <Views  icon={<ViewsIcon />} 
              content={'2'} suffix={' page views'} />} />
        </Grid>
      </div>
    );
  }
}

export default App;
