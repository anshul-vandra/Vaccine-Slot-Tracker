import React from 'react';
import About from './pages/About';

const Home = React.lazy(() => import('./pages/Home'));

const routes = [
    // Home Route
    { path: '/home/:type', exact: true, name: 'Home', component: Home },
    { path: '/about', exact: true, name: 'Home', component: About }
]

export default routes;