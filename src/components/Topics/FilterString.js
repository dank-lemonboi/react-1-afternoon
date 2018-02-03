import React, {Component} from 'react';

class FilterString extends Component {
    constructor(props){
        super(props);

        this.state = {
            unfilteredArray: ['apple', 'banana', 'cherry', 'dank buds', 'fish', 'angel', 'orangatang', 'applet', 'app'],
            userInput: '',
            filteredArray: []
        } 
    }

    click(props) {
        let arr = this.state.unfilteredArray;
        let newArr = [];

        for(let i = 0; i < arr.length; i++){
            if(arr[i].includes(props)){
                newArr.push(arr[i]);
            }
        }
        
        
        this.setState( {filteredArray: newArr , userInput: '' })
    }



    render() {
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Names: {JSON.stringify(this.state.unfilteredArray)}</span>
                <input className="inputLine" onChange={ (e) => this.setState( { userInput: e.target.value } ) } />
                <button className="confirmationButton" onClick={ () => this.click(this.state.userInput) }>Filter</button>
                <span className="resultsBox filterStringRB">Filtered Names: {JSON.stringify(this.state.filteredArray)}</span>

            </div>
        );
    }
}

export default FilterString;