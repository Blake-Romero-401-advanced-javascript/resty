import React from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <Form />
      {/* <Results /> */}
    </div>
  )
}

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      words:'Enter URL',
    }
  }

  handleWord = event => {
    let words = event.target.value;
    this.setState({words});
  }

  handleClick = event => {
    event.preventDefault();
    let words = this.state.words
      .split('')
      .reverse()
      .join('');

    this.setState({ words });
    
  }

  render() {
    return (
      <form>
        <h3>{this.state.words}</h3>
        <input type="text" onChange={this.handleWord} />
        <option type="radio">Get</option>
        <div role="group">
          {/* <label>GET</label> */}
          <input type="button" value="GET" checked="checked" onClick={this.handleClick} />
          {/* <label>DELETE</label> */}
          <input type="button" value="DELETE" onClick={this.handleClick} />
          {/* <label>PUT</label> */}
          <input type="button" value="PUT" onClick={this.handleClick} />
          {/* <label>POST</label> */}
          <input type="button" value="POST" onClick={this.handleClick} />
        </div>
        {/* <button onClick={this.handleClick}>GET</button>
        <button onClick={this.handleClick}>DELETE</button>
        <button onClick={this.handleClick}>PUT</button>
        <button onClick={this.handleClick}>POST</button> */}


      </form>
    );
  }
}



export default App;







// import React from 'react';

// import './app.scss';

// const Header = () => {
//   return (
//     <header>
//       <h1>New header</h1>
//     </header>
//   );
// };

// const Footer = () => <footer>&copy; 2020 Blake Romero</footer>;

// class Main extends React.Component {
//   constructor(props) {
//     super(props);
//     let params = new URL(document.location).searchParams;
//     this.state = {
//       words: params.words || 'nothing to see here',
//     };
//   }

//   handleWord = e => {
//     let words = e.target.value;
//     this.setState({ words });
//   };

//   handleClick = e => {
//     e.preventDefault();
//     let words = this.state.words
//       .split('')
//       .reverse()
//       .join('');
//     this.setState({ words });
//   };

//   render() {
//     return (
//       <div>
//         <h3>{this.state.words}</h3>
//         <input onChange={this.handleWord} />
//         <button onClick={this.handleClick}>Click Me</button>
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         <Header />
//         <Main />
//         <Footer />
//       </React.Fragment>
//     );
//   }
// }

// export default App;