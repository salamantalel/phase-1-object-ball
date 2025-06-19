// Part 1: Building the Game Object
function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1
        }
      }
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12
        }
      }
    }
  };
}

// Part 2: Building Functions

// 1. Function that takes a player's name and returns their points
function numPointsScored(playerName) {
  let game = gameObject();
  
  // Check home team players
  for (let player in game.home.players) {
    if (player === playerName) {
      return game.home.players[player].points;
    }
  }
  
  // Check away team players
  for (let player in game.away.players) {
    if (player === playerName) {
      return game.away.players[player].points;
    }
  }
  
  return null; // Player not found
}

// 2. Function that takes a player's name and returns their shoe size
function shoeSize(playerName) {
  let game = gameObject();
  
  // Check home team players
  for (let player in game.home.players) {
    if (player === playerName) {
      return game.home.players[player].shoe;
    }
  }
  
  // Check away team players
  for (let player in game.away.players) {
    if (player === playerName) {
      return game.away.players[player].shoe;
    }
  }
  
  return null; // Player not found
}

// 3. Function that takes a team name and returns their colors
function teamColors(teamName) {
  let game = gameObject();
  
  if (game.home.teamName === teamName) {
    return game.home.colors;
  } else if (game.away.teamName === teamName) {
    return game.away.colors;
  }
  
  return null; // Team not found
}

// 4. Function that returns an array of team names
function teamNames() {
  let game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

// 5. Function that takes a team name and returns jersey numbers for that team
function playerNumbers(teamName) {
  let game = gameObject();
  let numbers = [];
  
  if (game.home.teamName === teamName) {
    for (let player in game.home.players) {
      numbers.push(game.home.players[player].number);
    }
  } else if (game.away.teamName === teamName) {
    for (let player in game.away.players) {
      numbers.push(game.away.players[player].number);
    }
  }
  
  return numbers;
}

// 6. Function that takes a player's name and returns their stats object
function playerStats(playerName) {
  let game = gameObject();
  
  // Check home team players
  for (let player in game.home.players) {
    if (player === playerName) {
      return game.home.players[player];
    }
  }
  
  // Check away team players
  for (let player in game.away.players) {
    if (player === playerName) {
      return game.away.players[player];
    }
  }
  
  return null; // Player not found
}

// 7. Function that returns rebounds for player with largest shoe size
function bigShoeRebounds() {
  let game = gameObject();
  let largestShoeSize = 0;
  let playerWithLargestShoe = null;
  
  // Check all players for largest shoe size
  for (let teamKey in game) {
    for (let player in game[teamKey].players) {
      let currentShoeSize = game[teamKey].players[player].shoe;
      if (currentShoeSize > largestShoeSize) {
        largestShoeSize = currentShoeSize;
        playerWithLargestShoe = game[teamKey].players[player];
      }
    }
  }
  
  return playerWithLargestShoe ? playerWithLargestShoe.rebounds : null;
}

// Bonus Functions

// Function that returns the player with the most points
function mostPointsScored() {
  let game = gameObject();
  let mostPoints = 0;
  let topPlayer = null;
  
  // Check all players for most points
  for (let teamKey in game) {
    for (let player in game[teamKey].players) {
      let currentPoints = game[teamKey].players[player].points;
      if (currentPoints > mostPoints) {
        mostPoints = currentPoints;
        topPlayer = player;
      }
    }
  }
  
  return topPlayer;
}

// Function that returns the winning team (team with most total points)
function winningTeam() {
  let game = gameObject();
  let homePoints = 0;
  let awayPoints = 0;
  
  // Calculate home team total points
  for (let player in game.home.players) {
    homePoints += game.home.players[player].points;
  }
  
  // Calculate away team total points
  for (let player in game.away.players) {
    awayPoints += game.away.players[player].points;
  }
  
  return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}

// Function that returns the player with the longest name
function playerWithLongestName() {
  let game = gameObject();
  let longestName = "";
  let longestPlayer = null;
  
  // Check all players for longest name
  for (let teamKey in game) {
    for (let player in game[teamKey].players) {
      if (player.length > longestName.length) {
        longestName = player;
        longestPlayer = player;
      }
    }
  }
  
  return longestPlayer;
}

// Super Bonus: Function that returns true if player with longest name had most steals
function doesLongNameStealATon() {
  let game = gameObject();
  let longestNamePlayer = playerWithLongestName();
  let mostSteals = 0;
  let playerWithMostSteals = null;
  
  // Find player with most steals
  for (let teamKey in game) {
    for (let player in game[teamKey].players) {
      let currentSteals = game[teamKey].players[player].steals;
      if (currentSteals > mostSteals) {
        mostSteals = currentSteals;
        playerWithMostSteals = player;
      }
    }
  }
  
  return longestNamePlayer === playerWithMostSteals;
}
