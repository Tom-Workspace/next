'use client'
import React from 'react';
import Tom from './components/test';
import { Ahmed } from './context';

function Page() {
  return (
    <div>
      <Ahmed.Provider value="tom">
        <Tom />
      </Ahmed.Provider>
    </div>
  );
}

export default Page;
