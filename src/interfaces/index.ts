import { Key } from "react"

export interface Chat {
  id: String | null,
  name: String | null,
  isGroup: Boolean | null,
  lastMessage: {
    body: String,
    type: String,
    author: String,
  } | null,
  timestamp: Number | null
}

export interface Messages {
  timestamp: Number,
  ack: Number,
  author?: string,
  body: string,
  fromMe: Boolean
}

export interface Message {
  isGroup: boolean,
  message: Messages
}