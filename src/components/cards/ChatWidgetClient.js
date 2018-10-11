import React from 'react'
import axios from 'axios'
import {Paper, Button, Input} from '@material-ui/core/';

export default class ChatWidgetClient extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            message:''
        };
    }

    render = () => (
        <Paper style={{padding:'8px'}}>
            <Input value={this.state.message} onChange={this.handleChange('message')} style={{width:'80%', height:'42px'}} placeholder={'Type your message here...'}/>
            <Button style={{width:'20%',}} onClick={this.sendMessage} variant="contained" color="primary" children={'Send'}/>
            
        </Paper>
    )
    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
      };
    sendMessage = () => {
        this.handleChange();
        axios.post('http://dev.4all.com:3050/messages', {message:this.state.message})
        this.props.updateFunc()
    }
}

