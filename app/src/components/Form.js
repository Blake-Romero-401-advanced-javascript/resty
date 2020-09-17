import React from 'react';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: '',
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    let raw = await fetch(this.state.url);

    let headers = {};
    raw.headers.forEach((val, key) => headers[key] = val);

    let data = await raw.json();
    let count = data.count;
    let results = data.results;

    this.props.handler(count, results, headers);
    
  }

  handleUrl = event => {
    let url = event.target.value;
    this.setState({url});
  }

  handleClick = event => {
    event.preventDefault();
    let url = this.state.url;
    this.setState({ url });
  }

  handleButton = event => {
    event.preventDefault();
    let method = event.target.value;
    this.setState({method});
  }


  render() {
    return (
      <form>
        <h3>{this.state.words}</h3>
        <input type="text" onChange={this.handleSubmit} />
        <option type="radio">Get</option>
        <div role="group">
          {/* <label>GET</label> */}
          <input type="button" value="GET" checked="checked" onClick={this.handleButton} />
          {/* <label>DELETE</label> */}
          <input type="button" value="DELETE" onClick={this.handleButton} />
          {/* <label>PUT</label> */}
          <input type="button" value="PUT" onClick={this.handleButton} />
          {/* <label>POST</label> */}
          <input type="button" value="POST" onClick={this.handleButton} />
        </div>
        {/* <button onClick={this.handleClick}>GET</button>
        <button onClick={this.handleClick}>DELETE</button>
        <button onClick={this.handleClick}>PUT</button>
        <button onClick={this.handleClick}>POST</button> */}


      </form>
    );
  }
}

export default Form;