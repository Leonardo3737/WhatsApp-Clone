import '../styles/home/styles.css'
import ChatList from "./components/ChatList";
import ChatInput from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";

export default function Home() {
  return (
    <main className="body">
      <ChatList/>
      <div className="chat">
        <ChatMessages/>
        <ChatInput/>

      </div>
    </main>
  );
}
