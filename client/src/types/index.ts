export interface ReactRouterRequest {
  url: string;
}

export interface ReactionProperties {
  x: number;
  y: number;
  value: string;
}

export type HandImgType = "FILLED" | "OUTLINED" | "SEMI_TRANSPARENT" | "NONE";

export type Result = "WIN" | "LOSE" | "TIE" | "NONE";