// const arrNums1 = [1,5,9,4,6];
// console.log(arrNums1);

// //map

// function incrementElem(elem) {
//     return ++elem;
// }

// const newArrNums1 = arrNums1.map(incrementElem);
// console.log(newArrNums1);

const users = [
    {id:100, login:'qwe1', isMale: true},
    {id:200, login:'qwe21', isMale: true},
    {id:101, login:'asd', isMale: false},
    {id:178, login:'sss', isMale: false},
    {id:10, login:'max', isMale: true},
  ]

const id = users.map(function(user){
    return user.id;
})


//male only
const menLigins = users
    .filter(function (user) {
        return user.isMale;
    })
    .map(function (user) {
        return user.login;
    })
    console.log(menLigins)

// const isFemale = user.filtre(function(user){
//     return user.isMale === false;
// })

const products = [
    { name: "Молоко", price: 25, currency: "грн", quantity: 29 },
    { name: "Хліб", price: 12, currency: "грн", quantity: 37 },
    { name: "Яйця", price: 20, currency: "грн", quantity: 12 },
    { name: "Сир", price: 45, currency: "грн", quantity: 14 },
    { name: "Сік", price: 33, currency: "грн", quantity: 32 },
    { name: "Печево", price: 7, currency: "грн", quantity: 120 },
  ];
console.table(products);

  products.sort(function(item1, item2){
    return item1.price - item2.price;
  })

  const productsName = products.filter(function (item) {
    return item.price < 30
  }).map(function(item){
    return item.name;
  })
  .sort()
console.log(productsName)