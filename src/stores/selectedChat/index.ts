import { Chat } from '@/interfaces'
import { create } from 'zustand'

interface SelectedChatState {
  chatSelected: Chat,
  modifyChatSelected: (newChat: Chat) => void
}

export const useSelectedChatStore = create<SelectedChatState>()((set) => ({
  chatSelected: {
    id: null,
    isGroup: null,
    lastMessage: null,
    name: null,
    timestamp: null
  },
  modifyChatSelected: (newChat: Chat)=> set(()=> ({chatSelected: newChat}))
}))
