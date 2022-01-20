import React,{useState} from 'react';
import { Navbar, Container, Nav, Button, Badge} from 'react-bootstrap';
//import {Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import {RiLoginCircleLine, RiLogoutCircleRLine} from "react-icons/ri";
import { useSelector } from 'react-redux';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import ListAltTwoToneIcon from '@mui/icons-material/ListAltTwoTone';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';


const Header = () => {
    const user = JSON.parse(localStorage.getItem('currentUser'))
    console.log('user',user)
    const [loggedIn, setLoggedIn] =useState(false)
    const {cartItems} = useSelector(state => state.cartReducer)

    const handleLogout = () => {
        console.log('logout',user)
        localStorage.removeItem('currentUser')
        window.location.reload()
    }

    return (
        <div className="header">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <LinkContainer to="/" className="navbar-brand">
            <Navbar.Brand>SHOP</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
            <LinkContainer
                className=""
                to="/user">
                    <Nav.Link>
                        {user ? user.email : `USER `}
                        
                        <PersonOutlineTwoToneIcon/>
                    </Nav.Link>
            </LinkContainer>
            <LinkContainer
                to="/orders">
                    <Nav.Link>
                        ORDERS {" "}
                        <ListAltTwoToneIcon/>
                    </Nav.Link>
            </LinkContainer>
            <LinkContainer
                to="/cart">
                    <Nav.Link>
                        CART {" "}
                        <ShoppingCartTwoToneIcon size={30}/>
                        <Badge pill  className="badge-cart">{cartItems.length}</Badge> 
                         {/* bg="danger" */}
                    </Nav.Link>
            </LinkContainer>
                <Nav.Link>
                    {user ? 
                            <div onClick={handleLogout}>
                            LOGOUT {" "}
                            <LogoutTwoToneIcon
                                size={30}
                                //className="navlink-icon"
                                color="white"
                                
                            />
                            </div>
                         : 
                            
                            <LinkContainer
                                to="/register"  
                                eventKey={2} 
                            >
                                <div>
                                LOGIN {" "}
                                <LoginOutlinedIcon
                                    size={30}
                                    //className="navlink-icon" 
                                    color='white' 
                                />
                                </div>
                            </LinkContainer>                                  
                            
                    }
                </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item to="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item to="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item to="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item to="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
            <Nav>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        </div>
    );
};

// const GrLoginStyled = styled(GrLogin)`
//   color: white;
//   transform: scale(2);
//   margin: 5%;
//   fill: 'white';
// `;
// const GrLogoutStyled = styled(GrLogout)`
//   color: white;
//   transform: scale(2);
//   margin: 5%;
//   fill: 'white';
// `;

export default Header;