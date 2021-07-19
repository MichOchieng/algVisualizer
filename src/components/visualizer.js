import React, {Component} from 'react';
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
        const array = this.state.array;
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
            // Render array values to divs
            mappingArray.map( (value,idx) => (
                <div class="sortingBar" key={idx}>
                    {value}
                </div>
                )
            )
        );
    }
}