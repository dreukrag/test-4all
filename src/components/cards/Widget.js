import React from 'react';
import { Grid} from '@material-ui/core/';
import BaseCard from '../BaseCard'

export default class Widget extends React.Component {
    render = () => {
        return(<BaseCard>
            <Grid container spacing={0}>
                <Grid item classes={{item:this.props.classes.primary}}  xs={12} sm={4} md={4} lg={4} xl={4} children=        
                    {this.props.icon}/>
                <Grid item classes={{item:this.props.classes.secondary}} xs={12} sm={8} md={8} lg={8} xl={8} children=
                    {this.props.content} />
            </Grid>
        </BaseCard>
    )}
}

Widget.defaultProps = {
    classes:{
        primary:null,
        secondary:null
    }
}
