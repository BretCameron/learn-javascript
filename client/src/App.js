import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import './App.scss';

import store from './store';
import Header from './components/Header';
import Footer from './components/Footer';
import QuestionPage from './pages/QuestionPage';
import CoursesPage from './pages/CoursesPage';
import CourseCreatePage from './pages/CourseCreatePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';

class App extends React.Component {

  render() {
    return (
      <>
        <Provider store={store}>
          <Router>
            <div className="layout-grid">
              <div className="full-width">
                <Link to="/">
                  <Header />
                </Link>
              </div>

              <Switch>
                <Route path="/" exact component={QuestionPage} />
                <Route path="/courses" exact component={CoursesPage} />
                <Route path="/courses/create" exact component={CourseCreatePage} />
                <Route path="/sign-up" component={SignUpPage} />
                <Route path="/login" component={LoginPage} />
              </Switch>

              <div className="full-width">
                <Footer />
              </div>

            </div>
          </Router>
        </Provider>
      </>
    );
  }
}

export default App;
