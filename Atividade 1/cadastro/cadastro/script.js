document.getElementById('cadastroForm').addEventListener('submit', function (event) {
  event.preventDefault();

  //puxando o que foi digitado pelo usuário através de getElementby e .value
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  
  //cria uma li dentro da listaUsuarios e um método para colocar as informações que o usuário digitou dentro dessa li
  const lista = document.getElementById('listaUsuarios');
  const item = document.createElement('li');
  item.textContent = `Nome: ${nome} | Email: ${email} | Telefone: ${telefone}`;
  lista.appendChild(item);

  // Limpar formulário
  document.getElementById('cadastroForm').reset();
});
