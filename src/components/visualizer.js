import React, {Component} from 'react';
import {Navbar,Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {FaPlayCircle,FaSync} from 'react-icons/fa';
import {mergeSort} from '../scripts/mergeSort';
import '../styles/visualizer.css';

const SORT_SPEED = 5;
// Adjusts how many bars are rendered depending on the device width
const ARRAY_SIZE = ((window.screen.width > 540) ? 100 : ((window.screen.width-200)/4));

const HIGHLIGHT_COLOUR = "#7BEE7B";
const DEFAULT_COLOUR   = "#F74F3D";

export default class Visualizer extends Component{   
    constructor(props){
        super(props);
        this.state = {
            array: [] // Will be the array used for sorting algorithms
        }
    }

    componentDidMount(){
        // Will generate the initial array once the page loads
        this.generateArray();
    }
 
    runAnimation(){
        const events = mergeSort(this.state.array);
        console.log(window.screen.width);
        for (let index = 0; index < events.length; index++) {
            // Get bar divs
            const bars      = document.getElementsByClassName('sortingBar');
            // Check if there will be a higlight
            const highlight = index % 3 !== 2; // Only highlights inital two values of every group of three (third value overwrites)
            if (highlight) {
                // Get the bars that need to be highlighted
                // Select the bars colour based on index/event in array
                const [bar1,bar2] = events[index];
                const bar1CSS     = bars[bar1].style;
                const bar2CSS     = bars[bar2].style;
                const colour      = index % 3 === 0 ? HIGHLIGHT_COLOUR : DEFAULT_COLOUR;
                setTimeout(() => {
                    // Allows user to actually see when the bar colours change
                    bar1CSS.backgroundColor = colour;
                    bar2CSS.backgroundColor = colour;
                }, index * SORT_SPEED);
            } else {
                // This is for 'swapping' bar values to correct position in the sorted array
                setTimeout(() => {
                    const [bar1,barHeight] = events[index];
                    const bar1CSS          = bars[bar1].style;
                    bar1CSS.height         = `${barHeight/11}vh`; //Allows for responsive heights
                }, index * SORT_SPEED);
            }
        }
    }

    generateArray(){
        const array = [];
        for (let index = 0; index < ARRAY_SIZE; index++) {
            // Will push a random value from 3 - 1000 into array
            // https://stackoverflow.com/a/7228322
            array.push(Math.floor(Math.random() * (1000 - 50 + 1) + 50));
        }
        this.setState({array}); 
    }

    render(){
        const {array} = this.state;
        return(
            <div class="sortingContainer">
            {/* Render array values to divs */}
            {array.map( (value,index) => (
                <div 
                    class="sortingBar" 
                    key={index}
                    style={{height: `${value/11}vh`}} //Allows for responsive heights
                >
                </div>
                )
            )}
            {/* Controls for sorting and array refresh */}
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='bottom'>
                <Container>
                    <Button title="Refresh Array" variant="info" onClick={() => {this.generateArray()}}><FaSync /></Button>
                    <Button title="Run algorithm" variant="success" onClick={() => {this.runAnimation()}}><FaPlayCircle /></Button>
                    <select class="algMenu" id ="algMenu">
                        <option
                            value='1'
                        >Merge sort</option>
                        <option 
                            value='2'
                            disabled
                            title="Coming soon!"
                        >Quick sort</option>
                        <option 
                            value='3'
                            disabled
                            title="Coming soon!"
                        >Heap sort</option>
                        <option 
                            value='4'
                            disabled
                            title="Coming soon!"
                        >Bubble sort</option>
                    </select>
                </Container>
            </Navbar>
            </div>
        );
    }
}