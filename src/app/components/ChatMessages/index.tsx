'use client'
import { Key, useEffect, useRef, useState } from "react"
import { apiChat } from "../../../services/apiChat"
import '../../../styles/chatMessages/styles.css'
import { Messages } from "../../../interfaces/index"
import { useSelectedChatStore } from "../../../stores/selectedChat"
import { connectSocket } from "../../../services/webSocket"
const socket = connectSocket()

const ChatMessages = () => {
  const [messages, setMessages] = useState<[{ isGroup: Boolean }, Messages[]] | any[]>([{}, []])
  const [aux, setAux] = useState<Boolean>(true)
  const divRef = useRef<HTMLDivElement>(null);
  const chatSelected = useSelectedChatStore((state) => state.chatSelected)

  const Messages = new apiChat()

  async function get() {
    const auxMessages: [{ isGroup: Boolean }, Messages[]] = await Messages.getMessages(chatSelected)
    // formatação do numero do autor da mensagem
    /* const aux = [auxMessages[0], auxMessages[1].map((m:Messages)=>{
      const author:string = m.author?.indexOf("@c.us") !== -1 
      ? "+ " + m.author?.slice(0, 2) + " " + m.author?.slice(2, 4) + " " + m.author?.slice(4, 8) + "-" + m.author?.slice(8, 12)
      : m.author
      return {
        ...m,
        author: author
      } 
    })]  */   
    setMessages(auxMessages)
    const scrollToTheBottom = () => {
      const scrollEl = divRef.current;
      scrollEl?.scroll({
        top: scrollEl?.scrollHeight,
      });
    };
    setTimeout(() => scrollToTheBottom(), 0)
  }
  socket.on('newMessage', () => {
    setTimeout(() => setAux(!aux), 100)
  })

  useEffect(() => {
    get()
  }, [chatSelected, aux])

  return (
    <div
      className="screen"
      ref={divRef}
    >
      {messages.length > 0 ? messages[1].map((m: Messages, i: Key) => m.body.length ? (
        <div
          key={i}
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: m.fromMe ? 'end' : 'start'
          }}>
          <div
            className='message'
          >
            <div className="author">{messages[0].isGroup ? m.author : null}</div>
            <div>{m.body}</div>
          </div>
        </div>
      ): null) : null}

    </div>
  )
}

export default ChatMessages