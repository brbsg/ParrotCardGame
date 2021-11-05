const beginGame = () => {
  let amountCards = prompt(
    "Digite a quantidade de cartas.\nNúmero par entre 4 e 14."
  );

  while (amountCards % 2 !== 0 || amountCards < 4 || amountCards > 14) {
    amountCards = parseInt(
      prompt(
        "Para de perder tempo e digita um número certo logo moço.\nNúmero par entre 4 e 14."
      )
    );
  }
  spreadCards();
};

const spreadCards = () => {
  const img = [
    "assets/parrots/bobrossparrot.gif",
    "assets/parrots/explodyparrot.gif",
    "assets/parrots/fiestaparrot.gif",
    "assets/parrots/metalparrot.gif",
    "assets/parrots/revertitparrot.gif",
    "assets/parrots/tripletsparrot.gif",
    "assets/parrots/unicornparrot.gif",
  ];
};
