interface AverageAmountProps {
   users: Array<string>
   averageAmount: number
   isTotalAmountPositive: boolean
}

function AverageAmount({
   users,
   averageAmount,
   isTotalAmountPositive,
}: AverageAmountProps) {
   return users.length > 1 && isTotalAmountPositive ? (
      <h3 className="text-sm italic">
         Average amount per person: <strong>{averageAmount}€</strong>
      </h3>
   ) : null
}

export default AverageAmount
