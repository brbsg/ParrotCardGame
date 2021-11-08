let amountOfCards = prompt(
  "Digite a quantidade de cartas.\nNúmero par entre 4 e 14."
);
while (amountOfCards % 2 !== 0 || amountOfCards < 4 || amountOfCards > 14) {
  amountOfCards = parseInt(
    prompt(
      "Para de perder tempo e digita um número certo logo cara.\nNúmero par entre 4 e 14."
    )
  );
}

beginGame(amountOfCards);

renderClock();
