import { io, Socket } from "socket.io-client"

let socket: Socket

export function connectSocket():Socket{
  if (!socket) {
    socket = io('http://localhost:5000', {
      withCredentials: true,
    });
  }
  return socket
}