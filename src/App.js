import React, {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import {Column, Table} from 'react-virtualized';
import 'react-virtualized/styles.css'; // only needs to be imported once

function App() {

  const list = [
    {name: 'Lucas', description: 'Software engineer', Power: '9000', class: 'super sayajin'},
    {name: 'Lucas2', description: 'Software engineer2', Power: '9000', class: 'super sayajin'},
    {name: 'Lucas3', description: 'Software engineer3', Power: '9000', class: 'super sayajin'},
    {name: 'qqr', description: 'Software qqr', Power: 'qqr', class: 'super qqr'},
    // And so on...
  ];

  function rowRenderer({
    key, // Unique key within array of rows
    index, // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    style, // Style object to be applied to row (to position it)
  }) {
    return (
      <div key={key} style={style}>
        {list[index]}
      </div>
    );
  }

  return (
    <div className="App">
      <Table
          width={1000}
          height={1000}
          headerHeight={20}
          rowHeight={30}
          rowCount={list.length}
          rowGetter={({index}) => list[index]}>
          <Column label="Name" dataKey="name" width={200} />
          <Column label="Description" width={200} dataKey="description" />
          <Column label="Power" dataKey="name" width={200} />
          <Column label="class" dataKey="class" width={200} />
        </Table>,
      </div>
  );
}

export default App;
