import styles from '@/styles/chatScreen/styles.module.css'
import { Chat } from "@/interfaces"
import { FaArrowLeft } from "react-icons/fa";
import { useSelectedChatStore } from '@/stores/selectedChat';

const Header = ({ chatSelected, isMobile }: { chatSelected: Chat, isMobile: boolean }) => {
  const setSelectedChat = useSelectedChatStore((state) => state.modifyChatSelected)
  return (
    <div className={styles.header}>
      {isMobile ? (
        <div
          className={styles.button}
          onClick={() => setSelectedChat({
            id: null,
            isGroup: null,
            lastMessage: null,
            name: null,
            timestamp: null
          })}
        >
          <FaArrowLeft />
        </div>
      ) : <></>}
      <div className={styles.title}>
        {chatSelected.name}
      </div>
    </div>
  )
}

export default Header