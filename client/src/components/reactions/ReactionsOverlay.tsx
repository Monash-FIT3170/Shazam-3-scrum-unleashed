import DisplayReaction from "./DisplayReaction.tsx";
import { useEffect, useRef, useState } from "react";
import ReactionMenu from "./ReactionsMenu.tsx";
import { ReactionList } from "./index.ts";

function ReactionOverlay() {
  const [reactions, setReactions] = useState<
    Record<string, { isAlive: boolean; x: number; y: number; value: string }>
  >({});
  const [selectedReaction, setSelectedReaction] = useState(ReactionList[0]);

  const reactionsRef = useRef(reactions);

  useEffect(() => {
    // Clean up object when reactions have passed their lifetime
    const handle = setInterval(() => {
      for (const key in reactionsRef.current) {
        if (!reactionsRef.current[key].isAlive) {
          delete reactionsRef.current[key];
        }
      }
      setReactions(reactionsRef.current);
    }, 5000);

    return () => {
      setReactions({});
      clearInterval(handle);
    };
  }, []);

  return (
    <div
      className="w-screen h-screen top-0 left-0 fixed z-50"
      onClick={(e) => {
        const reaction = {
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100,
          value: selectedReaction.svg,
        };

        
        reactionsRef.current = {
          ...reactionsRef.current,
          // replace this with unique id generated from backend
          [`${reaction.value}-${reaction.x}-${reaction.y}}`]: {
            isAlive: true,
            ...reaction,
          },
        };
        setReactions(reactionsRef.current);
      }}
    >
      <ReactionMenu
        setSelectedReaction={setSelectedReaction}
        selectedReaction={selectedReaction}
      />
      {Object.entries(reactions).map(([key, { x, y, value }]) => (
        <DisplayReaction
          x={x}
          y={y}
          value={value}
          key={key}
          kill={() => (reactionsRef.current[key].isAlive = false)}
        />
      ))}
    </div>
  );
}

export default ReactionOverlay;
