import { io } from "socket.io-client";


export const socket = io("https://story-life.herokuapp.com/");

export default function ChatService (){
    return socket.on("connect", () => {
        console.log(socket.id);
      });
}