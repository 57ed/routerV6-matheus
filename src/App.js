import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/layout/Footer';
import Navbar from './components/Navbar';
import Contato from './components/pages/Contato';
import Empresa from './components/pages/Empresa';
import Home from './components/pages/Home';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/empresa'>
              <Empresa />
            </Route>
            <Route path='/contato'>
              <Contato />
            </Route>
          </Switch>
        </div>
        <Footer />
      </>
    </Router>
  );
}

export default App;
