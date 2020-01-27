const ws: WebSocket = new WebSocket("ws://localhost:8999/");

ws.onopen = function (event) {
    ws.send("Here's some text that the server is urgently awaiting!");
};

ws.onmessage = function(e) {
    console.log(e);
};

const ws2: WebSocket = new WebSocket("ws://localhost:8999/");

ws2.onopen = function (event) {
    ws2.send("I am another client!");
};

ws2.onmessage = function(e) {
    console.log(e);
};
