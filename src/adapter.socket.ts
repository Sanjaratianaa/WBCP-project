import { IoAdapter } from '@nestjs/platform-socket.io';
import { ServerOptions } from 'socket.io';

export class Adapter extends IoAdapter {
  createIOServer(
    port: number,
    options?: ServerOptions & {
      namespace?: string;
      server?: any;
    },
  ) {
    const server = super.createIOServer(port, { 
        ...options, 
        cors: { 
            origin: "http://localhost:5173/", 
            methods: ["GET", "POST"],
            credentials: true,  
        }});
    return server;
  }
}
