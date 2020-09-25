import React, { Component } from 'react';
import List from './components/list/List'
import ListItem from './components/list/ListItem'

class App extends Component {
  state = {
      listItems: [
        { id: 1, name: "Apple", price: 3, quantity: 5},
        { id: 2, name: "Orange", price: 4, quantity: 3},
        { id: 3, name: "Bannana", price: 20, quantity: 2},
        { id: 4, name: "Blueberry", price: 1, quantity: 30},
      ]
  };

  renderListItems = () => {
    const { listItems } = this.state;
    return listItems.map( fruit => {
      return (
        <List key= {fruit.id} {...fruit}/>
      )
    })
  };
  render() {
    return (
      <div>
        { this.renderListItems()}
      </div>
    );
  }
}

export default App;