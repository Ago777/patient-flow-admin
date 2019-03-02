import React, {Component} from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import {connect} from "react-redux";
import {logoutUser} from "Redux/actions";


class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  handleLogout = () => {
    this.props.logoutUser(this.props.history);
  };

  render() {
    return (
      <div className='top-nav'>
        <Navbar light expand="md">
          <NavbarBrand className="navbar-logo d-flex align-items-center" href="/">
            <span className='logo-txt'>PATIENT</span>
            <span className='logo-txt txt ml-2'>FLOW</span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar className='justify-content-between'>
            <Nav className="ml-lg-5" navbar>
              <NavItem className="ml-lg-5">
                <NavLink className="ml-xl-5  d-flex flex-md-column  align-items-center" href="/admin/organizations">
                  <i className="material-icons">
                    settings
                  </i>
                  Organizations
                </NavLink>
              </NavItem>
              <NavItem className="ml-md-5">
                <NavLink className="ml-xl-5  d-flex flex-md-column  align-items-center" href="/admin/providers">
                  <i className="material-icons">
                    build
                  </i>
                  Providers
                </NavLink>
              </NavItem>
              <NavItem className="ml-md-5">
                <NavLink className="ml-xl-5  d-flex flex-md-column  align-items-center" href="/admin/users">
                  <i className="material-icons">
                    group
                  </i>
                  Users
                </NavLink>
              </NavItem>
              <NavItem className="ml-md-5">
                <NavLink className="ml-xl-5  d-flex flex-md-column  align-items-center" href="/admin/locations">
                  <i className="material-icons">
                    location_on
                  </i>
                  Locations
                </NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-lg-5" navbar>
              <NavItem className="ml-md-5">
                <NavLink className="ml-xl-5  d-flex flex-md-column  align-items-center" href="/admin/locations">
                  <i className="material-icons">
                    power_settings_new
                  </i>
                  Log Out
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = ({authUser}) => {
  const {email} = authUser['userAdmin'];
  return {
    email,
  };
};
export default connect(mapStateToProps, {
  logoutUser,
})(TopNav);


