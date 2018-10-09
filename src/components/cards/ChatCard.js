import React from 'react'
import {Avatar, Grid, Card, CardHeader, Typography} from '@material-ui/core/';

import { ChatBubbleOutline } from '@material-ui/icons/';

export default class ChatCard extends React.Component{
    render = () => (
        <Card>
            <CardHeader title={<span style={{float:'left'}}><ChatBubbleOutline /> <span>Chat</span></span>
            }/>
                <Card>
                    <Avatar style={{float:'left', margin:'8px'}} children='A' alt='avatar'/>
                    <Typography variant='body1' align='justify' children={
                        'Mollit amet ipsum eu ullamco minim id. Ullamco sit qui Lorem nostrud. Amet et proident laborum non non deserunt ea non elit enim officia velit. Labore veniam enim veniam tempor. Velit exercitation duis ea non consectetur elit adipisicing elit consectetur laboris pariatur.'
                    }/>
                    
                </Card>
        </Card>
    )
}