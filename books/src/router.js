import React from 'react';
import {
    Switch,
    Route,
    BrowserRouter
} from 'react-router-dom';

import Home from './components/home';
import BookPage from './components/bookPage';

const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/book/:bookId" component={BookPage} />
            </Switch>
        </BrowserRouter>
    )
};

export default Routes;