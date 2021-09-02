import './App.css';
// import Navbar from './components/Navbar'
// import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages';
import SigninPage from './components/pages/signin';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
