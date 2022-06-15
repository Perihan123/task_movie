import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Giris from './pages/Giris'
import Detail from './pages/Detail';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={Giris} />
        <Route path="/home" component={Home} />
        <Route path="/detail" component={Detail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
