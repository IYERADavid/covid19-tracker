import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home'
import Header from './components/header'
import Footer from './components/footer'
import './App.css';

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Route path='/' component={Home} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
