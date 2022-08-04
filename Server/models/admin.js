const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const AdminSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
    phone:{type: Number}
});

AdminSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "21d",
	});
	return token;
};

const Admin = mongoose.model("admin", AdminSchema);

const validate = (data) => {
	const schema = Joi.object({
		firstName: Joi.string().required().label("First Name"),
		lastName: Joi.string().required().label("Last Name"),
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = { Admin, validate };
//const mongoose = require("mongoose");
/*
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const AdminSchema = new mongoose.Schema({
    name: { type: String, required:true },
    email: { type: String, required:true,   },
    password: { type: String, required:true,  },
    
});

AdminSchema.methods.generateAuthToken = function(){
    const token=jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY,{expiresIn: "7d",});
    return token;
}

const AdminSchema = new mongoose.Schema({
    name: { type: String, required:true },
    email: { type: String, required:true,   },
    password: { type: String, required:true,  },
    isAdmin: {
        type: Boolean,
        default: false,
      },
});


const AdminModel = mongoose.model("admin", AdminSchema)
/*
const validate=(data) =>{
    const schema= Joi.object({
        name: Joi.string().required().label("Name"),
        email: Joi.string().email().required.label("Email"),
        password: passwordComplexity().required().label("Password")
    });
    return schema.validate(data)
};
module.exports = {AdminModel, validate};

*/
//module.exports = AdminModel;