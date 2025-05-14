//cria uma função que puxa o valor presente no html e puxa o texto pelo id e em seguida muda o seu valor com base no que o usuário selecionou
function mudarCor() {
  const cor = document.getElementById('corSelecionada').value;
  document.getElementById('texto').style.color = cor; 
}