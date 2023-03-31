const name = "jatin";
const addr = "123 ruk";
const pincode = "123345";
const getPercent = () => {
//   return `${Math.floor(Math.random() * 100)}%`;
  return `${~~(Math.random() * 100)}%`;
};
export default name;
export { addr, pincode, getPercent };
