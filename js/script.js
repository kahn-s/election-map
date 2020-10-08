var createPolitician = function (name, partyColor) {
  var politician = {};
  politician.name = name;
  politician.partyColor = partyColor;
  politician.electionResults = null;
  politician.totalVotes = 0;

  // TALLY CANDIDATE VOTES

  politician.tallyTotalVotes = function () {
    this.totalVotes = 0;

    for (var i = 0; i < this.results.length; i++) {
      this.totalVotes = this.totalVotes + this.results[i];
    }
  }; //close tally function

  return politician;
}; //close factory function

var Florick = createPolitician("Flo Florick", [132, 17, 11]);

var Doesitall = createPolitician("Jan Doesitall", [245, 141, 136]);
console.log(" Florick's color is " + Florick.partyColor);
console.log("Doesitall's color is " + Doesitall.partyColor);
// RESULTS

Florick.results = [
  5,
  1,
  7,
  2,
  33,
  6,
  4,
  2,
  1,
  14,
  8,
  3,
  1,
  11,
  11,
  0,
  5,
  3,
  3,
  3,
  7,
  4,
  8,
  9,
  3,
  7,
  2,
  2,
  4,
  2,
  8,
  3,
  15,
  15,
  2,
  12,
  0,
  4,
  13,
  1,
  3,
  2,
  8,
  21,
  3,
  2,
  11,
  1,
  3,
  7,
  2,
];
Doesitall.results = [
  4,
  2,
  4,
  4,
  22,
  3,
  3,
  1,
  2,
  15,
  8,
  1,
  3,
  9,
  0,
  6,
  1,
  5,
  5,
  1,
  3,
  7,
  8,
  1,
  3,
  3,
  1,
  3,
  2,
  2,
  6,
  2,
  14,
  0,
  1,
  6,
  7,
  3,
  7,
  3,
  6,
  1,
  3,
  17,
  3,
  1,
  2,
  11,
  2,
  3,
  1,
];

//update arrays
Florick.results[9] = 1;
Doesitall.results[9] = 28;
Florick.results[4] = 17;
Doesitall.results[4] = 38;
Florick.results[43] = 11;
Doesitall.results[43] = 27;
console.log(
  "The new results for Florida are Florick " +
    Florick.results[9] +
    " Doesitall " +
    Doesitall.results[9] +
    ", for California they are Florick " +
    Florick.results[4] +
    " and Doesitall " +
    Doesitall.results[4] +
    " , and for Texas the results are Florick  " +
    Florick.results[43] +
    " and Doesitall " +
    Doesitall.results[43]
);

Florick.tallyTotalVotes();
Doesitall.tallyTotalVotes();

console.log("Florick total votes = " + Florick.totalVotes);
console.log("Doesitall total votes = " + Doesitall.totalVotes);

//WINNER

var winner;
if (Florick.totalVotes > Doesitall.totalVotes) {
  winner = "Florick";
} else if (Doesitall.totalVotes > Florick.totalVotes) {
  winner = "Doesitall";
} else if (Florick.totalVotes == Doesitall.totalVotes) {
  winner = "Neither";
}

console.log("The winner is " + winner);
//STATE RESULTS

var setStateResults = function (state) {
  theStates[state].winner = null;

  if (Florick.results[state] > Doesitall.results[state]) {
    theStates[state].winner = Florick;
  } else if (Doesitall.results[state] > Florick.results[state]) {
    theStates[state].winner = Doesitall;
  }

  var stateWinner = theStates[state].winner;

  if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
  } else {
    theStates[state].rgbColor = [11, 32, 57];
  }
  //populate state results info table

  var stateInfoTable = document.getElementById("stateResults");
  var header = stateInfoTable.children[0];
  var body = stateInfoTable.children[1];

  var stateName = header.children[0].children[0];
  var abbrev = header.children[0].children[1];
  var candidate1Name = body.children[0].children[0];
  var candidate2Name = body.children[1].children[0];
  var candidate1Results = body.children[0].children[1];
  var candidate2Results = body.children[1].children[1];
  var winnersName = body.children[2].children[1];

  stateName.innerText = theStates[state].nameFull;
  abbrev.innerText = "(" + theStates[state].nameAbbrev + ")";
  candidate1Name.innerText = Florick.name;
  candidate2Name.innerText = Doesitall.name;
  candidate1Results.innerText = Florick.results[state];
  candidate2Results.innerText = Doesitall.results[state];

  if (theStates[state].winner === null) {
    winnersName.innerText = "TIE";
  } else {
    winnersName.innerText = theStates[state].winner.name;
  }
};

//POPULATE COUNTRY RESULTS TABLE

var countryInfoTable = document.getElementById("countryResults");
var row = countryInfoTable.children[0].children[0];
row.children[0].innerText = Florick.name;

row.children[1].innerText = Florick.totalVotes;

row.children[2].innerText = Doesitall.name;

row.children[3].innerText = Doesitall.totalVotes;

row.children[5].innerText = winner;
