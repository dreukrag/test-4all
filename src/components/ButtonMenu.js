import React from 'react';
import {InsertChart, ExpandMore} from '@material-ui/icons/';
import { Menu, Popover, Button} from '@material-ui/core/';

export default class ButtonMenu extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({open: true,anchorElement: event.currentTarget,});
  };

  handleRequestClose = (event) => {
    event.preventDefault();    
    this.setState({open: false, anchorElement: null,});
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClick} >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <InsertChart style={{ marginRight: '8px' }}/>
                <span>Tipo</span>
            <ExpandMore style={{ marginLeft: '16px' }}/>
          </div>
        </Button>
        <Menu open={this.state.open} 
          anchorEl={this.state.anchorElement}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          transformOrigin={{ horizontal: 'left', vertical: 'top' }}
          onClose={this.handleRequestClose}
          children={this.props.children}>
        </Menu>
      </div>
    );
  }
}