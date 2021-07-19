import React, {Component} from 'react';
import {Navbar,Container} from 'react-bootstrap';


export default class Nav extends Component{
   render(){
    return(
        <Navbar bg="light">
            <Container>
                <Navbar.Brand bg="dark" variant="dark" href="#home">Test</Navbar.Brand>
            </Container>
        </Navbar>
    )
   }
}