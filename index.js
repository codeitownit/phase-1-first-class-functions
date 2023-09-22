
function receivesAFunction (spy){
  spy();
}
function returnsANamedFunction() {
      function aFunction() {}
      return aFunction;
}
function returnsAnAnonymousFunction() {
      return function () {};
}
