import React from 'react';
import {Card, CardContent, CardHeader} from '@material-ui/core/';

export default class BaseCard extends React.Component
{

    render= () => (
        <Card {...this.props}>
            {this.props.title}
            {this.props.children}
        </Card>
    )

}