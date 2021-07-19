import React, {Component} from 'react';

export default class Visualizer extends Component{
    constructor(props){
        super(props);
        this.state = {
            array: [] // Will be the array used for sorting algorithms
        }
        this.generateArray = this.generateArray.bind(this);
    }

    componentDidMount(){
        // Will generate the initial array once the page loads
        this.generateArray(this.state.array);
    }

    generateArray(arr){
        console.log('Creating array');
    }

    render(){
        return(
            <h1>Test</h1>
        )
    }
}