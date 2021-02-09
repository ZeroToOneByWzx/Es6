import js2 from "./js2.js";
let m = 0;
function fun2() {
  return 666 + js2.m;
  return 666 ;
}
export default {
  userName: "xiaoming",
  fun1: (x) => {
    return `fun1=${x}`;
  },
  fun2: function () {
    return fun2();
  },
};
