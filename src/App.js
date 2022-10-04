
import {Suspense} from 'react';
import {BrowserRouter,Route, Redirect,Switch} from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.min.css';
import Search from './components/Search'
import AddItems from './pages/AddItems';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <Suspense fallback={<div>加载中...</div>}>
          <Switch>
            <Route path='/index' component={Search}/>
            <Route path='/addItems' component={AddItems}/>
            <Redirect to='/index'/>
          </Switch>
      </Suspense>
      </BrowserRouter>
        
      </header>
    </div>
  );
}

export default App;
