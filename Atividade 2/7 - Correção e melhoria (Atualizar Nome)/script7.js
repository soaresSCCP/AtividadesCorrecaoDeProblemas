//cria uma função que pega o nome que o funcionário digitou e faz aparecer no resultado
function atualizarNome() {
  let nome = document.getElementById('novoNome').value; 
  document.getElementById('resultado').textContent = "Nome atual: " + nome;
}