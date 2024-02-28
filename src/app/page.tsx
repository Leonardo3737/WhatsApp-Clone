'use client'
import { useSelectedChatStore } from "@/stores/selectedChat"
import { useMediaQuery } from 'react-responsive';
import styles from '../styles/home/styles.module.css'
import ChatList from "./components/ChatList";
import ChatScreen from './components/ChatScreen';
import Mobile from "./Mobile";

export default function Home() {
  const chatSelected = useSelectedChatStore((state) => state.chatSelected)
  const setSelectedChat = useSelectedChatStore((state) => state.modifyChatSelected)
  const isMobile = useMediaQuery({ maxWidth: 700 })

  const handleKeyDown = (k: any) => {
    if (k.key === 'Escape') setSelectedChat({
      id: null,
      isGroup: null,
      lastMessage: null,
      name: null,
      timestamp: null
    });
  }
  return (
    <main
      tabIndex={0}
      className={styles.body}
      onKeyDown={handleKeyDown}
    >
      {isMobile ? (
        <Mobile chatSelected={chatSelected} />
      ) : (<>
        <ChatList />
        {chatSelected.id ? (
          <ChatScreen
            chatSelected={chatSelected}
            isMobile={false}
          />
        ) : (
          <div className={styles.screen}>Selecione uma conversa</div>
        )}
      </>)}

    </main>
  );
}
