import { create } from 'zustand'

interface SelectedChatState {
  chatSelected: String,
  modifyChatSelected: (newChat: String) => void
}

export const useSelectedChatStore = create<SelectedChatState>()((set) => ({
  chatSelected: '',
  modifyChatSelected: (newChat: String)=> set(()=> ({chatSelected: newChat}))
}))
