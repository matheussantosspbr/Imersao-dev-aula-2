function Converter() {
    var valorElemento = document.getElementById("valor").value;
    var valorEmDolarNumerico = Number(valorElemento);
  
    var valorEmReal = valorEmDolarNumerico * 5;
    console.log = "valorEmReal";
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
  
    var valorConvertido = `O Resultado em Real é ${valorEmReal
      .toLocaleString("pt-br", { style: "currency", currency: "BRL" })
      .replace(",", ".")}`;
  
    var final = valorConvertido;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  function Converter1() {
    var valorElemento1 = document.getElementById("valor").value;
    var valorEmDolarNumerico1 = Number(valorElemento1);
  
    var valorEmReal1 = valorEmDolarNumerico1 * 6;
    console.log = "valorEmReal";
  
    var elementoValorConvertido1 = document.getElementById("valorConvertido");
  
    var valorConvertido1 = `O Resultado em Real é ${valorEmReal1
      .toLocaleString("pt-br", { style: "currency", currency: "BRL" })
      .replace(",", ".")}`;
  
    var final = valorConvertido1;
    elementoValorConvertido1.innerHTML = valorConvertido1;
  }