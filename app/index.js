function addNumber() {
  let number = document.getElementById("input");
  let table = document.getElementById("tabuada");

  let numberValue = number.value;
  let textinner = table;

  if (numberValue.length == 0) {
    textinner.innerHTML = "<option>A caixa não pode estar vazia!</option>";
  } else {
    if (numberValue) {
      let c = 1;
      table.innerHTML = ``;
      while (c <= 10) {
        let item = document.createElement("option");
        item.text = `${numberValue} x ${c} = ${numberValue * c}`;
        textinner.appendChild(item);
        c++;
      }
    }
  }
}

function clean() {
  let number = document.getElementById("input");
  let table = document.getElementById("tabuada");

  if (number) {
    table.innerHTML = ` `;
    table.innerHTML += "<option>Digite o valor para achar a tabuada.</option>";
  }
}
