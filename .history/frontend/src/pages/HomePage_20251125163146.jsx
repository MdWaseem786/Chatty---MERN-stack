import React from 'react'
import { useChatStore } from '../store/useChatStore'

export const HomePage = () => {
  const{selectedUsers} = useChatStore();




  return (
    <div>HomePage</div>
  )
}
