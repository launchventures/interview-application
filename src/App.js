import React from "react";
import {Switch,BrowserRouter as Router} from "react-router-dom";
import Cookies from 'js-cookie';
import {protectedRoutes,publicRoutes} from "routes";
import AppRoute from "routes/route";
import CommonLayout from "components/Layout/Common";
import AdminLayout from "components/Layout/Admin";

const App = () => {
    const currentUser = Cookies.get("civit-build-user") ? JSON.parse(Cookies.get("civit-build-user")) : null;
    return (
        <React.Fragment>
            <Router>
                <Switch>
                    {protectedRoutes.map((route,index) => (
                        <AppRoute path={route.path} layout={AdminLayout} currentUser={currentUser} component={route.component} key={index} isAuthProtected={true}/>
                    ))}
                    {publicRoutes.map((route,index) => (
                        <AppRoute path={route.path} layout={CommonLayout} currentUser={currentUser} component={route.component} key={index} isAuthProtected={false}/>
                    ))}
                </Switch>
            </Router>
		</React.Fragment>
    );
}
export default App;