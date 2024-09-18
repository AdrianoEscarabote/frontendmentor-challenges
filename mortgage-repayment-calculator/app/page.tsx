import { Provider } from "react-redux"
import Calculator from "./_components/calculator"
/* import NoResultsInstructions from "./_components/noResultsInstructions" */
import YourResults from "./_components/yourResults"
import store from "../redux/store"

export default function Home() {
  return (
    <main className="grid min-h-[604px] w-full max-w-[1008px] grid-cols-2 overflow-hidden rounded-3xl bg-white">
      <Provider store={store}>
        <Calculator />

        <YourResults />
        {/* <NoResultsInstructions /> */}
      </Provider>
    </main>
  )
}
