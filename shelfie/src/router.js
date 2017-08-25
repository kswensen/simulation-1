import React from 'react';
import App from './App';
import { Route, Switch } from 'react-router-dom';

import ShelfA from './components/shelfA/shelfA';
import BinA1 from './components/shelfA/bins/bin1';
import BinA2 from './components/shelfA/bins/bin2';
import BinA3 from './components/shelfA/bins/bin3';
import BinA4 from './components/shelfA/bins/bin4';
import BinA5 from './components/shelfA/bins/bin5';

import ShelfB from './components/shelfB/shelfB';
import BinB1 from './components/shelfB/bins/bin1';
import BinB2 from './components/shelfB/bins/bin2';
import BinB3 from './components/shelfB/bins/bin3';
import BinB4 from './components/shelfB/bins/bin4';
import BinB5 from './components/shelfB/bins/bin5';

import ShelfC from './components/shelfC/shelfC';
import BinC1 from './components/shelfC/bins/bin1';
import BinC2 from './components/shelfC/bins/bin2';
import BinC3 from './components/shelfC/bins/bin3';
import BinC4 from './components/shelfC/bins/bin4';
import BinC5 from './components/shelfC/bins/bin5';

import ShelfD from './components/shelfD/shelfD';
import BinD1 from './components/shelfD/bins/bin1';
import BinD2 from './components/shelfD/bins/bin2';
import BinD3 from './components/shelfD/bins/bin3';
import BinD4 from './components/shelfD/bins/bin4';
import BinD5 from './components/shelfD/bins/bin5';

export default (
    <Switch>
        <Route exact path='/' component={ App } />
        <Route path='/shelfA' component={ ShelfA } />
        <Route path='/A/binA1' component={ BinA1 } />
        <Route path='/A/bin2' component={ BinA2 } />
        <Route path='/A/bin3' component={ BinA3 } />
        <Route path='/A/bin4' component={ BinA4 } />
        <Route path='/A/bin5' component={ BinA5 } />

        <Route path='/shelfB' component={ ShelfB } />
        <Route path='/B/bin1' component={ BinB1 } />
        <Route path='/B/bin2' component={ BinB2 } />
        <Route path='/B/bin3' component={ BinB3 } />
        <Route path='/B/bin4' component={ BinB4 } />
        <Route path='/B/bin5' component={ BinB5 } />

        <Route path='/shelfC' component={ ShelfC } />
        <Route path='/C/bin1' component={ BinC1 } />
        <Route path='/C/bin2' component={ BinC2 } />
        <Route path='/C/bin3' component={ BinC3 } />
        <Route path='/C/bin4' component={ BinC4 } />
        <Route path='/C/bin5' component={ BinC5 } />

        <Route path='/shelfD' component={ ShelfD } />
        <Route path='/D/bin1' component={ BinD1 } />
        <Route path='/D/bin2' component={ BinD2 } />
        <Route path='/D/bin3' component={ BinD3 } />
        <Route path='/D/bin4' component={ BinD4 } />
        <Route path='/D/bin5' component={ BinD5 } />
    </Switch>
)