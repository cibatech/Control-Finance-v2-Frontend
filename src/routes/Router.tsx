import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import { DefaultLayout } from "../layouts/components/DefaultLayout"
import { Home } from "../pages/Home"
import { Transactions } from "../pages/Transactions"
import { Accounts } from "../pages/Accounts"
import { FinancialIncome } from "../pages/FinancialIncome"
import { Goals } from "../pages/Goals"
import { Profile } from "../pages/Profile"
import { SingUp } from "../pages/Register"
import { Auth } from "../pages/Auth"

export function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/singUp" element={<SingUp />} />
      <Route path="/auth" element={<Auth />} />

      <Route path="" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/transacoes/:id?" element={<Transactions />} />
        <Route path="/contas/:id?" element={<Accounts />} />
        <Route path="/metas/:id?" element={<Goals />} />
        <Route path="/rendimento" element={<FinancialIncome />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  )
}
