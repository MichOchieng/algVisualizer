import React, {Component} from 'react';
import {Navbar,Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {FaPlayCircle,FaSync} from 'react-icons/fa';
import router from '../scripts/router';
import mergeSort from '../scripts/mergeSort';
import '../styles/visualizer.css';

export default class Visualizer extends Component{
    constructor(props){
        super(props);
        this.state = {
            array: [], // Will be the array used for sorting algorithms
            arraySize: 100
        }
        this.generateArray = this.generateArray.bind(this);
        this.runAnimation  = this.runAnimation.bind(this);
    }

    componentDidMount(){
        // Will generate the initial array once the page loads
        this.generateArray();
    }

    runAnimation(){
        const events = mergeSort(this.state.array);
        for (let index = 0; index < events.length; index++) {
            // Get bar divs
            const bars = document.getElementsByClassName("sortingBar");
            // Check if there will be a higlight
            const highlight = index % 3 !== 2; // Only highlights inital two values of every group of three (third value overwrites)
            if (highlight) {
                // Get the bars that need to be highlighted
                // Select the bars colour based on index/event in array
                const [bar1,bar2] = events[index];
                const bar1CSS = bars[bar1].style;
                const bar2CSS = bars[bar2].style;
                const colour = index % 3 === 0 ? 'green' : '#F74F3D';
                setTimeout(() => {
                    // Allows user to actually see when the bar colours change
                    bar1CSS.backgroundColor = colour;
                    bar2CSS.backgroundColor = colour;
                }, index * 10);
            } else {
                // This is for 'swapping' bar values to correct position in the sorted array
                setTimeout(() => {
                    const [bar1,barHeight] = events[index];
                    const bar1CSS = bars[bar1].style;
                    bar1CSS.height = `${barHeight}px`;
                }, index * 10);
            }
        }

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
            {mappingArray.map( (value,index) => (
                <div 
                    class="sortingBar" 
                    id={`bar${index}`} // Used for changing DOM properties later on
                    key={index}
                    style={{height: `${value/11}vh`}}
                >
                </div>
                )
            )}
            {/* Controls for sorting and array refresh */}
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="bottom">
                <Container>
                    <Button variant="info" onClick={() => {this.generateArray()}}><FaSync /></Button>
                    <Button variant="success" onClick={() => {this.runAnimation()}}><FaPlayCircle /></Button>
                    <select class="algMenu" id ="algMenu">
                        {/* <option
                            value='0'
                        >Select Algorithm</option> */}
                        <option
                            value='1'
                        >Merge sort</option>
                        {/* <option 
                            value='2'
                        >Quick sort</option>
                        <option 
                            value='3'
                        >Heap sort</option>
                        <option 
                            value='4'
                        >Bubble sort</option> */}
                    </select>
                </Container>
            </Navbar>
            
            </div>
        );
    }
}