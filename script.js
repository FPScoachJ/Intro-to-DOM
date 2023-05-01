const nflDraftPicks = [
  {
    pickNumber: 1,
    team: "Jacksonville Jaguars",
    player: "Trevor Lawrence",
    position: "Quarterback",
    college: "Clemson",
  },
  {
    pickNumber: 2,
    team: "New York Jets",
    player: "Zach Wilson",
    position: "Quarterback",
    college: "BYU",
  },
  {
    pickNumber: 3,
    team: "San Francisco 49ers",
    player: "Trey Lance",
    position: "Quarterback",
    college: "North Dakota State",
  },
  {
    pickNumber: 4,
    team: "Atlanta Falcons",
    player: "Kyle Pitts",
    position: "Tight End",
    college: "Florida",
  },
];

const nflCards = document.querySelector(".nfl-cards");

for (const picksToAdd of nflDraftPicks) {
  const pickItem = document.createElement("h1");
  const pick = document.createElement("h1");
  const team = document.createElement("h2");
  const player = document.createElement("h3");
  const position = document.createElement("h4");
  const college = document.createElement("p");

  pick.className = "nfl-item";
  pick.innerText = picksToAdd.pickNumber;
  team.innerText = picksToAdd.team;
  player.innerText = picksToAdd.player;
  position.innerText = picksToAdd.position;
  college.innerText = picksToAdd.college;
  pickItem.append(pick, team, player, position, college);
  nflCards.append(pickItem);
}