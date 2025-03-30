import Home from '../../views/pages/Home';
import SellerDashboard from '../../views/seller/SellerDashboard';
import AddProduct from '../../views/seller/AddProduct';
import Product from '../../views/seller/Product';
import DiscountProducts from '../../views/seller/DiscountProducts';


export const sellerRoutes = [
     {
        path: '/',  // route path relative to the domain name.
        element: <Home/>, // this is the component that will be rendered when the user visits this route.
        ability: ['admin','seller'], // this is the ability that the user must have to access this route.
     },
     {
      path: '/seller/dashboard',  
      element: <SellerDashboard/>, 
      ability: ['seller'],
     },
     {
      path: '/seller/add-product',  
      element: <AddProduct/>, 
      ability: ['seller'],
     },
     {
      path: '/seller/dashboard/products',  
      element: <Product/>, 
      ability: ['seller'],
     },
     {
      path: '/seller/dashboard/discount-product',  
      element: <DiscountProducts/>, 
      ability: ['seller'],
     },
]