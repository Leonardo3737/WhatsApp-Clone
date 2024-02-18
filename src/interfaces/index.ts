export interface Chat {
  id: String,
  name: String,
  isGroup: Boolean,
  lastMessage: {
    body: String,
    type: String,
    author: String,
  },
  timestamp: Number
}

export interface Messages {
  timestamp: Number,
  ack: Number,
  author?: string,
  body: string,
  fromMe: Boolean
}