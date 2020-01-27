import express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';

const PORT = 8999;

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

interface Client {
    id: string;
    socket: WebSocket;
}

var clientNum = 0;
function getNextClientId(): string {
    return `${clientNum++}`;
}

const clients: Map<string, Client> = new Map<string, Client>();

wss.on('connection', (ws: WebSocket) => {

    const client: Client = {
        id: getNextClientId(),
        socket: ws
    };

    clients.set(client.id, client);
    console.log(`Client connected: ${client.id}`);

    ws.send(`Hi there, I am a WebSocket server. You are client ${client.id}`);

    ws.on('message', (message: string) => {
        console.log(`Received (from client ${client.id}: ${message}`);
        ws.send(`Hello, you sent -> ${message}`);
    });
});

//start our server
server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});