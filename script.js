document.getElementById("calculate").addEventListener("click", average);

function average() {
  let num1 = Number(document.getElementById("CSS1").value);
  let num2 = Number(document.getElementById("CSS2").value);
  let num3 = Number(document.getElementById("SP1").value);
  let num4 = Number(document.getElementById("SP2").value);
  let num5 = Number(document.getElementById("PA").value);

  if (num1 > 100) {
    num1 = 100;
  }
  if (num2 > 100) {
    num2 = 100;
  }
  if (num3 > 100) {
    num3 = 100;
  }
  if (num4 > 100) {
    num4 = 100;
  }
  if (num5 > 100) {
    num5 = 100;
  }
  var result = (num1 + num2 + num3 + num4 + num5) / 5;

  document.getElementById("output").innerHTML = result;
}
