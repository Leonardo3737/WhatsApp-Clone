import styles from '@/styles/chatScreen/styles.module.css'
import { Message } from "@/interfaces"

const Message = ({isGroup, message}: Message) => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: message.fromMe ? 'end' : 'start'
      }}>
      <div
        className={styles.message}
      >
        <div className={styles.author}>{isGroup ? message.author : null}</div>
        <div>{message.body}</div>
      </div>
    </div>
  )
}

export default Message