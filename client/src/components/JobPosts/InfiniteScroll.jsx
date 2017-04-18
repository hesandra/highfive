import React, { Component } from 'react';
import Infinite from 'react-infinite';

import CardList from './CardList';

class InfiniteScroll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: this.buildElements(0, 10),
      isInfiniteLoading: false
    };
    console.log(props, 'infiniteScroll');
    this.buildElements = this.buildElements.bind(this);
    this.handleInfiniteLoad = this.handleInfiniteLoad.bind(this);
  }
  handleInfiniteLoad() {
    this.setState({
      isInfiniteLoading: true
    });
    setTimeout(() => {
      var elemLength = this.state.elements.length,
        newElements = this.buildElements(elemLength, elemLength + 10);
      this.setState({
        isInfiniteLoading: false,
        elements: this.state.elements.concat(newElements)
      });
    }, 2500);
    console.log('go FETCH');
  }
  buildElements(start, end) {
    var elements = [];
    for (var i = start; i < end; i++) {
      elements.push(<li key={i}>{i}</li>);
    }
    return elements;
  }
  infiniteLoading() {
    return (<div>Loading...</div>);
  }
  render() {
    return (
    );
  }
}

export default InfiniteScroll;