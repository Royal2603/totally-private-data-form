import data from "./data.js";
// const finalArr = [];
// for (let obj of data) {
//   const fullname = `${obj.name.first} ${obj.name.last}`;

//   const birthday = new Date(obj.dob.date).toDateString();

//   finalArr.push({ fullname, birthday });
// }
// console.log(finalArr);

const finalArr = data.map((obj) => {
  const fullname = `${obj.name.first} ${obj.name.last}`;
  const birthday = new Date(obj.dob.date).toDateString();
  return fullname, birthday;
});
console.log(finalArr);
