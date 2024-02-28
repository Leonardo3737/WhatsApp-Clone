import styles from '../../../styles/chatInput/styles.module.css'
import React, { useState } from 'react';
import { apiChat } from '../../../services/apiChat';
import { IoSend } from "react-icons/io5";
import { Chat } from '@/interfaces';

const ChatInput = ({chatSelected}: {chatSelected: Chat}) => {
  const [message, setMessage] = useState<string>('');

  const sendMessage = () => {
    if(message.length && chatSelected.id){
      const sendMessage = new apiChat()
      sendMessage.sendMessage(message, chatSelected.id)
      setMessage('')      
    }
  }

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <form
        className={styles.form}
        onSubmit={(e) => {
          sendMessage()
          e.preventDefault()
        }}
      >
        <textarea
          onKeyDown={handleKeyDown}
          className={styles.input}
          rows={1}
          value={message}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
        />
        <button
          type='submit'
          className={styles.button}
        >
          <IoSend />
        </button>
      </form>
    </>
  )
}

export default ChatInput