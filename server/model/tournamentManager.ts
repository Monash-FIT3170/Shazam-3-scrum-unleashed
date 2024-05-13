//tournament manager class
//tournament class which takes in an array of Player objects, and then constructs the first level of the tournament bracket.
//has functions to help run the tournament, such as constructing the next level of the tournament after people win their matches. can also return specific brackets to display

import Player from "./actors/player";

export class TournamentManager {
  private tournamentBrackets: Player[][];

  constructor(players: Player[]) {
    this.tournamentBrackets = [];
    this.shufflePlayers(players);
    this.fillWithBots(players);
  }

  //getters
  public getRoundNumber(): number {
    return this.tournamentBrackets.length;
  }

  public getBracket(round: number): Player[] {
    return this.tournamentBrackets[round];
  }

  //misc methods

  //method to fill the match with bots if the number of players is not a power of 2
  private fillWithBots(players: Player[]) {
    //this function to find the next power of 2 was taken off stack overflow: https://stackoverflow.com/a/466256
    const nextPowerOf2: number = Math.pow(
      2,
      Math.ceil(Math.log(players.length) / Math.log(2)),
    );
    const numBots: number = nextPowerOf2 - players.length;
    //assuming player IDs are just from 0 to n-1
    let nextID = players.length;
    //fill every 2nd spot with a bot
    const round1: Player[] = [];
    for (let i = 0; i < players.length; i++) {
      round1.push(players[i]);
      if (i < numBots) {
        round1.push(new Player(`🤖 Bot #" + ${String(i)}`, "", nextID, true));
        nextID++;
      }
    }
    this.tournamentBrackets.push(round1);
  }

  private shufflePlayers(players: Player[]): Player[] {
    //use the fisher-yates shuffle algorithm, with the in place modification by Durstenfeld
    for (let i = players.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [players[i], players[rand]] = [players[rand], players[i]];
    }
    return players;
  }

  public createNextBracket(): void {
    // creating the next bracket in the tournament
    let nextBracket = [];
    if (this.tournamentBrackets[-1].length != 1) { // if there is no winner yet
      for (let i = 0; i < this.tournamentBrackets[-1].length; i++){
        if (this.tournamentBrackets[-1][i].getWinstreak() != 0) {
          nextBracket.push(this.tournamentBrackets[-1][i])
        }
      }
    }
    // adding new bracket into tournamentBrackets
    this.tournamentBrackets.push(nextBracket)    
  }
  
  // method used to assist in the drawing of all rounds
  // each subarray contains players who were eliminated / are currently in that round
  // empty subarrays represent the inner rounds that have not been reached yet
  public getAllBracketsResults(): Player[][] {
    // preparing vars required
    let resBrackets = [];
    const playerList = this.tournamentBrackets[0]
    const numPlayers = playerList.length;
    // loop vars
    let roundPlayers = numPlayers;
    let roundIterator = 0;
    // executing loop to create round brackets
    while (roundPlayers != 0) {
      // creating array for all players who lost on that round / are in current round
      let roundBracket = [];
      // looking through all players to push the required players
      for (let i = 0; i < numPlayers; i++) {
        if (playerList[i].getMatchesWon() == roundIterator) {
          roundBracket.push(playerList[i])
        }
      }
      // push to result bracket
      resBrackets.push([]);
      // increment roundPlayers and roundIterator
      roundPlayers = Math.floor(roundPlayers / 2);
      roundIterator ++
    }
    return resBrackets;
  }
}
