import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactList from './components/ContactList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import NotFound from './components/NotFound';
import AddContact from './components/AddContact';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            component={() =>
              localStorage.getItem('token') ? (
                <ContactList />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/aboutUs" component={AboutUs} />
          <Route exact path="/contactUS" component={ContactUs} />
          <Route
            exact
            path="/addcontact"
            component={() =>
              localStorage.getItem('token') ? (
                <AddContact />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
