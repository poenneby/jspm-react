import 'whatwg-fetch';

import React from 'react';

import Repo from './repo';

import RepositoryList from './repository-list';

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h2>Open sauce</h2>
        <RepositoryList />
      </div>
    );
  }
  
}

React.render(<HelloWorld/>, document.body);

