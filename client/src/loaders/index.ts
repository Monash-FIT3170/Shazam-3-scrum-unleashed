import { ReactRotuterRequest } from "../types";

export interface NewGameLoaderProps {
  request: ReactRotuterRequest;
}

export const newGameLoader = async ({ request }: NewGameLoaderProps) => {
  const url = new URL(request.url);

  const gameCode = url.searchParams.get("gameCode");
  const qrCode = url.searchParams.get("qrCode");

  // const data = await fetch("http://localhost:3010/create-game", {
  //   method: "POST",
  //   body: JSON.stringify({ hostName: hostName }),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  return { gameCode, qrCode };
};
