import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Input, Button } from "@mui/material"
import { useButton } from '@mui/base';
import "./ChatRoom.css";

type ChatMessage = {
  message: string;
  author: "user" | "bot";
};

const API_KEY = process.env.REACT_APP_CHATGPT_API;

export default function ChatRoom() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  

  const handleFormSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
  
    const userMessage: ChatMessage = {
      message: inputValue,
      author: "user",
    };
  
    setMessages((prevMessages) => [...prevMessages, userMessage]);
  
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          messages: [
            {
              content: `You're a helpful ChatGPT assistant for GPTInterview Demo website.`,
              role: "system",
            },
            {
              content: inputValue,
              role: "user",
            },
          ],
          max_tokens: 1000,
          n: 1,
          stop: "\n",
          model: "gpt-3.5-turbo-0301",
          temperature: 0.7,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );
  
      const botMessage: ChatMessage = {
        message: response.data.choices[0].message.content,
        // message: response.data.choices[0].text,
        author: "bot",
      };
  
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error(error);
    }
  
    setInputValue("");
  };

  return (
    <div className="chat-room">
      <div className="chat-room-header">
        <h2>Chat with AI</h2>
      </div>
      <div className="chat-room-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-message ${message.author === "user" ? "user" : "bot"
              }`}
          >
            {message.message}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat-room-input">
        <form onSubmit={handleFormSubmit}>
          <Input placeholder="Type your message here..." 
              type="text"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)} 
              style={{ width: '100%' }}
          />
          <Button type="submit" color="success">Send</Button>
        </form>
      </div>
    </div>
  );
}