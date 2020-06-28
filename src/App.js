import React from 'react';
import './App.css';
import routes from './routes';
import Nav from './components/Nav';
import Header from './components/Header';
import AuthHeader  from './components/AuthHeader';
import Footer from './components/Footer';
import {connect} from 'react-redux';

function App(props) {
  console.log(props)
  return (
    <div className="App">
      {props.authReducer.isLoggedIn ? <Header/> : <AuthHeader/>}
      {routes}
      {/* <Nav /> */}
      <Footer/>
    </div>
  );
}
const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps)(App);
