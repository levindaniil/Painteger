import React from 'react';
import Header from './components/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';
import Gallery from './pages/Gallery';
import Error from "./pages/Error";
import Footer from './components/Footer';
import Modal from "./components/Modal";

class App extends React.Component {
    state = {
        showSignup: false,
        showLogin: false
    };

    showSignup = e => {
        this.setState({
            showSignup: !this.state.showSignup
        });
    };

    showLogin = e => {
        this.setState({
            showLogin: !this.state.showLogin
        });
    };

    onCloseSignup = e => {
        this.props.showSignup = false;
    };

    onCloseLogin = e => {
        this.props.showLogin = false;
    };

    render() {
        return (
            <BrowserRouter>
                <Header showSignup={this.showSignup} showLogin={this.showLogin}/>
                <main className='main'>
                    <Switch>
                        <Route exact path={'/'} component={Home}/>
                        <Route path={'/create-an-art'} component={Create}/>
                        <Route path={'/gallery'} component={Gallery}/>
                        <Route>{Error}</Route>
                    </Switch>
                </main>
                <Footer/>
                <Modal showSignup={this.state.showSignup} showLogin={this.state.showLogin}
                       onCloseSignup={this.showSignup} onCloseLogin={this.showLogin}/>
            </BrowserRouter>
        );
    }
}

export default App;
