import "./App.css";
// import JoinGame from "./pages/JoinGame.tsx";
// import {
//   Route,
//   createBrowserRouter,
//   createRoutesFromElements,
//   RouterProvider,
// } from "react-router-dom";
// import { io, Socket } from "socket.io-client";
// import { Events } from "../../types/socket/events.ts";
// import HostGame from "./pages/HostGame.tsx";
// import {
//   BASE_PATH,
//   HOST_GAME_PATH,
//   HOME_PATH,
//   JOIN_GAME_PATH,
//   GAME_LOBBY_PATH,
//   PLAYER_SCREEN,
// } from "./pages/pagePaths.ts";
// import GameLobby from "./pages/GameLobby.tsx";
// import { joinedGameLoader, joinGameLoader, newGameLoader } from "./loaders";
// import PlayerScreen from "./pages/PlayerScreen.tsx";
// import GameRoundScreen from "./pages/gameRoundScreen.tsx";
import DuelMatchEnd from "./pages/Duel.tsx";

// export const socket: Socket<Events> = io("http://localhost:3010");

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path={BASE_PATH}>
//       <Route path={HOME_PATH} element={<GameRoundScreen />} />
//       <Route
//         path={JOIN_GAME_PATH}
//         element={<JoinGame />}
//         loader={joinGameLoader}
//       />
//       <Route path={HOST_GAME_PATH} element={<HostGame />} />
//       <Route
//         path={GAME_LOBBY_PATH}
//         element={<GameLobby />}
//         loader={newGameLoader}
//       />
//       <Route
//         path={PLAYER_SCREEN}
//         element={<PlayerScreen />}
//         loader={joinedGameLoader}
//       />
//     </Route>,
//   ),
// );

function App() {
  return (
    <div>
      <DuelMatchEnd 
        player1Name="PATRICK" player1Win={true} player1Type="paper" player1Score={1}
        player2Name="SPONGEBOB" player2Win={false}  player2Type="scissors" player2Score={1} matchResult="tie"/>
    </div>
  );
}

// function App() {
//   return(
//     <div>
//       <div>{window.innerHeight}</div>
//       <div>{window.innerWidth}</div>
//     </div>
//   )
// }

export default App;