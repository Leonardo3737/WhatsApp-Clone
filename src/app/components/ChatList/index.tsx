'use client'

import { Chat } from "../../../interfaces"
import { apiChat } from "../../../services/apiChat"
import { Key, useState, useEffect } from "react"
import '../../../styles/chatList/styles.css'
import { useSelectedChatStore } from "../../../stores/selectedChat" 
import { connectSocket } from "../../../services/webSocket"
const socket = connectSocket()

const ChatList = () => {
  const [chatList, setChatList] = useState<Chat[]>([])
  const [aux, setAux] = useState<Boolean>(true)
  const setSelectedChat = useSelectedChatStore((state)=> state.modifyChatSelected)
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
    <div className="navBar">
      {chatList.length > 0 ? chatList.map((c: Chat, i:Key) => (
        <div
          key={i}
          className="chatCard"
          onClick={()=>{
            setSelectedChat(c.id)
            setTimeout(()=>{
              console.log(chatList);
            }, 1000)
          }}
        >
          <div className="name">{c.name}</div>
          <div className="messageNavBar">{c.lastMessage ?  c.lastMessage.type === 'chat' ? (<>{c.lastMessage?.body}</>) : (<></>) : (<></>)}</div>
        </div>
      )) : null}
    </div>
  )
}

export default ChatList