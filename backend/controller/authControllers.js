const adminModel = require("../models/adminModel");
const { responseReturn } = require("../utilites/response");
const bcrypt = require("bcrypt");
const { createToken } = require("../utilites/tokenCreate");
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
      console.log(admin);
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
  getUser = async (req, res) => {
    const {id, role} = req;
    try {
        if(role === "admin") {
            const user = await adminModel.findById(id);
            responseReturn(res, 200, {userInfo : user});
        } else {
            console.log('Seller Info');
        }
    } catch (error) {
        console.log(error.message);
    }
  } 
  }

module.exports = new authControllers();
