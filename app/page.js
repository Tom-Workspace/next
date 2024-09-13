'use client'
import React, { createContext } from 'react'
import Tom from './components/test'

export const Ahmed = createContext();

function Page() {
  return (
    <div>
      <Ahmed.Provider value="tom">
        <Tom />
      </Ahmed.Provider>
    </div>
  )
}

export default Page;
