import Home from "pages/Home/home.page";
import Dashboard from "pages/Dashboard/dashboard/dashboard.page";
import SelectedConfiguration from "pages/Dashboard/dashboard/selectedConfiguration";
import AddClient from "pages/Dashboard/dashboard/addClient";
import PaymentLog from "pages/Payment/Log";

const protectedRoutes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/stakeholders", component: SelectedConfiguration },
  { path: "/add-client", component: AddClient },
  { path: "/payment-log", component: PaymentLog },
];
const publicRoutes = [{ path: "/", component: Home }];
export { protectedRoutes, publicRoutes };
