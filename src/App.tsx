import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MainPage } from './Pages/MainPage'
import { RefillPage } from './Pages/RefillPage'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route  path="/" component={MainPage}  exact />
            <Route path="/refill-page/:operator" component={RefillPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
