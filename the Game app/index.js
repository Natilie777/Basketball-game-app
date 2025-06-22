document.getElementById("resetBtn").textContent = "A new game";
let homePlayer = document.getElementById("homeBtn");
homePlayer.textContent = 0;
let guestPlayer = document.getElementById("guestBtn");
guestPlayer.textContent = 0;
let completedGames = document.getElementById("completedBtn");
completedGames.textContent = 0;
let theLeader = document.getElementById("leaderBtn");
theLeader.textContent = "Draw!";
let plusOne = document.getElementsByClassName("plusOne");
let count1 = 0;
let count2 = 0;

for (let i = 0; i < plusOne.length; i++) {
  plusOne[i].textContent = "+1";
}

let plusTwo = document.getElementsByClassName("plusTwo");

for (let i = 0; i < plusOne.length; i++) {
  plusTwo[i].textContent = "+2";
}
let plusThree = document.getElementsByClassName("plusThree");

for (let i = 0; i < plusOne.length; i++) {
  plusThree[i].textContent = "+3";
}

function incrementScoreOneHome() {
  count1 += 1;
  homePlayer.textContent = count1;
}

function incrementScoreTwoHome() {
  count1 += 2;
  homePlayer.textContent = count1;
}
function incrementScoreThreeHome() {
  count1 += 3;
  homePlayer.textContent = count1;
}

function incrementScoreOneGuest() {
  count2 += 1;
  guestPlayer.textContent = count2;
}

function incrementScoreTwoGuest() {
  count2 += 2;
  guestPlayer.textContent = count2;
}
function incrementScoreThreeGuest() {
  count2 += 3;
  guestPlayer.textContent = count2;
}
function newGame() {
  count1 = 0;
  homePlayer.textContent = count1;
  count2 = 0;
  guestPlayer.textContent = count2;
}
let numberOfGames = 0;
function numOfGames() {
  numberOfGames += 1;
  completedGames.textContent = numberOfGames;
}
function winnerCounter() {
  if (count1 > count2) {
    theLeader.textContent = "Home Player win!!!";
  } else if (count1 < count2) {
    theLeader.textContent = "Guest player win";
  } else theLeader.textContent = "Draw!";
}
function reset() {
  let count1 = 0;
  let count2 = 0;
  let numberOfGames = 0;
  homePlayer.textContent = 0;
  guestPlayer.textContent = 0;
  completedGames.textContent = 0;
  theLeader.textContent = "Draw!";
}
