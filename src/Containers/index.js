import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Routes from '../Config/Routes';
import Loader from '../Utils/Loader';

class Main extends React.Component {

    loading = () => (
        <div>
            <Loader />
        </div>
    );

    render() {
        return (
            <Suspense fallback={this.loading()}>
                <Switch>
                    {Routes.map((route, idx) => {
                        return route.component ? (
                            <Route key={idx} path={route.path}
                            exact={route.exact} name={route.name} render={(props) => <route.component {...props} />} />
                        ) : null;
                    })}
                    <Redirect from="/" to="/home" />
                </Switch>
            </Suspense>
        );
    }
}

export default Main;
