import React, { Component } from 'react';

class FilterObject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unfilteredArray: [
                {
                  name: 'Tank Sinatra',
                  eyeColor: 'Blue',
                  age: 36,
                  job: "unemployed"
                },
                {
                  name: 'Stan',
                  age: 24,
                  hairColor: 'brown',
                },
                {
                  name: 'therese Costanza',
                  job: 'Hacker',
                  children: true
                }
              ],
            userInput: "",
            filteredArray: []

        }
    }

    handleChange(val) {
        this.setState( { userInput: val } );
    }

    arrayFilter(prop) {
        let arr = this.state.unfilteredArray;
        let newArr = [];

        for(let i = 0; i < arr.length; i++){
            if(arr[i].hasOwnProperty(prop) ) {
                newArr.push(arr[i]);
                console.log();
            }
            this.setState( { filteredArray: newArr, userInput: "" } )
        }

    
    }

  


    render() {
        return (
         <div className="puzzleBox evenAndOddPB">   
                <h4>Filter Object</h4>
                <span className="puzzleText"> Original: {JSON.stringify(this.state.unfilteredArray, null, 10)}</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
                <button className="confirmationButton" onClick={ () => this.arrayFilter(this.state.userInput) }>Filter</button>
                <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
         </div>
        );
      
    }
}

export default FilterObject;