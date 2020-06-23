import React from 'react';
import './App.css';
import routes from './routes';
import Nav from './components/Nav';
import Header from './components/Header';
import AuthHeader  from './components/AuthHeader';
import {connect} from 'react-redux';

function App(props) {
  return (
    <div className="App">
      {props.isLoggedIn ? <Header/> : <AuthHeader/>}
      {routes}
      <Nav />
    </div>
  );
}
const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps)(App);
