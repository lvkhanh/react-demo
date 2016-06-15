import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/hello.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    // Manually bind this method to the component instance...
    this.state = {
      input: 'Change your text'
    };
    this.updateText = this.updateText.bind(this);
  }

  updateText() {
    this.setState({
      input: this.refs.demo.value // get value of input ref demo
    });
  }

  render() {
    return (
      <div>
        <Hello name = {this.state.input} />
        <input id='demo' ref='demo' type='text'></input>
        <button onClick={this.updateText} >Change</button>
      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('app'));
