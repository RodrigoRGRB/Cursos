var campoFiltro = document.querySelector("#filtrar-tabela");
campoFiltro.addEventListener("input", function(){
  console.log(this.value);

  var pacientes = campo.querySelectorAll(".paciente");

  for(var i = 0; i < pacientes.length; i++){
    paciente = paciente[i];
    var tdNome = document.querySelector(".info-nome");
    var nome = tdNome.textContent;
    
  }
});