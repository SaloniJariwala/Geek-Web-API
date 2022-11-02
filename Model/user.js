const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        photo: {
            type: String,
            default: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHwAfAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAgMGB//EADcQAAICAQEFBQQHCQAAAAAAAAABAgMEEQUSITFBEyJRYXEUMlKxQkNicoGRoRUjJDM0kqLB8P/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABcRAQEBAQAAAAAAAAAAAAAAAAABESH/2gAMAwEAAhEDEQA/APuIAAAAAAaylGK1lJJLq2BsCLPPx4fT3vurU5/tOn4Z/kgJwIUdpY7ej316okV5FNvCuyLfh1A6gAAAAAAAAAAYbS5hvRalRnZjubrrf7tf5FHfK2ko6xx+8/i6fgV1lk7Zb1knJ+ZoCoyYMnaOJkSWqqlp+QRxMG9lU6npZCUfVGoEnHzraWk3vw8GWuNk15EdYPj1T5ooDaE51zU4S0kuTGLr0YI2HlLIh4TXOJJMqAAAAazkoxcpcktWBA2pkbq7CL4y9708CrN7Zu2yU5c5PX0NDSBnm9FzMHfBipZdSfLXUIs8LDjRFSkk7GuL8CWAZaazjGcXGSTT6Mps7F9ns1jruS5eXkXZE2pFSxG/BposSqUAFR0otlTbGcenTxRf1zjZXGcXqpLVHnC02RbrGVT+jxXoSqsQARQi7SnuYk9Ob0RKIO1n/Dx++v8AYFSYANMh0os7K6Fnwvj6HMxqFeljJSScXqmtUzJS4me6FuSW9D9UWEdoYsvrNH4NMmKlEDa1qVUak+9J6v0MX7TqitKU5y8WtEVc7ZWSc7JayfMSDAAKyEnZ09zLh58CMdcb+oq++vmB6AAGWghbWWuLr4SRNOWVX2uPOC5tcPUDz4ANMhvTRO6W7XBv5I7YeLLInq9VWubLmuuNcVGEUkhaqthsluPftSl5I0eyrteE4NerLgE1VVDZUvp2Jei1ON+zralrHvx8uZdgaPNbq1Bc5mFG5OdaUbPmU7Ti9GuKKjB2w472VUvtanEnbJr3shz6QXz/AOYFuADKgAApNoU9je2l3Z8URi+ysdZFTg+fOL8GUVkJVzcJpqS5o1EXuJ2fs8Ox9zQ7FFi5U8eXDjB84lvRk13x1rfHqnzRFdgAQADDaXN6AZKfanZ+0Lc9/TvaHfL2hFJwx3rL4ui9CserererfNssRgvMCjscdJrvS4shbNxe0n21i7kfdT6stkKAAIoAABGy8SORHXlNcpEkAeeupnTPdsi159GaJuL1T0fij0VlcLIuM4qSfRkC7Zib1pnu/ZlxRdRFrz8iHBy319pHZbUn1qi/xOE8HIh9XvLxi9Tn7Pcvqp/2svBJntO5+7CEf1I1t9t38ybfl0Mxxb5cqZ/itCRXsy6XvuMF+Y4IJOw8CVjU7k4w6R6snY+FTTxUd6XxSJJNMYikkkkklwSRkAigAAAAAAAAAAAAAAAAAAAAAAAP/9k='
        },
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