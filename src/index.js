import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items
    }
  }

  updateName(id, name) {
    this.setState({
      items: this.state.items.map( (item) => {
        if(id === item.id) {
          return {
            ...item,
            name
          }
        }
        return item;
      })
    });
  }

  updateWeight(id, weight) {
    this.setState({
      items: this.state.items.map( (item) => {
        if(id === item.id) {
          return {
            ...item,
            weight
          }
        }
        return item;
      })
    });
  }

  addItem(text) {
    let newItem = { id: guid(), name: 'Untitled', weight: 0 }
    this.setState({ items: this.state.items.concat(newItem)})
  }

  render() {
    return (
      <div>
        <h1 class="f1">Exercises</h1>
        <ul>
        {
          this.state.items.map((item) =>
            <Item id={item.id}
              name={item.name}
              weight={item.weight}
              updateName={this.updateName.bind(this)}
              updateWeight={this.updateWeight.bind(this)} />) }
        </ul>
        <a href="#" onClick={() => this.addItem('Testing')}>Add</a>
        <DebugArea data={JSON.stringify(this.state.items, null, 2)}/>
      </div>
    )
  }
}

class Item extends React.Component {
  render() {
    return (
      <li>
        <input class="w-60" type="text"
          value={ this.props.name }
          onChange={(event) => this.props.updateName(this.props.id, event.target.value)}/>
        <input class="w-20" type="text"
          value={ this.props.weight }
          onChange={(event) => this.props.updateWeight(this.props.id, event.target.value)}/>
      </li>
    )
  }
}

class DebugArea extends React.Component {
  render() {
    return (
      <div class="bg-near-white w-100 f6 mt4 pa2"><pre class="ma0 overflow-x-scroll">{ this.props.data }</pre></div>
    )
  }
}

const ITEMS = [
  { id: guid(), name: "Bench Press", weight: 42.5 },
  { id: guid(), name: "Chest Press", weight: 30 }
]

ReactDOM.render(
  <List items={ITEMS} />,
  document.getElementById('root')
);
