import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/Logon';
import Profile from './pages/Profile';
import NewProduct from './pages/NewProduct';
import EditStock from './pages/EditStock';
import Report from './pages/Report';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/profile"  component={Profile}/>
                <Route path="/product/new"  component={NewProduct}/>
                <Route path="/product/edit"  component={EditStock}/>
                <Route path="/report"  component={Report}/>
            </Switch>
        </BrowserRouter>
    );
}