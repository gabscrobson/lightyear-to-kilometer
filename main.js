function Converter() {
    var element = document.getElementById("dolar");
    var value = parseFloat(element.value);
    console.log(value);
    var rvalue = parseFloat(value * 9461000000000);
    
  
    var elementohtml = document.getElementById("valorConvertido");
    var texto = rvalue + " Km";
    elementohtml.innerHTML = texto;
  }