import PlayerName from "./PlayerNameMobile.tsx";
import StarsInfo from "./StarsInfo.tsx";
import SpectatorCount from "./SpectatorCount.tsx";
import { PlayerAttributes } from "../../../../../types/types.ts";

type PlayerAndSpectatorsInfoProps = {
  userPlayer: PlayerAttributes;
  opponent: PlayerAttributes;
  isSpectator: boolean;
};

const PlayerAndSpectatorsInfo = ({
  userPlayer,
  opponent,
  isSpectator,
}: PlayerAndSpectatorsInfoProps) => {
  return (
    <div>
      <div className="block md:hidden">
        <PlayerName name={opponent.name} isOpponent={true} />
      </div>
      <div className="hidden md:block">
        <StarsInfo
          playerName={opponent.name}
          score={opponent.score}
          isOpponent={true}
          isSpectator={isSpectator}
        />
      </div>

      <div className="block md:hidden">
        <PlayerName name={userPlayer.name} isOpponent={false} />
      </div>
      <div className="hidden md:block">
        <StarsInfo
          playerName={userPlayer.name}
          score={userPlayer.score}
          isOpponent={false}
          isSpectator={isSpectator}
        />
      </div>

      <div className="hidden md:block">
        <SpectatorCount count={userPlayer.spectatorIDs.length} />
      </div>
    </div>
  );
};

export default PlayerAndSpectatorsInfo;
