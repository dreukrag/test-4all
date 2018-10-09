import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Drawer, MenuItem, Menu, ListItem, List, ListItemText, ListItemIcon, 
    AppBar, Toolbar, Button, IconButton, Badge, Hidden} from '@material-ui/core'
import {Dashboard, Notifications, ChatBubbleOutline, Settings, Search, MoreVert, AddCircleOutline, Email, Person, CalendarToday} from '@material-ui/icons';

const flexBox = {
    width:'100%',
    display: 'flex',
    placeContent: 'flex-end',
}

const styles = () => ({
    badge: {
      top: 10,
      right: -10,
    },
  });

const CustomizedBadge = withStyles(styles)(Badge)
const headerText={fontWeight:'800', fontSize:'1.25rem'}
export default class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            drawerOpen: false,
            moreOpen:false
        };
        
      }
    render = () => (
    <AppBar>
        <Toolbar>
        <IconButton color='secondary' onClick={this.drawerHandleToggle} children={<Dashboard />}/>
        <Button onClick={this.drawerHandleToggle} color='secondary' style={headerText}>DashBoard</Button>
        <section style={flexBox} >
            <Hidden xsDown>
                <IconButton children={<CustomizedBadge color='error' badgeContent={1}><Notifications color='secondary' /></CustomizedBadge>} />
                <IconButton children={<CustomizedBadge color='error' badgeContent={3}><ChatBubbleOutline color='secondary' /></CustomizedBadge>} />
                <IconButton children={<Settings color='secondary'/>}/>
                <IconButton children={<Search color='secondary'/>} />
            </Hidden>
            <Hidden smUp>
                <IconButton onClick={this.moreHandleClick}>
                    <MoreVert color='secondary'/>
                </IconButton>
                <Menu
                    open={this.state.moreOpen}
                    anchorEl={this.state.anchorEl}
                    onClose={this.moreHandleRequestClose}
                    >
                        <MenuItem children="Notificações"/>
                        <MenuItem children="Chat"/>
                        <MenuItem children="Opções"/>
                        <MenuItem children="Buscar"/>
                </Menu>
            </Hidden>
        </section>
        </Toolbar>
            <Drawer
            width={300}
            open={this.state.drawerOpen}
            onClose={this.drawerHandleClose}
            >
            <List>
                <ListItem divider>Lista de Trabalho</ListItem>
                <List>
                    <ListItem onClick={this.drawerHandleClose}>Calendário</ListItem>
                    <ListItem onClick={this.drawerHandleClose}>Atividades</ListItem>
                </List>
            </List>
            <List>
                <ListItem onClick={this.drawerHandleClose}>
                    <ListItemText children={'Ciclo de Vendas'}/></ListItem>
                <ListItem onClick={this.drawerHandleClose}>
                    <ListItemText children={'Marketing'}/></ListItem>
            </List>
            <List>
                <ListItem divider >
                    <ListItemIcon children={<AddCircleOutline />} />
                    <ListItemText children={'Criar'}/></ListItem>
                <List>
                    <ListItem onClick={this.drawerHandleClose}>
                        <ListItemIcon children={<CalendarToday />} />
                        <ListItemText children={'Tarefas'}/></ListItem>
                    <ListItem onClick={this.drawerHandleClose}>
                        <ListItemIcon children={<Email />} />
                        <ListItemText children={'Email'}/></ListItem>
                    <ListItem onClick={this.drawerHandleClose}>
                        <ListItemIcon children={<Person />} />
                        <ListItemText children={'Contato'}/></ListItem>
                 </List>
            </List>
            </Drawer>
        </AppBar>
    );

    drawerHandleToggle = () => this.setState({drawerOpen: !this.state.drawerOpen});
    
    drawerHandleClose = () => this.setState({drawerOpen: false});

    moreHandleClick = (event) => {
        event.preventDefault();
        this.setState({moreOpen: true, anchorEl: event.currentTarget});
    };

    moreHandleRequestClose = () => {
        this.setState({moreOpen: false});
    };
}