function exibirInformacoes() {
  const nome = document.getElementById('nomeInput').value;
  const output = document.getElementById('output');
  const welcomeMessage = document.getElementById('welcomeMessage');
  const inputInstruction = document.getElementById('inputInstruction');

  if (nome.trim() !== '') {
    // Exibe mensagem de boas-vindas personalizada
    welcomeMessage.innerHTML = `<p>Olá, <strong>${nome.split(' ')[0]}</strong>! Que bom ter você aqui!</p>`;
    
    // Define tema dinâmico baseado na primeira letra do nome
    const primeiraLetra = nome[0].toLowerCase();
    let corDeFundo;
    switch (primeiraLetra) {
      case 'a': corDeFundo = '#e0f7fa'; break;
      case 'b': corDeFundo = '#ffebee'; break;
      case 'c': corDeFundo = '#f3e5f5'; break;
      default: corDeFundo = '#f0f8f5'; break; // Cor padrão
    }
    document.body.style.backgroundColor = corDeFundo;

    // Contagem de vogais e consoantes
    const { vogais, consoantes } = contarVogaisConsoantes(nome);
    
    // Verifica se o nome é um palíndromo
    const palindromo = verificarPalindromo(nome);

    // Exibe informações detalhadas sobre o nome
    output.innerHTML = `
      <p>Seu nome é: <strong>${nome}</strong></p>
      <p>Seu nome tem <strong>${nome.length}</strong> letras</p>
      <p>Seu nome contém <strong>${vogais}</strong> vogais e <strong>${consoantes}</strong> consoantes.</p>
      <p>${palindromo}</p>
      <p>A segunda letra do seu nome é: <strong>${nome[1] || 'N/A'}</strong></p>
      <p>Qual o primeiro índice da letra 'a' no seu nome? <strong>${nome.indexOf('a')}</strong></p>
      <p>Qual o último índice da letra 'a' no seu nome? <strong>${nome.lastIndexOf('a')}</strong></p>
      <p>As últimas 3 letras do seu nome são: <strong>${nome.slice(-3)}</strong></p>
      <p>As palavras do seu nome são: <strong>${nome.split(' ').join(', ')}</strong></p>
      <p>Seu nome com letras maiúsculas: <strong>${nome.toUpperCase()}</strong></p>
      <p>Seu nome com letras minúsculas: <strong>${nome.toLowerCase()}</strong></p>
    `;

    // Oculta a instrução de entrada
    inputInstruction.style.display = 'none';
  } else {
    output.innerHTML = "<p>Por favor, insira um nome válido.</p>";
  }
}

function contarVogaisConsoantes(nome) {
  const vogais = nome.match(/[aeiouáéíóúãõ]/gi) || [];
  const consoantes = nome.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g) || [];
  return { vogais: vogais.length, consoantes: consoantes.length };
}

function verificarPalindromo(nome) {
  const nomeLimpo = nome.replace(/[\W_]/g, '').toLowerCase(); // Remove caracteres especiais e transforma em minúsculas
  const palindromo = nomeLimpo === nomeLimpo.split('').reverse().join('');
  return palindromo ? "Seu nome é um palíndromo!" : "Seu nome não é um palíndromo.";
}

function reiniciar() {
  document.getElementById('nomeInput').value = '';
  document.getElementById('output').innerHTML = '';
  document.getElementById('welcomeMessage').innerHTML = '';
  document.body.style.backgroundColor = '#f0f8f5';

  // Mostra novamente a instrução de entrada
  document.getElementById('inputInstruction').style.display = 'block';
}
