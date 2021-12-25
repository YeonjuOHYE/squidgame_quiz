const CardStack = (function () {
  let stack = null;
  function createInstance(el) {
    if (!stack && typeof window !== "undefined") {
      import("./Stack").then((Stack) => {
        stack = new Stack.default(el);
      })
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
