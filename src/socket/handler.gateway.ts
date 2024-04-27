import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets"

@WebSocketGateway(8000, { 
    cors: { 
        origin: "http://localhost:5173",
    } 
},)
export class HandlerGateWay{
    
    @WebSocketServer()
    server;
    
    private positions: Map<string, { x: number, y: number, z: number }> = new Map();

    @SubscribeMessage('message')
    handleMessage(@MessageBody() message: string, ): void {
        console.log("message ",message);
        this.server.emit('message', message);
    } 

    @SubscribeMessage('client')
    handleClient(@MessageBody() data: { clientId: string, position: { x: number, y: number, z: number } }): void {
        console.log("client ", data.clientId, data.position);
        this.positions.set(data.clientId, data.position);
        this.server.emit('client', Array.from(this.positions.entries()));
    }
}