import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutUsPage from './about/AboutPage';
import AuthorPage from './author/AuthorPage';
import CoursesPage from './course/CoursesPage';
import Header from './shared/Header';
import Footer from './shared/Footer';
import PageNotFound from './PageNotFound';
import EditCoursePage from './course/EditCoursePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className='container-fluid'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={AboutUsPage} />
        <Route path='/courses' component={CoursesPage} />
        <Route path='/course/:slug' component={EditCoursePage} />
        <Route path='/course' component={EditCoursePage} />
        <Route path='/author' component={AuthorPage} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
