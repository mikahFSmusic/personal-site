import React, {useState} from 'react'
import { MDBNavbar, MDBNavbarNav, MDBNavLink, MDBIcon, MDBNavItem, MDBCollapse, MDBNavbarToggler } from 'mdbreact'

export const NavBar = () => {
  const [collapse, setCollapse] = useState(false)

  const handleClick = () => {
    setCollapse(!collapse)
  }
  return (
    <div>
        <MDBNavbar style={{backgroundColor: 'black'}} dark expand="xs">
          <MDBNavbarToggler onClick={handleClick}></MDBNavbarToggler>
          <MDBCollapse isOpen={collapse} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink to="/" link><MDBIcon icon="home"></MDBIcon></MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink to="/resume" link>Resume</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to='/instagram' link><MDBIcon fab icon="instagram"/></MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to='/linkedin' link><MDBIcon fab icon="linkedin"/></MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
    </div>
  )
}
