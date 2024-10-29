interface TricountNameInputProps {
   handleNameForm: React.FormEventHandler<HTMLFormElement>
   tricountName: string
   onTricountName: (name: string) => void
}

function TricountNameInput({
   handleNameForm,
   tricountName,
   onTricountName,
}: TricountNameInputProps) {
   return (
      <form className="flex gap-5" onSubmit={handleNameForm}>
         <input
            type="text"
            placeholder="Tricount name"
            className="rounded-md bg-white py-2 pl-4 text-slate-800"
            value={tricountName}
            onChange={(e) => onTricountName(e.target.value)}
         />

         <button type="submit">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth={1.5}
               stroke="currentColor"
               className="size-10 rounded-full bg-white p-2"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
               />
            </svg>
         </button>
      </form>
   )
}

export default TricountNameInput
