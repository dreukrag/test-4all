import React from 'react'
import {Paper, Card, Avatar, Typography} from '@material-ui/core/';

export default class ChatWidget extends React.Component {
    render = () => (
        <Paper style={{padding:'8px'}}>
            <Avatar style={{float:this.props.displayPortraitLeft?'left':'right', margin:'8px'}} children='A' src={this.props.portrait} alt='avatar'/>
            <Typography style={{float:this.props.displayPortraitLeft?'left':'right', margin:'8px'}} variant='caption' 
                children={<b>{this.props.userName}</b>} />
            <Typography style={{float:this.props.displayPortraitLeft?'left':'right', margin:'8px'}} variant='caption' 
                children={this.props.time} />
            <p>
            <Typography paragraph={true} style={{marginTop:'32px'}} variant='body1' align='justify' children={
                this.props.message
            }/></p>
            
        </Paper>
    )
}

ChatWidget.defaultProps = {
    userName:'JohnDoe',
    portrait:'',
    message:'Lorem Ipsum',
    displayPortraitLeft:true,
    time:'0 seconds',
}

