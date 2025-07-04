# 🏁 Mario Kart Terminal Race

![Mario Kart Header](./docs/header.gif)

## 🧠 Sobre o Projeto

Este é um minigame de terminal desenvolvido em Node.js que simula corridas entre personagens do universo Mario Kart. Dois competidores disputam uma pista com rodadas aleatórias, onde atributos como **velocidade**, **manobrabilidade** e **poder** definem os resultados.

A lógica foi construída com foco em simulação e aleatoriedade, misturando sorte e estratégia a cada rodada.

---

## 🎮 Personagens Jogáveis

| Personagem      | Atributos                                      | Preview                     |
|-----------------|------------------------------------------------|-----------------------------|
| **Mario**       | Velocidade: 4<br>Manobrabilidade: 3<br>Poder: 3 | ![Mario](./docs/mario.gif)       |
| **Peach**       | Velocidade: 3<br>Manobrabilidade: 4<br>Poder: 2 | ![Peach](./docs/peach.gif)       |
| **Yoshi**       | Velocidade: 2<br>Manobrabilidade: 4<br>Poder: 3 | ![Yoshi](./docs/yoshi.gif)       |
| **Bowser**      | Velocidade: 5<br>Manobrabilidade: 2<br>Poder: 5 | ![Bowser](./docs/bowser.gif)     |
| **Luigi**       | Velocidade: 3<br>Manobrabilidade: 4<br>Poder: 4 | ![Luigi](./docs/luigi.gif)       |
| **Donkey Kong** | Velocidade: 2<br>Manobrabilidade: 2<br>Poder: 5 | ![Donkey Kong](./docs/dk.gif)    |

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
3. Finalmente, execute o arquivo principal `index.js` usando o comando `node index.js`.

Assim, o minigame será iniciado diretamente no seu terminal, onde você poderá acompanhar as rodadas, os resultados dos dados, e a pontuação dos personagens.

---

## 🔗 Licença

Este projeto está licenciado sob a [ISC License](LICENSE).

---

> Simulação divertida e simples de uma corrida estilo Mario Kart, utilizando apenas recursos nativos do Node.js.
