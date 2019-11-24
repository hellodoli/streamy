import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Collapse
} from 'reactstrap';
import OAuth from '../OAuth';

class Header extends Component {
	constructor () {
		super();
		this.state = {
			collapse: true
		}
	}

	toggleCollapse = () => {
		this.setState(state => ({
			collapse: !state.collapse
		}));
	}

	render() {
		return(
			<header className="s-header">
				<Navbar color="dark" dark expand="lg">
					<Container>
						<Link className="navbar-brand" to="/">Streamy</Link>
						<NavbarToggler onClick={this.toggleCollapse} />
						{/* Collapse Menu */}
						<Collapse isOpen={this.state.collapse} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<NavLink href="#">Streams</NavLink>
								</NavItem>
								<NavItem>
									<OAuth />
								</NavItem>
							</Nav>
						</Collapse>
					</Container>
				</Navbar>
    	</header>
		);
	}
}

export default Header;
