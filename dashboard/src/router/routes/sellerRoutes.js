import Home from '../../views/pages/Home';
import SellerDashboard from '../../views/seller/SellerDashboard';
import AddProduct from '../../views/seller/AddProduct';
import Product from '../../views/seller/Product';
import DiscountProducts from '../../views/seller/DiscountProducts';
import Orders from '../../views/seller/Orders';
import Payments from '../../views/seller/Payments';
import SellerToCustomer from '../../views/seller/SellerToCustomer';
import SellerToAdmin from '../../views/seller/SellerToAdmin';
import Setting from '../../views/seller/Setting';


export const sellerRoutes = [
     {
        path: '/',  // route path relative to the domain name.
        element: <Home/>, // this is the component that will be rendered when the user visits this route.
        ability: ['admin','seller'], // this is the ability that the user must have to access this route.
     },
     {
      path: '/seller/dashboard',  
      element: <SellerDashboard/>, 
      role: 'seller',
      status : 'active'
     },
     {
      path: '/seller/add-product',  
      element: <AddProduct/>, 
      role: 'seller',
      status : 'active'
     },
     {
      path: '/seller/dashboard/products',  
      element: <Product/>, 
      role: 'seller',
      status : 'active'
     },
     {
      path: '/seller/dashboard/discount-product',  
      element: <DiscountProducts/>, 
      role: 'seller',
      status : 'active'
     },
     {
      path: '/seller/dashboard/orders',  
      element: <Orders/>, 
      role: 'seller',
      ability : ['active','deactive'] //seller can access orders while deactive
     },
     {
      path: '/seller/dashboard/payments',  
      element: <Payments/>, 
      role: 'seller',
      status : 'active'
     },
     {
      path: '/seller/dashboard/chat-support',  
      element: <SellerToAdmin/>, 
      ability : ['active','deactive','pending']
     },
     {
      path: '/seller/dashboard/chat-customer/:customerId',  
      element: <SellerToCustomer/>, 
      role: 'seller',
      status : 'active'
     },
     {
      path: '/seller/dashboard/chat-customer',  
      element: <SellerToCustomer/>, 
      role: 'seller',
      status : 'active'
     },
     {
      path: '/seller/dashboard/setting',  
      element: <Setting/>, 
      role: 'seller',
      status : 'active'
     },
]