import { roundInitialisor } from "src/controllers/helper/roundHelper";
import Tournament from "src/model/tournament";
import { Server, Socket } from "socket.io";
import { duelStuff } from "./chooseAction";
import { Events } from "../../../../types/socket/events";

export async function startTournamentSocket(
  socket: Socket,
  tournamentCode: string,
  tournamentMap: Map<string, Tournament>,
  io: Server<Events>,
) {
  const tournament = tournamentMap.get(tournamentCode);

  if (tournament?.hostUID !== socket.userID) {
    console.error("You are not the host of this game");
    return;
  }

  if (tournament.players.length < 2) {
    // TODO : Return error to the client
    console.error("Not enough players to start the game");
    return;
  }

  await roundInitialisor(tournament, io);

  for (const match of tournament.matches) {
    match.startTimeout(duelStuff(tournament, io));
  }
}
