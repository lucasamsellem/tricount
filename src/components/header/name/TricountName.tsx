import { useState } from 'react'
import TricountNameInput from './TricountNameInput'
import TricountEnteredName from './TricountEnteredName'

function TricountName() {
   const [tricountName, setTricountName] = useState<string>('')
   const [isTricountNameEntered, setIsTricountNameEntered] =
      useState<boolean>(false)

   function handleNameForm(e: React.ChangeEvent<HTMLFormElement>) {
      e.preventDefault()
      if (tricountName !== '') setIsTricountNameEntered(true)
   }

   return (
      <div className="flex items-center justify-center gap-5 pt-10">
         {isTricountNameEntered ? (
            <TricountEnteredName
               tricountName={tricountName}
               onIsTricountNameEntered={setIsTricountNameEntered}
            />
         ) : (
            <TricountNameInput
               handleNameForm={handleNameForm}
               tricountName={tricountName}
               onTricountName={setTricountName}
            />
         )}
      </div>
   )
}

export default TricountName
