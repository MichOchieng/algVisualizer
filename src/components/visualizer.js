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
            arraySize: 100,
            radioValue: 1,
            setRadioValue: 1
        }
        this.generateArray = this.generateArray.bind(this);
        this.runMergeSort = this.runMergeSort.bind(this);
    }

    componentDidMount(){
        // Will generate the initial array once the page loads
        this.generateArray();
    }

    runMergeSort(){
        var arr = this.state.array;
        arr = mergeSort(arr);
        this.state.array = arr; // 'Prevents' state array from being errased after sort
        this.setState({arr});
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
                    <Button variant="success" onClick={() => {this.runMergeSort()}}><FaPlayCircle /></Button>
                    <select class="algMenu" id ="algMenu">
                        {/* <option
                            value='0'
                        >Select Algorithm</option> */}
                        <option
                            value='1'
                        >Merge sort</option>
                        <option 
                            value='2'
                        >Quick sort</option>
                        <option 
                            value='3'
                        >Heap sort</option>
                        <option 
                            value='4'
                        >Bubble sort</option>
                    </select>
                </Container>
            </Navbar>
            
            </div>
        );
    }
}