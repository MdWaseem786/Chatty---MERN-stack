import React from 'react'
import { useChatStore } from '../store/useChatStore'
import {Sidebar, ChatContainer, NoChatSelected} from '../components/'

export const HomePage = () => {
  const{selectedUsers} = useChatStore();
  <div className="h-screen bg-base-200">
  <div className="flex items-center justify-center pt-20 px-4">
    <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]">
      <div className="flex h-full rounded-lg overflow-hidden">

        <Sidebar />

        {/* Correct conditional rendering */}
        {selectedUsers ? <ChatContainer /> : <NoChatSelected />}

      </div>
    </div>
  </div>
</div>




  return (
    <div>HomePage</div>
  )
}
