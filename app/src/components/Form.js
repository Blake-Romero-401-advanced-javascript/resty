import React, { useState, useEffect } from 'react';

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

    let headers = await raw.headers.get('content-type');
    // let headers = {};
    // raw.headers.forEach((val, key) => headers[key]=val);

    let data = await raw.json();
    let count = data.count;
    let results = data.results;

    this.props.handler(count, results, headers);
    
  }

  handleUrl = event => {
    let url = event.target.value;
    this.setState({url});
  }

  // handleClick = event => {
  //   event.preventDefault();
  //   let url = this.state.url;
  //   this.setState({ url });
  // }

  handleButton = event => {
    event.preventDefault();
    let method = event.target.value;
    this.setState({method});
  }


  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h3>URL: <input type="text" placeholder="http://api.url.here" onChange={this.handleUrl}/><button>GO!</button></h3>
          <div className="button-group">
          <input type="button" id="get" name="method" value="GET" checked="checked" onClick={this.handleButton} />
          <input type="button" id="delete" name="method" value="DELETE" onClick={this.handleButton} />
          <input type="button" id="put" name="method" value="PUT" onClick={this.handleButton} />
          <input type="button" id="post" name="method" value="POST" onClick={this.handleButton} />
          </div>
        </form>
      </>
      // <form onSubmit={this.handleSubmit}>
      //   <h3>URL: <input type="text" placeholder="http://api.url.here" onChange={this.handleUrl} />
      //   <button>{this.props.prompt}</button>
      //   </h3>
      //   <input type="text" onChange={this.handleSubmit} />
      //   <option type="radio">Get</option>
      //   <div role="group">
      //     <input type="button" value="GET" checked="checked" onClick={this.handleButton} />
      //     <input type="button" value="DELETE" onClick={this.handleButton} />
      //     <input type="button" value="PUT" onClick={this.handleButton} />
      //     <input type="button" value="POST" onClick={this.handleButton} />
      //   </div>
      // {/* ============================================================ */}
      //   {/* <button onClick={this.handleClick}>GET</button>
      //   <button onClick={this.handleClick}>DELETE</button>
      //   <button onClick={this.handleClick}>PUT</button>
      //   <button onClick={this.handleClick}>POST</button> */}


    //   </form>
    );
  }
}

export default Form;