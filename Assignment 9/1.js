function variableScopeExample() {
  var a = 10;      // function scoped
  let b = 20;      // block scoped
  const c = 30;    // block scoped, cannot be reassigned

  if (true) {
    var a = 100;   // re-declared, same scope
    let b = 200;   // new block-scoped variable
    const c = 300; // new block-scoped constant
    console.log('Inside block:', a, b, c); // 100, 200, 300
  }

  console.log('Outside block:', a, b, c);   // 100, 20, 30
}
variableScopeExample();

