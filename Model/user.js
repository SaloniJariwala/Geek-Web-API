const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required']
        },
        phoneNo: {
            type: String,
            maxLength: [10, 'Invalid phone number'],
            minlength: [10, 'Invalid phone number'],
            required: [true, 'Phone number is required']
        },
        personalEmail: {
            type: String,
            required: [true, 'Personal Email is required']
        },
        companyEmail: {
            type: String,
            required: [true, 'Company Email is required']
        },
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        birthdate: {
            type: String,
            required: [true, 'Birthdate is required']
        },
        gender: {
            type: String,
            required: [true, 'Gender is required']
        },
        designationId: {
            type: String,
            required: [true, 'DesignationId is required']
        },
        joiningDate: {
            type: String,
            required: [true, 'Joining Date is required']
        },
        userRoleId: {
            type: String,
            required: [true, 'User Role Id is required']
        },
        address: {
            type: String,
            required: [true, 'Address is required']
        },
        salary: {
            type: String,
            required: [true, 'Salary is required']
        },
        bankName: {
            type: String,
            required: [true, 'Bank name is required']
        },
        accountNo: {
            type: String,
            required: [true, 'Account number is required']
        },
        ifscCode: {
            type: String,
            required: [true, 'IFSC code is required']
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("tbl_users", userSchema);