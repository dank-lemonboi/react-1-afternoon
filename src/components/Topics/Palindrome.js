import React, {Component} from 'react';

class Palindrome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    click(prop) {
        let ignore = /[\W]/g;
       let str = prop.toLowerCase().replace(ignore, '');
       let revStr = prop.toLowerCase().replace(ignore, '');

       revStr = revStr.split('').reverse().join('');

       if(str === revStr) {
           this.setState({palindrome: true})
       } else {
           this.setState({palindrome: false})
       }
    }
    

     render() {
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={ (e) => this.setState( {userInput: e.target.value } ) } />
                <button className="confirmationButton" onClick={ () => this.click(this.state.userInput) }>Check for Palindrome</button>
                <span className="resultsBox"> Palindrome: {JSON.stringify(this.state.palindrome)} </span>
            </div>
        );
    }
}

export default Palindrome;