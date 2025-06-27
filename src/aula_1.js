function basico() {
  const nome = prompt("Qual é seu nome?");
  const idade = prompt("Qual sua idade?");

  const aluno = {
    nome: nome,
    idade: idade,
  };

  alert(`Olá, ${aluno.nome}. Você têm ${aluno.idade} anos.`);
}

function idade() {
  const idade = parseInt(prompt("Qual sua idade?"));

  if (isNaN(idade)) {
    alert("Digite um número!");
  } else {
    if (idade >= 18) {
      alert("Usuário pode tirar carteira!");
    } else {
      alert("Usuário não pode tirar carteira!");
    }
  }
}

function weekday() {
  const day = parseInt(
    prompt("Qual é seu dia da semana preferido? Apenas aceito inteiros >:(")
  );

  if (isNaN(day)) {
    alert("EU DISSE QUE SÓ ACEITO INTEIROOOOOOS!!!!!");
  }

  if (day == 1) {
    alert("SEGUNDA-FEIRA");
  } else if (day == 2) {
    alert("TERÇA-FEIRA");
  } else if (day == 3) {
    alert("QUARTA-FEIRA");
  } else if (day == 4) {
    alert("QUINTA-FEIRA");
  } else if (day == 5) {
    alert("SEXTA-FEIRA");
  } else if (day == 6) {
    alert("SÁBADO");
  } else if (day == 7) {
    alert("DOMINGO");
  } else if (day < 1 || day > 7) {
    alert("Quantos dias tem na semana, ô pateta?");
  }
}

function dom() {
  let h1dom = document.getElementById("title1");

  const nome = prompt("Digite seu nome:");

  h1dom.textContent = `Bem vindo, ${nome}!`;
}

function weekday2() {
  let element = document.getElementById("title1");

  const day = parseInt(
    prompt("Qual é seu dia da semana preferido? Apenas aceito inteiros >:(")
  );

  if (isNaN(day)) {
    element.innerHTML = `EU DISSE QUE SÓ ACEITO INTEIROOOOOOS!!!!!`;
  }

  if (day == 1) {
    element.innerHTML = `Segunda-Feira`;
  } else if (day == 2) {
    element.innerHTML = `Terça-feira`;
  } else if (day == 3) {
    element.innerHTML = `Quarta-Feira`;
  } else if (day == 4) {
    element.innerHTML = `Quinta-Feira`;
  } else if (day == 5) {
    element.innerHTML = `Sexta-Feira`;
  } else if (day == 6) {
    element.innerHTML = `Sábado`;
  } else if (day == 7) {
    element.innerHTML = `Domingo`;
  } else if (day < 1 || day > 7) {
    element.innerHTML = `Quantos dias tem na semana, ô pateta?`;
  }
}
