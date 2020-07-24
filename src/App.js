import React, { Component, Suspense, lazy } from 'react';
import {Link, Route} from 'react-router-dom';
import Users from './containers/Users';

const asycPizza = React.lazy(() => import('./containers/Pizza'));

class App extends Component {
    render() {
        return (
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                <div>
                    <Link to='/'>Users</Link>
                    <Link to='/pizza'>Pizza</Link>
                </div>
                <div>
                    <Route path='/' exact component={Users}/>
                    <Route path='/pizza' exact component={asyncPizza}/>

                </div>
                </Suspense>
            </div>
        )
    }
}

export default App;
