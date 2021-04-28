// styling 
import './App.css';

// Router
import { Switch, Route } from '../node_modules/react-router-dom';

// Pages
import Contact from './pages/contactPage/Contact';
import Home from './pages/homePage/Home';
import JoinUs from './pages/joinusPage/JoinUs';
import Services from './pages/servicePage/Services';
import ErrorPage from './pages/errorPage/ErrorPage';

// components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import ProductData from './components/component/ProductData';
import ProductView from "./pages/ProductView";

function App() {
  return (
    <div className="App">
      <Header>
          <main className='main'>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/contact' component={Contact}/>
              <Route exact path='/join-us' component={JoinUs}/>
              <Route exact path='/services'>
                <Services productsData={ProductData}/>
              </Route>
              <Route path='/services/:productId'>
                <ProductView productsData={ProductData}/>
              </Route>
              <Route component={ErrorPage}/>
            </Switch>
          </main>
        </Header>
      <Footer />
    </div>
  );
}

export default App;
