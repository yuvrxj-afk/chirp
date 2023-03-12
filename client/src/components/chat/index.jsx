import React from 'react'
import {
  MultiChatWindow,
  MultiChatSocket,
  useMultiChatLogic
} from "react-chat-engine-advanced"
import Header from "@/components/customHeader"

export const Chat = () => {
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    "testuser_",
    "1234"
  )
  return (
    <div style={{ flexBasis: "100%" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow
        {...chatProps}
        style={{ height: "100vh" }}
        renderChatHeader={(chat) => <Header chat={chat} />
        }
      />
    </div>
  )
}
