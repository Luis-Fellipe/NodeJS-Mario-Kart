const player1 = {
  nome: "Mario",
  velocidade: 4,
  manobrabilidade: 3,
  poder: 3,
  pontos: 0,
};

const player2 = {
  nome: "Peach",
  velocidade: 3,
  manobrabilidade: 4,
  poder: 2,
  pontos: 0,
};

const player3 = {
  nome: "Yoshi",
  velocidade: 2,
  manobrabilidade: 4,
  poder: 3,
  pontos: 0,
};

const player4 = {
  nome: "Bowser",
  velocidade: 5,
  manobrabilidade: 2,
  poder: 5,
  pontos: 0,
};

const player5 = {
  nome: "Luigi",
  velocidade: 3,
  manobrabilidade: 4,
  poder: 4,
  pontos: 0,
};

const player6 = {
  nome: "Donkey Kong",
  velocidade: 2,
  manobrabilidade: 2,
  poder: 5,
  pontos: 0,
};

async function rollDice() {
  return Math.ceil(Math.random() * 6);
}

async function getRandomBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "RETA";
      break;
    case random < 0.66:
      result = "CURVA";
      break;
    default:
      result = "CONFRONTO";
      break;
  }

  return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${parseInt(
      diceResult + attribute
    )}`
  );
}

async function losePoints(characterWinner, characterLoser) {
  let losePoints = Math.ceil(Math.random() * 2)

  if (losePoints === 1 && characterLoser.pontos > 0) {
      console.log(`${characterWinner.nome} venceu o confronto! ${characterLoser.nome} foi atingido(a) por um CASCO 🐢 e perdeu ${losePoints} ponto(s)!`
      );
      return characterLoser.pontos -=1;
  } 
  
  if (losePoints === 2 && characterLoser.pontos > 1) {
      console.log(`${characterWinner.nome} venceu o confronto! ${characterLoser.nome} foi atingido(a) por uma BOMBA 💣 e perdeu ${losePoints} ponto(s)!`
      );
      return characterLoser.pontos -= 2;

  } else if (losePoints === 2 && characterLoser.pontos === 1){
        console.log(`${characterWinner.nome} venceu o confronto! ${characterLoser.nome} foi atingido(a) por uma BOMBA 💣 e perdeu ${losePoints - 1} ponto(s)!`
      );
      return characterLoser.pontos -=1;
    }
}

async function generateRandomNitro(characterWinner) {
  let random = Math.ceil(Math.random() * 2)

  if (random === 1) {
    console.log(`${characterWinner.nome} Teve grande sorte e pegou um nitro recebendo +1 ponto`);
    
    return characterWinner.pontos += 1
  }
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`);

    // Sortear bloco

    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    // Rolar dados

    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    // Teste de habilidade

    let totalTesteskill1 = 0;
    let totalTesteskill2 = 0;

    if (block === "RETA") {
      totalTesteskill1 = diceResult1 + character1.velocidade;
      totalTesteskill2 = diceResult2 + character2.velocidade;

      await logRollResult(
        character1.nome,
        "velocidade",
        diceResult1,
        character1.velocidade
      );
      await logRollResult(
        character2.nome,
        "velocidade",
        diceResult2,
        character2.velocidade
      );
    }
    if (block === "CURVA") {
      totalTesteskill1 = diceResult1 + character1.manobrabilidade;
      totalTesteskill2 = diceResult2 + character2.manobrabilidade;

      await logRollResult(
        character1.nome,
        "manobrabilidade",
        diceResult1,
        character1.manobrabilidade
      );
      await logRollResult(
        character2.nome,
        "manobrabilidade",
        diceResult2,
        character2.manobrabilidade
      );
    }
    if (block === "CONFRONTO") {
      let powerResult1 = diceResult1 + character1.poder;
      let powerResult2 = diceResult2 + character2.poder;

      console.log(
        `${character1.nome} teve um confronto com ${character2.nome}!🥊`
      );

      await logRollResult(
        character1.nome,
        "poder",
        diceResult1,
        character1.poder
      );
      await logRollResult(
        character2.nome,
        "poder",
        diceResult2,
        character2.poder
      );

      if (powerResult1 > powerResult2 && character2.pontos > 0) {
        await losePoints(character1, character2) 
        await generateRandomNitro(character1)
      }

      if (powerResult2 > powerResult1 && character1.pontos > 0) {
        await losePoints(character2, character1)
        await generateRandomNitro(character2)
      }
      
      if(powerResult1 === powerResult2) {
        console.log("Confronto empatado, nenhum ponto foi perdido!");
      }
    }

    // Verificando o vencedor

    if (totalTesteskill1 > totalTesteskill2) {
      console.log(`${character1.nome} marcou um ponto!`);
      character1.pontos += 1;
    } else if (totalTesteskill1 < totalTesteskill2) {
      console.log(`${character2.nome} marcou um ponto!`);
      character2.pontos += 1;
    }

    console.log("---------------------------------------------------");
  }
}

async function declareWinner(character1, character2) {
    console.log("Resultado final:");
    console.log(`${character1.nome}: ${character1.pontos} ponto(s)`);
    console.log(`${character2.nome}: ${character2.pontos} ponto(s)`);
    
    if (character1.pontos > character2.pontos) 
        console.log(`\n ${character1.nome} venceu a corrida parabéns! 🏆`);
     else if (character2.pontos > character1.pontos) 
        console.log(`\n ${character2.nome} venceu a corrida parabéns! 🏆`);
     else 
        console.log("A corrida terminou em empate");
}

(async function main() {
  console.log(
    `🏁🚨 Corrida entre ${player1.nome} e ${player2.nome} começando... \n`
  );

  await playRaceEngine(player1, player2);
  await declareWinner(player1, player2)
})();
