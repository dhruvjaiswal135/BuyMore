import Home from '../../views/pages/Home';
export const sellerRoutes = [
     {
        path: '/',  // route path relative to the domain name.
        element: <Home/>, // this is the component that will be rendered when the user visits this route.
        ability: ['admin','seller'], // this is the ability that the user must have to access this route.
     }
]