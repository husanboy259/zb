import { io, type Socket } from 'socket.io-client';

let socket: Socket | null = null;

export function getSocket(): Socket {
  if (!socket) {
    socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:4000', {
      autoConnect: false,
      transports: ['websocket'],
      auth: {
        token: typeof window !== 'undefined' ? localStorage.getItem('ichat_token') : null,
      },
    });
  }
  return socket;
}
