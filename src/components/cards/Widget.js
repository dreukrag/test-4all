import React from 'react';
import {Grid} from '@material-ui/core';
import BaseCard from '../BaseCard'
import axios from 'axios';

const contentStyle = {
    flexDirection:'column', 
    display:'flex',
    justifyContent:'center',
    fontWeight:'800',
    fontSize:'32px',
    color:'darkgrey',
}
export default class Widget extends React.Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
          widgetData: 0,
        };
    }

    render = () => {
        return(<BaseCard>
            <Grid container spacing={0}>
                <Grid item classes={{item:this.props.classes.primary}}  xs={12} sm={4} md={4} lg={4} xl={4} children=        
                    {this.props.icon}/>
                <Grid item classes={{item:this.props.classes.secondary}} style={contentStyle} xs={12} sm={8} md={8} lg={8} xl={8} children=
                    {this.state.widgetData + this.props.suffix} />
            </Grid>
        </BaseCard>
    )}

    componentDidMount = () => {
        this.widgetData = this.getWidgetData();
    };

    getWidgetData = () =>{
        axios.get('http://dev.4all.com:3050/widgets').then(response => {
            switch (this.props.type){
                case 'orders':
                    this.setState({widgetData:response.data.newOrders});
                break;
                case 'comments':
                    this.setState({widgetData:response.data.comments});
                    break;
                case 'users':
                    this.setState({widgetData:response.data.newUsers});
                    break;
                case 'views':
                    this.setState({widgetData:response.data.pageViews});
                    break;
                
                default:
                    this.setState({widgetData:response.data.newOrders});
                    break;
            }
        });
    }
}

Widget.defaultProps = {
    classes:{
        primary:null,
        secondary:null
    }
}
