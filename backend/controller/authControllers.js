const adminModel = require("../models/adminModel");
const sellerModel = require("../models/sellerModel");
const { responseReturn } = require("../utilites/response");
const bcrypt = require("bcrypt");
const { createToken } = require("../utilites/tokenCreate");
const sellerCustomerModel = require( "../models/chat/sellerCustomerModel");
//here we have to create all the functions to check the email and password
//of admin login and verify that with the database

class authControllers {
  admin_login = async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    try {
      const admin = await adminModel
        .findOne({ email }) // verifying via email.
        .select("+password");
      //console.log(admin);
      if (admin) {
        const match = await bcrypt.compare(password, admin.password);
        //console.log(match)
        if (match) {
          const token = await createToken({
            id: admin.id,
            role: admin.role,
          });
          res.cookie("accessToken", token, {
            //accesstoken is the name of the cookie
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // setting the cookie for 7 days
          });
          responseReturn(res, 200, { token, message: "Login Successfull" });
        } else {
          responseReturn(res, 404, { error: "Wrong Password" });
        }
      } else {
        responseReturn(res, 404, { error: "Email not found" });
      }
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
    }
  };
  //End Method

  //seller registeration method

  seller_register = async (req, res) => {
    const { email, name, password } = req.body;
    try {
      console.log("Received Data:", req.body);
      const getUser = await sellerModel.findOne({ email });
      if (getUser) {
        responseReturn(res, 404, { error: "Email Already Exist" });
      } else {
        const seller = await sellerModel.create({
          //to register the seller in database
          name,
          email,
          password: await bcrypt.hash(password, 10),
          method: "manually",
          shopInfo: {},
        });
        await sellerCustomerModel.create({
          myId : seller.id
        })
        const token = await createToken({
          id: seller.id, role : seller.role
        })
        res.cookie('accessToken',token , {
          expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        })
        responseReturn(res, 201, { token,
          message: "Seller registered successfully",
        });
      }
    } catch (error) {
      console.log(seller);
      console.error("Error in seller_register:", error);
      return responseReturn(res, 500, { error: "Internal Server Error" });
    }
  };

  seller_login = async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    try {
      const seller = await sellerModel
        .findOne({ email }) // verifying via email.
        .select("+password");
      //console.log(admin);
      if (seller) {
        const match = await bcrypt.compare(password, seller.password);
        //console.log(match)
        if (match) {
          const token = await createToken({
            id: seller.id,
            role: seller.role,
          });
          res.cookie("accessToken", token, {
            //accesstoken is the name of the cookie
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // setting the cookie for 7 days
          });
          responseReturn(res, 200, { token, message: "Login Successfull" });
        } else {
          responseReturn(res, 404, { error: "Wrong Password" });
        }
      } else {
        responseReturn(res, 404, { error: "Email not found" });
      }
    } catch (error) {
      responseReturn(res, 500, { error: 'Internal server error' });
    }
  };
  //End Method
  getUser = async (req, res) => {
    const { id, role } = req;
    try {
      if (role === "admin") {
        const user = await adminModel.findById(id);
        responseReturn(res, 200, { userInfo: user });
      } else {
        const seller = await sellerModel.findById(id);
        responseReturn(res, 200, { userInfo: seller });
      }
    } catch (error) {
      responseReturn(res, 500, { error: 'Internal server error' });
    }
  };
}

module.exports = new authControllers();
