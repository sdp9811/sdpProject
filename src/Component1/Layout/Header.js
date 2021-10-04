import React from 'react'
import {Navbar,Container,Nav, NavbarBrand, NavLink, Button} from 'react-bootstrap'



export const Header = () => {
    return (
        <div>
             <Navbar bg="primary" varient="primary">
                <Container>
                    <Navbar.Brand href="#home"> Web </Navbar.Brand>
                    <Nav className="me-auto">
                    
                       <NavLink href="/home">Home</NavLink>
                        <NavLink href="/useref">UseRef</NavLink>
                        <NavLink href="/cnt">Count</NavLink>
                        
                         
                         
                         
                         
                    </Nav>
                </Container>
            </Navbar>
            
        </div>
    )
}
