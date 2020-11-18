import React from 'react';
import Header from './components/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';
import Gallery from './pages/Gallery';
import Footer from './components/Footer';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <main className='main'>
                    <Switch>
                        <Route exact path={'/'} component={Home}/>
                        <Route path={'/create-an-art'} component={Create}/>
                        <Route path={'/gallery'} component={Gallery}/>
                    </Switch>
                </main>
                <Footer/>
            </BrowserRouter>
        );
    }
}

export default App;
