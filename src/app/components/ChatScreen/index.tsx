import styles from '@/styles/chatScreen/styles.module.css'
import Header from "./Header"
import Messages from "./Messages"
import ChatInput from "../ChatInput"
import { Chat } from '@/interfaces'

const ChatScreen = ({chatSelected, isMobile}: {chatSelected: Chat, isMobile: boolean}) => {

  return(
    <div className={styles.chat}>
      <Header chatSelected={chatSelected} isMobile={isMobile}/>
      <Messages chatSelected={chatSelected}/>
      <ChatInput chatSelected={chatSelected}/>
    </div>
  )
}

export default ChatScreen