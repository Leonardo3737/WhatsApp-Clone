import { Chat } from "@/interfaces"
import { apiChat } from "../../../services/apiChat"
import { Key, useState, useEffect } from "react"
import styles from '@/styles/chatList/styles.module.css'
import { connectSocket } from "../../../services/webSocket"
import Card from "./Card"
const socket = connectSocket()

const ChatList = () => {
  const [chatList, setChatList] = useState<Chat[]>([])
  const [aux, setAux] = useState<Boolean>(true)
  
  const chats = new apiChat()

  async function get() {
    const aux = await chats.getChats()
    setChatList(aux)
  }

  socket.on('newMessage', () => {
    setTimeout(()=>setAux(!aux), 300)
  })

  useEffect(() => {
    get()
  }, [aux])

  return (
    <div className={styles.navBar}>
      {chatList.length > 0 ? chatList.map((c: Chat, i:Key) => (
        <Card 
          chat={c}
          key={i}
        />
      )) : null}
    </div>
  )
}

export default ChatList