import React from 'react';
import { Drawer, Divider, IconButton }
	from '@material-ui/core';
import { List, ListItem, ListItemIcon, ListItemText }
	from '@material-ui/core';
import PermContactCalendarIcon from
	'@material-ui/icons/PermContactCalendar';
import ReorderIcon from '@material-ui/icons/Reorder';
import AccountCircleIcon from
	'@material-ui/icons/AccountCircle';
import { Component } from 'react';
// import { Link } from 'react-router-dom';

const styles = {
sideNav: {
	marginTop: '-60px',
	zIndex: 3,
	marginLeft: '0px',
	position: 'fixed',
},

};

export default class MarerialUIDrawer extends Component {
constructor() {
	super();
	this.state = {
	isDrawerOpened: false,
	};
}
toggleDrawerStatus = () => {
	this.setState({
	isDrawerOpened: true,
	})
}
closeDrawer = () => {
	this.setState({
	isDrawerOpened: false,
	})
}
render() {
	const { isDrawerOpened } = this.state;
	return (
	<div>
		<div style={styles.sideNav}>
			<IconButton onClick={this.toggleDrawerStatus}>
			{!isDrawerOpened ? <ReorderIcon /> : null }
			</IconButton>
		</div>
		<Divider/>
		<Drawer
		variant="temporary"
		open={isDrawerOpened}
		onClose={this.closeDrawer}
		>
	
			<List>
			<ListItem button key='About Us'>
				<ListItemIcon><AccountCircleIcon/>
				</ListItemIcon>
				<ListItemText primary='About Us' />
			</ListItem>
			</List>
		
		<List>
			<ListItem button key='Contact Us'>
			<ListItemIcon><PermContactCalendarIcon/>
			</ListItemIcon>
			<ListItemText primary='Contact Us' />
			</ListItem>
			</List>
		
		</Drawer>
	</div>
	);
}
}