// Name formatting
let cleaveName = new Cleave('.name', {
    name : true,
    blocks : [15],
});


// Firstname formatting
let cleaveFirstname = new Cleave('.firstName', {
    firstname : true,
    blocks : [15],
});


// Phone number formatting
let cleavePhoneNumber = new Cleave('.phoneNumber', {
    phoneNumber : true,
    prefix: '+33',
    delimiter: " ",
    blocks: [3, 2, 2, 2, 2, 2]
});


// Date formatting
let cleaveDate = new Cleave('.date', {
    date: true,
    datePattern: ['d', 'm', 'Y'],
    delimiter: '-'
});


// CreditCard formatting
let cleaveCreditCard = new Cleave('.creditCard', {
    creditCard : true,
    delimiter : '-',
    blocks : [4, 4, 4, 4]
});