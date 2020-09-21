import React from 'react';
import JSONPretty from 'react-json-pretty';

function Results(props) {
  return (
    <div>
      <h3>Count: {props.count}</h3>
      <p>Headers: <JSONPretty data={props.headers} /></p>
      <p>Results: <JSONPretty data={props.results}></JSONPretty></p>
    </div>
  );
}

export default Results;