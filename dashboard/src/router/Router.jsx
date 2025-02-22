
import {useRoutes} from 'react-router-dom';
const Router = ({allroutes}) => {
    const routes = useRoutes([...allroutes]);
    return routes;
};
export default Router;