import { useState } from 'react'

interface UserParticipationProps {
   user: string
   averageAmount: number
   totalAmount: number
   onTotalAmount: React.Dispatch<React.SetStateAction<number>>
   onRemove: () => void
}

function UserParticipation({
   user,
   totalAmount,
   onTotalAmount,
   onRemove,
   averageAmount,
}: UserParticipationProps) {
   const [userAmount, setUserAmount] = useState(0)
   const amountDifference = Number((userAmount - averageAmount).toFixed(2))
   const message = amountDifference > 0 ? 'must receive' : 'owes'

   function handleUserAmount(e: React.ChangeEvent<HTMLInputElement>) {
      const newAmount = Number(e.target.value)
      setUserAmount(newAmount)
      onTotalAmount((prev) => prev - userAmount + newAmount)
   }

   function formatName(str: string): string {
      return str.charAt(0).toUpperCase() + str.slice(1)
   }

   return (
      <li className="space-y-5">
         <div className="grid grid-cols-[2rem,auto,auto,auto,auto] items-center justify-items-start">
            <button
               className="h-5 rounded-full bg-red-500 px-[0.4rem] text-[0.6rem]"
               onClick={() => {
                  onRemove()
                  onTotalAmount((prev) => prev - userAmount)
               }}
            >
               X
            </button>

            <h3 className="rounded-md bg-white p-2 font-bold text-slate-800">
               {formatName(user)}
            </h3>
            <span>paid</span>
            <input
               className="w-16 rounded-md bg-white py-2 pl-4 pr-2 text-slate-800"
               type="number"
               value={userAmount}
               onChange={handleUserAmount}
               min={0}
            />
         </div>

         <div className="grid w-full text-center">
            {totalAmount > 0 && (
               <span
                  className={`rounded-md bg-white p-2 ${message === 'must receive' ? 'text-green-700' : 'text-red-700'}`}
               >
                  {message} <strong>{Math.abs(amountDifference)}€</strong>
               </span>
            )}
         </div>
      </li>
   )
}

export default UserParticipation
