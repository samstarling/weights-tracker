import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Exercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'foo',
      weight: 50.0,
      reps: 8,
      sets: 3
    };
  }

  render() {
    return (
      <div class="cl">
        <div class="fl w-50"><input value={this.state.name}/></div>
        <div class="fl w-20">{this.state.weight}kg</div>
        <div class="fl w-30">{this.state.reps} &times; {this.state.sets}</div>
      </div>
    )
  }
}

class Grouping extends React.Component {
  render() {
    return (
      <div class="bb pb4 mb4">
        <h2 class="f3 mb2">{this.props.name}</h2>
        <Exercise/>
        <Exercise/>
        <Exercise/>
        <button class="mt2" type="button">Add exercise</button>
      </div>
    )
  }
}

class List extends React.Component {
  render() {
    return (
      <div>
        <h1 class="f1">Exercises</h1>
        <Grouping name="Upper body"/>
        <Grouping name="Lower body"/>
        <button type="button">Add grouping</button>
      </div>
    )
  }
}

// ========================================

ReactDOM.render(
  <List />,
  document.getElementById('root')
);
