import { io } from "socket.io-client";


export const socket = io("http://192.168.100.13:8000");

export default function ChatService (){
    return socket.on("connect", () => {
        console.log(socket.id);
      });
}