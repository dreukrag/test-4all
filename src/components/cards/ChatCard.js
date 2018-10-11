import React from 'react'
import axios from 'axios'
import {Avatar, Grid, Card, CardHeader, Typography} from '@material-ui/core/';
import ChatWidget from './ChatWidget'
import ChatWidgetClient from './ChatWidgetClient'

import { ChatBubbleOutline } from '@material-ui/icons/';

export default class ChatCard extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          messageData: [{
            userName:'JohnDoe',
            portrait:'',
            message:'Lorem Ipsum',
            displayPortraitLeft:true,
            time:'0 seconds',
          }],
        };
    }

    render = () => (
        <Card>
            <CardHeader title={<span style={{float:'left'}}><ChatBubbleOutline /> <span>Chat</span></span>
            }/>
                {this.state.messageData.map( x => {
                    return <ChatWidget {...x} />
                })}
                <ChatWidgetClient updateFunc={this.updateChat} />
        </Card>
    )
    updateChat = () => {
        this.getMessageData()
    }
    getMessageData = () =>{
        axios.get('http://dev.4all.com:3050/messages').then(response => {
            this.setState({messageData:response.data})
        });
    }
    
    componentDidMount = () => {
        this.getMessageData();
    };
}