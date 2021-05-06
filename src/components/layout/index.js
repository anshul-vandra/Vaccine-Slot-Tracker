import React from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from "../common/Header";
import routes from '../../routes';

const Layout = props => {

    return (
        <>
            <Header />
            <main className="app-main d-flex flex-column">
                <Switch>
                    {routes.map((route, idx) => {
                        return route.component ? (
                            <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                render={props => (
                                    <route.component {...props} />
                                )}
                            />
                        ) : (null)
                    })}
                    <Redirect to="/home/pin" />
                </Switch>
            </main>
            {/* <Footer /> */}
        </>
    )
}

export default Layout;