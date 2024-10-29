interface TotalAmountProps {
   totalAmount: number
   isTotalAmountPositive: boolean
}

function TotalAmount({ totalAmount, isTotalAmountPositive }: TotalAmountProps) {
   return isTotalAmountPositive ? (
      <h2 className="mb-2 text-3xl">
         Total amount: <strong>{totalAmount}€</strong>
      </h2>
   ) : null
}

export default TotalAmount
