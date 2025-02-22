import { RxDashboard } from "react-icons/rx";
import { RiShoppingCartLine } from "react-icons/ri";
import { BiCategoryAlt } from "react-icons/bi";
import { PiUsersThreeBold } from "react-icons/pi";
import { MdPayment } from "react-icons/md";
import { FaUsersSlash } from "react-icons/fa";
import { RiUserReceivedLine } from "react-icons/ri";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { MdSupportAgent,MdOutlineSettings } from "react-icons/md";


export const allNav = [
    {
        id: 1,
        title: 'Dashboard',
        icon: <RxDashboard />,
        role : 'admin',
        path: '/admin/dashboard',
    },
    {
        id: 2,
        title: 'Orders',
        icon: <RiShoppingCartLine />,
        role : 'admin',
        path: '/admin/dashboard/orders',
    },
    {
        id: 3,
        title: 'Category',
        icon: <BiCategoryAlt/>,
        role : 'admin',
        path: '/admin/dashboard/category',
    },
    {
        id: 4,
        title: 'Sellers',
        icon: <PiUsersThreeBold/>,
        role : 'admin',
        path: '/admin/dashboard/sellers',
    },
    {
        id: 5,
        title: 'Payment Request',
        icon: <MdPayment/>,
        role : 'admin',
        path: '/admin/dashboard/payment-request',
    },
    {
        id: 6,
        title: 'Deactive Sellers',
        icon: <FaUsersSlash/>,
        role : 'admin',
        path: '/admin/dashboard/deactive-sellers',
    },
    {
        id: 7,
        title: 'Seller Request',
        icon: <RiUserReceivedLine/>,
        role : 'admin',
        path: '/admin/dashboard/seller-request',
    },
    {
        id: 8,
        title: 'Live Chat',
        icon: <MdOutlineMarkUnreadChatAlt/>,
        role : 'admin',
        path: '/admin/dashboard/chat-seller',
    },
    {
        id: 9,
        title: 'Settings',
        icon: <MdOutlineSettings/>,
        role : 'admin',
        path: '/admin/dashboard/settings',
    },

]