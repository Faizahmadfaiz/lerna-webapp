// Constants
import ROUTE_NAMES from '../constants/routeNames';

const routes = {};
routes[ROUTE_NAMES.HOME] = {
    loader: () => import('../pages/PreferenceManagement/ManagePreferences'),
};

export default routes;
