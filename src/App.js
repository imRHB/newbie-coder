import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Instructors from './components/Instructors/Instructors';
import NotFound from './components/NotFound/NotFound';
import CourseDetails from './components/CourseDetails/CourseDetails';
import Courses from './components/Courses/Courses';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Nav></Nav>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/courses">
            <Courses></Courses>
          </Route>
          <Route exact path="/courses/:courseId">
            <CourseDetails></CourseDetails>
          </Route>
          <Route exact path="/instructors">
            <Instructors></Instructors>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
