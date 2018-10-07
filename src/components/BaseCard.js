import React from 'react';
import {Card, CardContent, CardHeader} from '@material-ui/core/';

export default class BaseCard extends React.Component
{
  //TO-DO:Merge dos styles
    render= () => (
        <Card {...this.props}>
            {this.props.title||this.props.subtitle?
            <CardHeader title={this.props.title} style={ {backgroundColor:this.props.color?this.props.color:null}}/>
            :null}
            <CardContent>
                {this.props.children}
            </CardContent>
        </Card>
    )

}