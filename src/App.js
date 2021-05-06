import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/layout/';
import ReduxToastr from 'react-redux-toastr'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Loading = () => <div className="pt-3 text-center">Loading...</div>

const ScrollToTop = React.lazy(() => import('./components/common/scroll'));

function App() {

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <ReduxToastr />
            <Suspense fallback={Loading()}>
                <ScrollToTop>
                    <Switch>
                        <Route path="/" component={Layout} />
                    </Switch>
                </ScrollToTop>
            </Suspense>
        </BrowserRouter>
    );
}
export default App;