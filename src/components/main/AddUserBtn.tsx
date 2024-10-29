import { useState } from 'react'
import UserForm from './UserForm'
import Button from '../Button'

interface UserFormProps {
   users: string[]
   setUsers: React.Dispatch<React.SetStateAction<string[]>>
}

function AddUserBtn({ users, setUsers }: UserFormProps) {
   const [showForm, setShowForm] = useState<boolean>(false)

   return (
      <div className="flex flex-col gap-10">
         <button onClick={() => setShowForm(!showForm)}>
            <Button>Add a user +</Button>
         </button>

         {showForm && <UserForm users={users} setUsers={setUsers} />}
      </div>
   )
}

export default AddUserBtn
