const beginGame = () => {
  let amountOfCards = prompt(
    "Digite a quantidade de cartas.\nNúmero par entre 4 e 14."
  );

  while (amountOfCards % 2 !== 0 || amountOfCards < 4 || amountOfCards > 14) {
    amountOfCards = parseInt(
      prompt(
        "Para de perder tempo e digita um número certo logo moço.\nNúmero par entre 4 e 14."
      )
    );
  }

  let board = document.querySelector(".board");
  board.style.width = (amountOfCards * (117 + 34)) / 2 + "px";

  spreadCards(amountOfCards);
};

const spreadCards = (amountOfCards) => {
  let sortedCards = [];

  const imgArr = [
    "assets/parrots/bobrossparrot.gif",
    "assets/parrots/explodyparrot.gif",
    "assets/parrots/fiestaparrot.gif",
    "assets/parrots/metalparrot.gif",
    "assets/parrots/revertitparrot.gif",
    "assets/parrots/tripletsparrot.gif",
    "assets/parrots/unicornparrot.gif",
  ];

  //seleciona os pares de parrots que irão ser utilizados
  for (let i = 0; i < amountOfCards / 2; i++) {
    let randomIndex = Math.floor(imgArr.length * Math.random());

    sortedCards.push(imgArr[randomIndex]);
    sortedCards.push(imgArr[randomIndex]);

    imgArr.splice(randomIndex, 1); //remove os gifs já utilizados
  }

  while (sortedCards.length !== 0) {
    let card = document.createElement("div");
    let img = document.createElement("img");
    let board = document.querySelector(".board");

    let randomIndex = Math.floor(sortedCards.length * Math.random());

    img.setAttribute("src", sortedCards[randomIndex]);
    card.appendChild(img);

    board.appendChild(card);
    sortedCards.splice(randomIndex, 1);
  }
};
