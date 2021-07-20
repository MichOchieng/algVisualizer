import React, {Component} from 'react';
import {Navbar,Container,Nav} from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';
import '../styles/visualizer.css';

export default class Visualizer extends Component{
    constructor(props){
        super(props);
        this.state = {
            array: [], // Will be the array used for sorting algorithms
            arraySize: 100
        }
        this.generateArray = this.generateArray.bind(this);
    }

    componentDidMount(){
        // Will generate the initial array once the page loads
        this.generateArray();
    }

    generateArray(){
        var array = this.state.array;
        array = [];
        for (let index = 0; index < this.state.arraySize; index++) {
            // Will push a random value from 3 - 1000 into array
            // https://stackoverflow.com/a/7228322
            array.push(Math.floor(Math.random() * (1000 - 3 + 1) + 3));
        }
        this.setState({array});
    }

    render(){
        const mappingArray = this.state.array;
        return(
            <div>
            {/* Render array values to divs */}
            {mappingArray.map( (value,idx) => (
                <div 
                    class="sortingBar" 
                    key={idx}
                    style={{height: `${value/11}vh`}}
                >
                </div>
                )
            )}
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Button variant="info" onClick={() => {this.generateArray()}}>Refresh Array</Button>
                    <Button variant="success">Sort</Button>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Button variant="info">test</Button>
                            <Nav.Link href="#pricing">test</Nav.Link>
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
            </div>
        );
    }
}