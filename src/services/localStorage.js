const addData = (data) => {
  localStorage.setItem("user", JSON.stringify(data));
};
const getData = () => {
  return JSON.parse(localStorage.getItem("user"));
};
const removeData=()=>{
  localStorage.removeItem('user')
}
export { addData, getData,removeData };
