const student = { 
    rollNum:26,
    fname: 'Ahmed',
    lname: 'Os',
    courses: ['Web3', 'Blockchain'],
    address:{
        city: "Karachi",
        country: "Pakistan"
    }
}
console.log(student.rollNum)
student.rollNum = 32;
console.log(student.rollNum)
console.log(student.address.city)

//==========Objects within objects============

let company = { companyName: "Healthy Candy",
    activity: "food manufacturing",
    address: {
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida"
    },
    yearOfEstablishment: 2021
};
//To modify or update some info
company.address.zipcode = "33117";
console.log(company.address.zipcode)

//=====Arrays within Objects =============

let companyZ = { companyName: "Healthy Candy",
    activities: ["food manufacturing","improving kids' health", "manufacturing toys"],
    address: {
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida"
},
yearOfEstablishment: 2021
};

let activity = companyZ.activities[1];
console.log(activity)
