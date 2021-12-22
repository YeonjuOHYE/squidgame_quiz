import Stack from "./Stack";

const CardStack = (function () {
  let stack = null;
  function createInstance(el) {
    if (!stack) {
      stack = new Stack(el);
    }
  }

  return {
    getInstance: function () {
      return stack;
    },
    createInstance,
  };
})();

export default CardStack;
