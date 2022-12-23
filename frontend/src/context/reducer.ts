import React from "react";
import { io } from "socket.io-client";

export type State = {
  socket: any;
  roomName: string;
  userPokemon: any[];
  opponentPokemon: any[];
  userPokemonCount: number;
  opponentPokemonCount: number;
  userPokemonHealth: number;
  opponentPokemonHealth: number;
};

export type Action =
  | { type: "SET_SOCKET"; payload: any }
  | { type: "SET_ROOM_NAME"; payload: string }
  | { type: "SET_USER_POKEMON"; payload: any }
  | { type: "SET_OPPONENT_POKEMON"; payload: any }

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_SOCKET":
      const socket = io("http://localhost:8000");
      // window.sessionStorage.setItem("socket", "true");
      return { ...state, socket: socket };
    case "SET_ROOM_NAME":
      return { ...state, roomName: action.payload };
    case "SET_USER_POKEMON":
      // also set userPokemonCount and userPokemonHealth
      return { ...state, userPokemon: action.payload };
    case "SET_OPPONENT_POKEMON":
      // also set opponentPokemonCount and opponentPokemonHealth
      return { ...state, opponentPokemon: action.payload };
    default:
      return state;
  }
};
