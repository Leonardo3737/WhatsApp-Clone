import styles from '@/styles/chatList/styles.module.css'
import { Chat } from "@/interfaces"
import { useSelectedChatStore } from "@/stores/selectedChat"

const Card = ({ chat }: { chat: Chat }) => {
  const setSelectedChat = useSelectedChatStore((state) => state.modifyChatSelected)
  return (
    <div
      className={styles.chatCard}
      onClick={() => setSelectedChat(chat)}
    >
      <div className={styles.name}>{chat.name}</div>
      <div className={styles.messageNavBar}>{
        chat.lastMessage ?
          chat.lastMessage.type === 'chat' ? (<>{chat.lastMessage?.body}</>) :
            chat.lastMessage.type === 'sticker' ? (<>Figurinha</>) :
              chat.lastMessage.type === 'ptt' ? (<>Audio</>) :
                chat.lastMessage.type === 'image' ? (<>Imagem</>) :
                  (<></>) : (<></>)}</div>
    </div>
  )
}

export default Card