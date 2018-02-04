import React, {Component} from 'react';

class Sum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number1: 0,
            number2: 0,
            sum: undefined
        }
    }

    sumOfNumbers(){
        let total = Number(this.state.number1) + Number(this.state.number2)
        this.setState( {sum: total} )
    }



    render() {
        return(
            <div className="puzzleBox sumPB">
             <h4>Sum</h4>
             <input className="inputLine" onChange={(e) => this.setState( { number1: e.target.value} )}/>
             <input className="inputLine" onChange={(e) => this.setState( { number2: e.target.value} )} />
             <button className="confirmationButton" onClick={() => this.sumOfNumbers()}>Add</button>
             <span className="resultsBox">Total : {JSON.stringify(this.state.sum)}</span>         
            </div>
        );
    }
}

export default Sum;