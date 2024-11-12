import { useSelector } from "react-redux"
import Calculator from "../calculator"
import NoResultsInstructions from "../noResultsInstructions"
import YourResults from "../yourResults"
import { rootReducer } from "../../../redux/reduxTypes"

const MortgageCalculator = () => {
  const { monthlyPayment, totalRepayable } = useSelector(
    (rootState: rootReducer) => rootState.calculatorSlice,
  )

  return (
    <main className="flex min-h-screen w-full max-w-[1008px] grid-cols-2 flex-col overflow-hidden bg-white lg:grid lg:min-h-[604px] lg:rounded-3xl">
      <Calculator />

      {monthlyPayment !== 0 || totalRepayable !== 0 ? (
        <YourResults />
      ) : (
        <NoResultsInstructions />
      )}
    </main>
  )
}

export default MortgageCalculator
