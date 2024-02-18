'use client'
import React, { useState } from 'react';
import { apiChat } from '../../../services/apiChat';
import '../../../styles/chatInput/styles.css'
import { IoSend } from "react-icons/io5";
import { useSelectedChatStore } from '../../../stores/selectedChat';

const ChatInput = () => {
  const [message, setMessage] = useState<string>('');
  const chatSelected = useSelectedChatStore((state:any)=> state.chatSelected)

  const sendMessage = () => {
    if(message.length){
      const sendMessage = new apiChat()
      sendMessage.sendMessage(message, chatSelected)
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
        id='form'
        onSubmit={(e) => {
          sendMessage()
          e.preventDefault()
        }}
      >
        <textarea
          onKeyDown={handleKeyDown}
          id='input'
          rows={1}
          value={message}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
        />
        <button
          type='submit'
        >
          <IoSend />
        </button>
      </form>
    </>
  )
}

export default ChatInput