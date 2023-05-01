const nflDraftPicks = [
  {
    pickNumber: 1,
    team: "Jacksonville Jaguars",
    player: "Trevor Lawrence",
    position: "Quarterback",
    college: "Clemson",
    picture:
      "https://static.www.nfl.com/image/private/t_headshot_desktop/league/nel2x2crpaasltsb6vwj",
  },
  {
    pickNumber: 2,
    team: "New York Jets",
    player: "Zach Wilson",
    position: "Quarterback",
    college: "BYU",
    picture:
      "https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/jets/ca6vtuyo1wam1tlsfczi",
  },
  {
    pickNumber: 3,
    team: "San Francisco 49ers",
    player: "Trey Lance",
    position: "Quarterback",
    college: "North Dakota State",
    picture:
      "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4383351.png&w=350&h=254",
  },
  {
    pickNumber: 4,
    team: "Atlanta Falcons",
    player: "Kyle Pitts",
    position: "Tight End",
    college: "Florida",
    picture:
      "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4360248.png",
  },
];

const nflCards = document.querySelector(".nfl-cards");

for (const picksToAdd of nflDraftPicks) {
  const pickItem = document.createElement("div");
  const pick = document.createElement("h1");
  const team = document.createElement("h2");
  const player = document.createElement("h3");
  const position = document.createElement("h4");
  const college = document.createElement("h5");
  const playerImage = document.createElement("img");

  pickItem.className = "nfl-item";
  pick.innerText = picksToAdd.pickNumber;
  team.innerText = picksToAdd.team;
  player.innerText = picksToAdd.player;
  position.innerText = picksToAdd.position;
  college.innerText = picksToAdd.college;
  playerImage.src = picksToAdd.picture;
  pickItem.append(pick, team, player, position, college, playerImage);
  nflCards.append(pickItem);
}