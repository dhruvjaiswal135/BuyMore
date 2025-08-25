# BuyMore - Multi-Vendor E-commerce Platform

<div align="center">
  <img src="./frontend/public/images/Logo.png" alt="BuyMore Logo" width="200"/>
  
  [![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
  [![React](https://img.shields.io/badge/React-19.0-blue.svg)](https://reactjs.org/)
  [![MongoDB](https://img.shields.io/badge/MongoDB-Database-green.svg)](https://mongodb.com/)
  [![Express](https://img.shields.io/badge/Express.js-Framework-lightgrey.svg)](https://expressjs.com/)
  [![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
</div>

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [API Documentation](#api-documentation)
- [User Roles](#user-roles)
- [Contributing](#contributing)
- [License](#license)

## 🌟 Overview

BuyMore is a comprehensive multi-vendor e-commerce platform built with the MERN stack. It provides a complete marketplace solution where multiple sellers can register, manage their products, and sell to customers, while administrators can oversee the entire platform.

The platform consists of three main applications:
- **Backend API** - RESTful API server
- **Admin Dashboard** - Management interface for admins and sellers  
- **Frontend Store** - Customer-facing e-commerce website

## ✨ Features

### 🛍️ Customer Features
- Browse products by categories
- Advanced product search with filters
- Product ratings and reviews
- Shopping cart and wishlist
- Secure checkout with Stripe
- Order tracking
- Customer support chat

### 🏪 Seller Features
- Seller registration and profile management
- Product management (CRUD operations)
- Inventory tracking
- Order management
- Sales analytics and reports
- Payment tracking
- Chat with customers and admin
- Discount and coupon management

### 👑 Admin Features
- Dashboard with analytics
- Seller approval and management
- Category management
- Order monitoring
- Payment request handling
- Platform-wide analytics
- User management
- Chat moderation

### 🔒 Security Features
- JWT-based authentication
- Role-based access control
- Password encryption with bcrypt
- Secure cookie management
- Protected API routes
- Input validation and sanitization

## 🛠️ Technology Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JSON Web Tokens (JWT)
- **File Upload**: Cloudinary
- **Payment**: Stripe
- **Real-time**: Socket.io
- **Security**: bcrypt, CORS, cookie-parser

### Frontend (Customer)
- **Framework**: React 19
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **UI Components**: React Icons, React Rating
- **Notifications**: React Hot Toast

### Admin Dashboard
- **Framework**: React 19
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Charts**: ApexCharts
- **Icons**: React Icons
- **Routing**: React Router DOM

## 📁 Project Structure

```
BuyMore/
├── backend/                 # Express.js API server
│   ├── controller/         # Route controllers
│   │   ├── authControllers.js
│   │   └── dashboard/
│   │       ├── categoryController.js
│   │       ├── productController.js
│   │       └── sellerController.js
│   ├── middleware/         # Custom middleware
│   │   └── authMiddleware.js
│   ├── models/            # Mongoose schemas
│   │   ├── adminModel.js
│   │   ├── categoryModel.js
│   │   ├── productModel.js
│   │   ├── sellerModel.js
│   │   └── chat/
│   │       └── sellerCustomerModel.js
│   ├── routes/            # Express routes
│   │   ├── authroutes.js
│   │   └── dashboard/
│   ├── utilites/          # Utility functions
│   │   ├── db.js
│   │   ├── response.js
│   │   └── tokenCreate.js
│   ├── package.json
│   └── server.js          # Entry point
├── dashboard/             # Admin/Seller React app
│   ├── src/
│   │   ├── api/          # API configuration
│   │   ├── components/   # Reusable components
│   │   ├── layout/       # Layout components
│   │   ├── router/       # Routing configuration
│   │   ├── store/        # Redux store
│   │   ├── views/        # Page components
│   │   └── utilities/    # Helper functions
│   └── package.json
├── frontend/             # Customer React app
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── store/        # Redux store
│   │   └── utils/        # Utility functions
│   └── package.json
└── README.md
```

## 🚀 Installation

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (v5 or higher)
- npm or yarn
- Cloudinary account (for image storage)
- Stripe account (for payments)

### 1. Clone the Repository
```bash
git clone https://github.com/dhruvjaiswal135/BuyMore.git
cd BuyMore
```

### 2. Backend Setup
```bash
cd backend
npm install

# Create .env file (see Configuration section)
cp .env.example .env

# Start the server
npm run server
```

### 3. Dashboard Setup
```bash
cd dashboard
npm install

# Start the dashboard
npm start
```

### 4. Frontend Setup
```bash
cd frontend
npm install

# Start the frontend
npm start
```

## ⚙️ Configuration

### Backend Environment Variables
Create a `.env` file in the backend directory:

```env
# Server Configuration
PORT=4000
NODE_ENV=development

# Database
DB_URL=mongodb://localhost:27017/buymore

# JWT Secret
SECRET=your_super_secret_jwt_key_here

# Cloudinary Configuration
cloud_name=your_cloudinary_cloud_name
api_key=your_cloudinary_api_key
api_secret=your_cloudinary_api_secret

# Stripe Configuration
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

# Email Configuration (Optional)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

### Database Setup
1. Install MongoDB locally or use MongoDB Atlas
2. Create a database named `buymore`
3. The application will automatically create collections

### Cloudinary Setup
1. Create a Cloudinary account
2. Get your cloud name, API key, and API secret
3. Add them to your `.env` file

### Stripe Setup
1. Create a Stripe account
2. Get your test/live API keys
3. Add them to your `.env` file

## 📚 API Documentation

### Authentication Endpoints
```
POST /api/admin-login          # Admin login
POST /api/seller-register      # Seller registration
POST /api/seller-login         # Seller login
GET  /api/get-user            # Get current user info (protected)
```

### Product Endpoints
```
POST /api/product-add          # Add new product (seller)
GET  /api/products-get         # Get products with pagination
GET  /api/product-get/:id      # Get single product
POST /api/product-update       # Update product
POST /api/product-image-update # Update product images
```

### Category Endpoints
```
GET  /api/categories           # Get all categories
POST /api/category-add         # Add category (admin)
PUT  /api/category-update/:id  # Update category (admin)
DELETE /api/category-delete/:id # Delete category (admin)
```

### Seller Management Endpoints
```
GET  /api/sellers              # Get all sellers (admin)
GET  /api/seller/:id           # Get seller details
PUT  /api/seller-status-update # Update seller status (admin)
```

## 👥 User Roles

### 🔵 Customer
- Browse and search products
- Add items to cart
- Place orders
- Track order status
- Rate and review products
- Chat with sellers

### 🟡 Seller
- **Pending**: Limited access until admin approval
- **Active**: Full access to seller features
- Manage product inventory
- Process orders
- View sales analytics
- Communicate with customers

### 🔴 Admin
- **Super Admin**: Full platform control
- Approve/reject seller applications
- Manage categories and products
- Monitor orders and payments
- Access platform analytics
- Moderate user interactions

## 🏃‍♂️ Running the Application

### Development Mode
```bash
# Terminal 1 - Backend
cd backend
npm run server

# Terminal 2 - Dashboard
cd dashboard
npm start

# Terminal 3 - Frontend
cd frontend
npm start
```

**Access URLs:**
- Frontend (Customer): http://localhost:3000
- Dashboard (Admin/Seller): http://localhost:3001
- Backend API: http://localhost:4000

### Production Build
```bash
# Build frontend
cd frontend
npm run build

# Build dashboard
cd dashboard
npm run build

# Deploy built files to your hosting service
```

## 🧪 Testing

```bash
# Run tests for all components
npm test

# Run tests with coverage
npm run test:coverage

# Run specific test suite
npm test -- --testPathPattern=backend
```

## 📱 Mobile Responsiveness

The application is fully responsive and tested on:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Common Issues & Solutions

### Database Connection Issues
```bash
# Check MongoDB service
sudo systemctl status mongod

# Restart MongoDB
sudo systemctl restart mongod
```

### Port Already in Use
```bash
# Kill process on port 4000
lsof -ti:4000 | xargs kill -9
```

### Cloudinary Upload Issues
- Verify API credentials in .env file
- Check file size limits (10MB max)
- Ensure stable internet connection

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Dhruv Jaiswal**
- GitHub: [@dhruvjaiswal135](https://github.com/dhruvjaiswal135)
- Email: your.email@example.com

## 🙏 Acknowledgments

- React team for the amazing framework
- MongoDB team for the database
- Stripe for payment processing
- Cloudinary for image management
- All open source contributors

## 📞 Support

If you have any questions or need help with setup, please:
1. Check the [Issues](https://github.com/dhruvjaiswal135/BuyMore/issues) page
2. Create a new issue if your problem isn't listed
3. Contact the maintainer directly

---

<div align="center">
  <p>Made with ❤️ by Dhruv Jaiswal</p>
  <p>⭐ Star this repository if you found it helpful!</p>
</div>

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
