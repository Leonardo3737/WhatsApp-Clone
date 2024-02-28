import styles from '@/styles/chatScreen/styles.module.css'
import { Key, useEffect, useRef, useState } from "react"
import { apiChat } from "../../../../services/apiChat"
import { Chat, Messages } from "../../../../interfaces/index"
import { connectSocket } from "../../../../services/webSocket"
import Message from "../Message"
import Header from "../Header"
const socket = connectSocket()

const Messages = ({chatSelected}: {chatSelected: Chat}) => {
  const [messages, setMessages] = useState<[{ isGroup: Boolean }, Messages[]] | any[]>([{}, []])
  const [aux, setAux] = useState<Boolean>(true)
  const divRef = useRef<HTMLDivElement>(null);

  const Messages = new apiChat()

  async function get() {
    if (!chatSelected.id) return
    const auxMessages: [{ isGroup: Boolean }, Messages[]] = await Messages.getMessages(chatSelected.id)
    // formatação do numero do autor da mensagem (apenas para grupos)
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
    setTimeout(() => scrollToTheBottom(), 1)
  }
  socket.on('newMessage', () => {
    setTimeout(() => setAux(!aux), 100)
  })

  useEffect(() => {
    setTimeout(() => get(), 1)
  }, [chatSelected, aux])

  return (
    <div
      className={styles.screen}
      ref={divRef}
    >
      {messages.length > 0 ? messages[1].map((m: Messages, i: Key) => m.body.length ? (
        <Message
          key={i}
          isGroup={messages[0].isGroup}
          message={m}
        />
      ) : null) : null}

    </div>
  )
}

export default Messages