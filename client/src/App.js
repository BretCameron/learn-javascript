import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import QuestionPage from './pages/QuestionPage';
import CoursesPage from './pages/CoursesPage';
import SignUpPage from './pages/SignUpPage';

class App extends React.Component {

  render() {
    return (
      <>
        <Router>
          <div className="layout-grid">
            <div className="full-width">
              <Link to="/">
                <Header />
              </Link>
            </div>

            <Switch>
              <Route path="/" exact component={QuestionPage} />
              <Route path="/courses" component={CoursesPage} />
              <Route path="/sign-up" component={SignUpPage} />
            </Switch>

            <div className="full-width">
              <Footer />
            </div>

          </div>
        </Router>
      </>
    );
  }
}

export default App;
