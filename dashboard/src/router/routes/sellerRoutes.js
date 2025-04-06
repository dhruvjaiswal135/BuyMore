
import SellerDashboard from '../../views/seller/SellerDashboard';
import AddProduct from '../../views/seller/AddProduct';
import Product from '../../views/seller/Product';
import DiscountProducts from '../../views/seller/DiscountProducts';
import Orders from '../../views/seller/Orders';
import Payments from '../../views/seller/Payments';
import SellerToCustomer from '../../views/seller/SellerToCustomer';
import SellerToAdmin from '../../views/seller/SellerToAdmin';
import Setting from '../../views/seller/Setting';
import EditProduct from '../../views/seller/EditProduct';
import OrderDetails from '../../views/seller/OrderDetails';


export const sellerRoutes = [
     
     {
      path: '/seller/dashboard',  
      element: <SellerDashboard/>, 
      role: 'seller',
      status : 'active'
     },
     {
      path: '/seller/dashboard/add-product',  
      element: <AddProduct/>, 
      role: 'seller',
      status : 'active'
     },
     {
      path: '/seller/dashboard/edit-product/:productId',  
      element: <EditProduct/>, 
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
      path: '/seller/dashboard/order/details/:orderId',  
      element: <OrderDetails/>, 
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
      role: 'seller',
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