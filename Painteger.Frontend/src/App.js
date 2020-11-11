import React from 'react';
import Header from "./components/Header";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <div className="container">
                    <Switch>
                        <Route path={'/'} exact component={Home}/>
                        <Route path={'/create-an-art'} component={Create}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
