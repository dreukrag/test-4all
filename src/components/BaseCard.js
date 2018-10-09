import React from 'react';
import {Card, CardHeader} from '@material-ui/core/';

export default class BaseCard extends React.Component
{

    render= () => (
        <Card >
            {this.props.titleContent ?<CardHeader title={this.props.titleContent} /> :null}
            {this.props.children}
        </Card>
    )

}

BaseCard.defaultProps = {
    classes:{
        headerClasses:null
    }
}