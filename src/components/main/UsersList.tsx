import Button from '../Button'
import UserParticipation from './UserParticipation'

interface UsersListProps {
   users: Array<string>
   averageAmount: number
   totalAmount: number
   setUsers: React.Dispatch<React.SetStateAction<Array<string>>>
   onTotalAmount: React.Dispatch<React.SetStateAction<number>>
}

function UsersList({
   users,
   setUsers,
   totalAmount,
   onTotalAmount,
   averageAmount,
}: UsersListProps) {
   const hasUsers = users.length > 0

   function reset() {
      setUsers([])
      onTotalAmount(0)
   }

   function removeUser(index: number): void {
      setUsers((prevUsers) => prevUsers.filter((_, i) => i !== index))
   }

   return (
      <div className="h-fit rounded-md bg-slate-800 text-white">
         <div className="mb-10 flex items-center justify-between">
            <h4 className="text-2xl font-bold">
               Users {hasUsers ? `(${users.length})` : null}
            </h4>

            <button onClick={reset}>
               <Button>Reset &#8634;</Button>
            </button>
         </div>

         <ul className="flex flex-col gap-14">
            {users.map((user, i) => (
               <UserParticipation
                  user={user}
                  key={i}
                  totalAmount={totalAmount}
                  onTotalAmount={onTotalAmount}
                  onRemove={() => removeUser(i)}
                  averageAmount={averageAmount}
               />
            ))}
         </ul>
      </div>
   )
}

export default UsersList
