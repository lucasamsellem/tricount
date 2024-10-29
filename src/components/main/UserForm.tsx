import { useState } from 'react'
import Button from '../Button'

interface UserFormProps {
   users: Array<string>
   setUsers: React.Dispatch<React.SetStateAction<string[]>>
}

function UserForm({ users, setUsers }: UserFormProps) {
   const [inputValue, setInputValue] = useState<string>('')

   function handleSetUsers(e: React.MouseEvent<HTMLDivElement>) {
      e.preventDefault()

      if (inputValue.trim() !== '') {
         setUsers([...users, inputValue])
         setInputValue('')
      }
   }

   return (
      <form className="gap-10 rounded-md border-[1px] p-4 text-white">
         <div className="flex flex-col items-start gap-2">
            <label htmlFor="name" className="font-bold text-white">
               Name
            </label>
            <input
               className="focus:none mb-4 rounded-md border-[1px] border-solid border-white bg-slate-800 py-2 pl-4 text-white outline-none"
               type="text"
               id="name"
               name="name"
               placeholder="Enter a name..."
               value={inputValue}
               onChange={(e) => setInputValue(e.target.value)}
               autoFocus
            />

            <div onClick={handleSetUsers}>
               <Button>Submit</Button>
            </div>
         </div>
      </form>
   )
}

export default UserForm
