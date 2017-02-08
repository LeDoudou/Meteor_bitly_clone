import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header'
import LinkCreate from './components/link_create'
import { Link } from '../imports/collections/links';

const App = () => {
  return(
    <div>
        <Header />
        <LinkCreate />
    </div>
  ); 
};


Meteor.startup(() => {
  // code to run on server at startup
  ReactDOM.render(<App />, document.querySelector('.container'));
});
