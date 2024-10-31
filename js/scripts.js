function exibirInformacoes() {
    const nome = document.getElementById('nomeInput').value;
    const output = document.getElementById('output');
    
    if (nome.trim() !== '') {
      output.innerHTML = `
        <p>Seu nome é: <strong>${nome}</strong></p>
        <p>Seu nome tem <strong>${nome.length}</strong> letras</p>
        <p>A segunda letra do seu nome é: <strong>${nome[1]}</strong></p>
        <p>Qual o primeiro índice da letra a no seu nome? <strong>${nome.indexOf('a')}</strong></p>
        <p>Qual o último índice da letra a no seu nome? <strong>${nome.lastIndexOf('a')}</strong></p>
        <p>As últimas 3 letras do seu nome são: <strong>${nome.slice(-3)}</strong></p>
        <p>As palavras do seu nome são: <strong>${nome.split(' ').join(', ')}</strong></p>
        <p>Seu nome com letras maiúsculas: <strong>${nome.toUpperCase()}</strong></p>
        <p>Seu nome com letras minúsculas: <strong>${nome.toLowerCase()}</strong></p>
      `;
    } else {
      output.innerHTML = "<p>Por favor, insira um nome válido.</p>";
    }
  }

  function reiniciar() {
    document.getElementById('nomeInput').value = '';
    document.getElementById('output').innerHTML = '';
  }