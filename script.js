document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btn").onclick = function () {
    let value = document.getElementById("value").value;
    let result = Math.sqrt(value);
    document.getElementById("result").innerHTML =
      "The square root of " + value + " is " + result;
  };
});
