import React from "react";
import {Route,Redirect} from "react-router-dom";

const AppRoute = ({component: Component,path,layout: Layout,currentUser,isAuthProtected,...rest}) => (
    <Route path={path} {...rest} render={props => {
        // if(isAuthProtected && !currentUser){
        //     return (
        //         <Redirect to={{pathname: "/login",state: {from: props.location}}}/>
        //     );
        // }
        return (
            <Layout page={path} currentUser={currentUser}>
                <Component currentUser={currentUser} {...props}/>
            </Layout>
        );
    }}/>
);
export default AppRoute;