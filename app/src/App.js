import React from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Results from './components/Results';
import Footer from './components/Footer';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      headers: {},
      results: [],
    }
  }

  handleForm = (count, results, headers) => {
    this.setState({ count, results, headers });
  }
  
  render() {
    return (
      <div className='App'>
        <Header />
        <Form prompt="Search" handler={this.handleForm}/>
        <Results count={this.state.count} results={this.state.results} headers={this.state.headers}/>
        <Footer />
      </div>
    );
  }
}



export default App;