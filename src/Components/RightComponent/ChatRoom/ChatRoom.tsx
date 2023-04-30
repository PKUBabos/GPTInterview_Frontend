// import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";

export function ChatRoom() {
  return (
    <div style={{ position: "relative", height: "100%" }}>
      <MainContainer>
        <ChatContainer>
          <MessageList>
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "just now",
                sender: "Joe",
                direction: "incoming",
                position: 'last'
              }}
            />
          </MessageList>
          <MessageInput placeholder="Type message here" />
        </ChatContainer>
      </MainContainer>
    </div>
  );
}
