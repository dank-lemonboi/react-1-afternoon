import React, {Component} from 'react';

class EvenAndOdd extends Component {
    constructor(props){
        super(props);
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }
    }

    click() {
        if(this.state.userInput){
       let arr = this.state.userInput.split(',');
       arr = arr.map(val => Number(val));
       let evens = arr.filter((val) => val % 2 === 0);
       let odds = arr.filter((val) => val % 2 > 0);
       this.setState({
           evenArray: evens,
           oddArray: odds,
           userInput: ""
       }); 
      
      }

    }

    render() {
        return(
            <div className="puzzleBox evenAndOddPB">
            <input className="inputLine"  onChange={((e) => this.setState({ userInput: e.target.value }))}/>
            <button className="confirmationButton" onClick={ () => this.click() }>Split</button>
            <span className="resultsBox">Evens: { JSON.stringify(this.state.evenArray) } </span>
            <span className="resultsBox">Odds {JSON.stringify(this.state.oddArray) } </span>
            <h4>Evens and Odds</h4>
            
            </div>
        );
    }
}

export default EvenAndOdd;