import React, { useState } from 'react'
import AddUserBtn from './components/main/AddUserBtn'
import UsersList from './components/main/UsersList'
import AverageAmount from './components/header/AverageAmount'
import TotalAmount from './components/header/TotalAmount'
import TricountName from './components/header/name/TricountName'

function App() {
   const [users, setUsers] = useState<Array<string>>([])
   const [totalAmount, setTotalAmount] = useState<number>(0)
   const averageAmount = Number((totalAmount / users.length).toFixed(2))
   const isTotalAmountPositive = totalAmount > 0

   return (
      <div className="sm: min-h-screen bg-slate-800 px-10">
         <header className="text-center text-white">
            <TricountName />

            <div className="mt-10">
               <TotalAmount
                  totalAmount={totalAmount}
                  isTotalAmountPositive={isTotalAmountPositive}
               />
               <AverageAmount
                  users={users}
                  averageAmount={averageAmount}
                  isTotalAmountPositive={isTotalAmountPositive}
               />
            </div>
         </header>

         <main className="mt-20 grid gap-10 sm:grid-cols-2">
            <AddUserBtn users={users} setUsers={setUsers} />
            <UsersList
               users={users}
               setUsers={setUsers}
               totalAmount={totalAmount}
               onTotalAmount={setTotalAmount}
               averageAmount={averageAmount}
            />
         </main>
      </div>
   )
}

export default App
