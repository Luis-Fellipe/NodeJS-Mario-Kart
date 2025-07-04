# 🏁 Mario Kart Terminal Race

<p align="center">
  <img src="./docs/header.gif" alt="Mario Kart Header" width="180" />
</p>

## 🧠 Sobre o Projeto

Este é um minigame de terminal desenvolvido em Node.js que simula corridas entre personagens do universo Mario Kart. Dois competidores disputam uma pista com rodadas aleatórias, onde atributos como **velocidade**, **manobrabilidade** e **poder** definem os resultados.

A lógica foi construída com foco em simulação e aleatoriedade, misturando sorte e estratégia a cada rodada.

---

## 🎮 Personagens Jogáveis

<p align="center">
  <table>
    <tr>
      <td style="text-align:center;">
        <p><b>Mario</b></p>
        <img src="./docs/mario.gif" alt="Mario" width="60" height="60" />
        <p>Velocidade: 4<br>Manobrabilidade: 3<br>Poder: 3</p>
      </td>
      <td style="text-align:center;">
        <p><b>Peach</b></p>
        <img src="./docs/peach.gif" alt="Peach" width="60" height="60" />
        <p>Velocidade: 3<br>Manobrabilidade: 4<br>Poder: 2</p>
      </td>
      <td style="text-align:center;">
        <p><b>Yoshi</b></p>
        <img src="./docs/yoshi.gif" alt="Yoshi" width="60" height="60" />
        <p>Velocidade: 2<br>Manobrabilidade: 4<br>Poder: 3</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:center;">
        <p><b>Bowser</b></p>
        <img src="./docs/bowser.gif" alt="Bowser" width="60" height="60" />
        <p>Velocidade: 5<br>Manobrabilidade: 2<br>Poder: 5</p>
      </td>
      <td style="text-align:center;">
        <p><b>Luigi</b></p>
        <img src="./docs/luigi.gif" alt="Luigi" width="60" height="60" />
        <p>Velocidade: 3<br>Manobrabilidade: 4<br>Poder: 4</p>
      </td>
      <td style="text-align:center;">
        <p><b>Donkey Kong</b></p>
        <img src="./docs/dk.gif" alt="Donkey Kong" width="60" height="60" />
        <p>Velocidade: 2<br>Manobrabilidade: 2<br>Poder: 5</p>
      </td>
    </tr>
  </table>
</p>

---

## 📜 Regras & Mecânicas

- A corrida tem **5 rodadas**, com **blocos aleatórios**:
  - **RETA**: usa o atributo **velocidade**.
  - **CURVA**: usa o atributo **manobrabilidade**.
  - **CONFRONTO**: usa o atributo **poder**.

- Em cada rodada:
  - Os dois personagens rolam um dado de 6 lados e somam ao atributo correspondente.
  - Quem tiver o maior resultado **ganha 1 ponto**.
  - Em confrontos, o perdedor pode **perder pontos** com base em efeitos como **casco 🐢** ou **bomba 💣**.

- A pontuação **nunca fica negativa**.
- Ao final das 5 rodadas, vence quem tiver **mais pontos acumulados**.

---

## ▶️ Como Executar

Para executar este projeto, você precisa ter o Node.js instalado no seu computador. Caso não tenha, acesse [nodejs.org](https://nodejs.org/) e faça o download da versão recomendada para seu sistema operacional.

Depois, siga estes passos:

1. Clone o repositório para sua máquina local utilizando o comando `git clone` seguido do endereço do repositório.

2. Entre na pasta do projeto com o comando `cd` e o nome da pasta criada pelo clone.

3. Finalmente, execute o arquivo principal `index.js` que está dentro da pasta `src` usando o comando `node src/index.js`.

Assim, o minigame será iniciado diretamente no seu terminal, onde você poderá acompanhar as rodadas, os resultados dos dados e a pontuação dos personagens.

---

## 🔗 Licença

Este projeto está licenciado sob a [ISC License](LICENSE).

---

> Simulação divertida e simples de uma corrida estilo Mario Kart, utilizando apenas recursos nativos do Node.js.
