import React from "react";

export type GlobalContent = {
  budget: JSX.Element | undefined
  
}

export const BudgetContext = React.createContext<GlobalContent>({
  budget: undefined
})
export const useGlobalContext = () => React.useContext(BudgetContext)
 


