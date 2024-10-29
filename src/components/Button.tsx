import React from 'react'

function Button({ children }: { children: React.ReactNode }) {
   return (
      <button className="rounded-md bg-white p-2 font-bold text-slate-800 transition-all duration-200 active:scale-95">
         {children}
      </button>
   )
}

export default Button
