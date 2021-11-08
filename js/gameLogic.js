let currentFlippedCards = [];
let pairedCards = 0;
let rounds = 0;

const beginGame = (amountOfCards) => {
  var amountOfCards = amountOfCards;

  incrementTimer();

  let board = document.querySelector(".board");
  board.style.maxWidth = (amountOfCards * (117 + 34)) / 2 + "px";

  spreadCards();
};

const resetGame = () => {
  let askReset = prompt("Deseja reiniciar o jogo?(digite 'sim')");
  while (askReset !== "sim") {
    askReset = prompt("Para reiniciar o jogo, digite a palavra 'sim'.");
  }

  let board = document.querySelector(".board");

  currentFlippedCards = [];
  pairedCards = 0;
  rounds = 0;
  seconds = 0;

  board.innerHTML = "";
  amountOfCards = prompt(
    "Digite a quantidade de cartas.\nNúmero par entre 4 e 14."
  );

  beginGame(amountOfCards);
};

const spreadCards = () => {
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
    let divFront = document.createElement("div");
    let divBack = document.createElement("div");
    let board = document.querySelector(".board");

    let randomIndex = Math.floor(sortedCards.length * Math.random());

    divFront.setAttribute("class", "front");
    divFront.style.backgroundImage = `url(/assets/front.png)`;
    divFront.setAttribute("data-identifier", "front-face");

    divBack.setAttribute("class", "back");
    divBack.style.backgroundImage = `url(${sortedCards[randomIndex]})`;
    divBack.setAttribute("data-identifier", "back-face");

    card.appendChild(divFront);
    card.appendChild(divBack);
    card.setAttribute("class", "card");
    card.setAttribute("onclick", "onClickCard(this)");
    card.setAttribute("data-identifier", "card");

    board.appendChild(card);
    sortedCards.splice(randomIndex, 1);
  }
};

const onClickCard = (element) => {
  rounds++;

  if (element.style.transform === "rotateY(180deg)") {
    return;
  }

  if (currentFlippedCards.length < 2) {
    currentFlippedCards.push(element);
    element.style.transform = "rotateY(180deg)";

    if (currentFlippedCards.length == 2) {
      if (secondCardFlipped()) {
        currentFlippedCards = [];
        pairedCards++;

        if (pairedCards * 2 >= amountOfCards) {
          endStopwatch(); // porque o tempo continua contando mesmo depois de parar
          setTimeout(
            () =>
              alert(
                `Você ganhou em ${rounds} jogadas e em ${seconds} segundos!`
              ),
            100
          );
          setTimeout(resetGame, 1000);
        }
      } else {
        currentFlippedCards.map((e) => {
          setTimeout(
            () => (
              (e.style.transform = "rotateY(0deg)"), (currentFlippedCards = [])
            ),
            1000
          );
        });
      }
    }
  }
};

const secondCardFlipped = () => {
  let img1 =
    currentFlippedCards[0].querySelector(".back").style.backgroundImage; //pega o src da imagem
  let img2 =
    currentFlippedCards[1].querySelector(".back").style.backgroundImage;

  if (img1 === img2) {
    return true;
  } else return false;
};
