var foo = "I'm global";
var bar = "So am I";

function a() {
  var foo = "I'm local, the previous 'foo' didn't notice a thing";
  var baz = "I'm local, too";

  function b() {
    var foo = "I'm even more local, all three 'foos' have different values";
    baz = "I just changed 'baz' one scope higher, but it's still not global";
    bar = "I just changed the global 'bar' variable";
    xyz = "I just created a new global variable";
  }
}
