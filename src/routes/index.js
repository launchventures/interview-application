import Home from "pages/Home/home.page";
import Dashboard from "pages/Dashboard/dashboard/dashboard.page";
import SelectedConfiguration from "pages/Dashboard/dashboard/selectedConfiguration";
import AddClient from "pages/Dashboard/dashboard/addClient";

const protectedRoutes = [
    {path: '/dashboard',component: Dashboard},
    {path: "/stakeholders", component: SelectedConfiguration},
    {path: "/add-client", component: AddClient},
];
const publicRoutes = [
    {path: "/",component: Home}
];
export {protectedRoutes,publicRoutes};