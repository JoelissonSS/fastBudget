import { Analytics } from '@vercel/analytics/react';
import BudgetMenu from "./components/budgetMenu/BudgetMenu";

function App() {
  return (
    <>
      <BudgetMenu />
      <Analytics />
    </>
  )
}
export default App;
