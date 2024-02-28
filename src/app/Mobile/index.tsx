import styles from '@/styles/mobile/styles.module.css'
import { Chat } from "@/interfaces"
import ChatScreen from "../components/ChatScreen"
import ChatList from "../components/ChatList"

const Mobile = ({chatSelected}: {chatSelected: Chat}) => {
  return (
    <div className={styles.body}>
      {chatSelected.id ? (
        <ChatScreen 
        chatSelected={chatSelected} 
        isMobile={true}
        />
      ) : (
        <ChatList />
      )}
    </div>
  )
}

export default Mobile