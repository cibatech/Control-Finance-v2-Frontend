import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AccountsContext } from "../../contexts/accountsContext"
import { AccountCard } from "../../components/Cards/AccountCard"
import { GoalCard } from "../../components/Cards/GoalCard"
import { DonutChart } from "./Chart"
import { Summary } from "./HomeSummary"
import { GoalsContext } from "../../contexts/goalsContext"
import { EmptyAccounts } from "../../components/EmptyComponent"
import { LinearProgressCustom } from "../Accounts/styles"
import {
  DefaultContainer,
  EstatisticCard,
  HomeContainer,
  TopContainer,
} from "./styles"

export function Home() {
  const { accountsList, isLoading } = useContext(AccountsContext)
  const { goalsList, isLoadingGoals } = useContext(GoalsContext)

  return (
    <HomeContainer>
      <DefaultContainer content="center">
        <EstatisticCard>
          <strong>Saldo total</strong>
          <Summary />
        </EstatisticCard>
        <EstatisticCard>
          <strong>Resumo dos depósitos</strong>
          <DonutChart chartType="DEP" />
        </EstatisticCard>
        <EstatisticCard>
          <strong>Resumo dos saques</strong>
          <DonutChart chartType="SAL" />
        </EstatisticCard>
      </DefaultContainer>
      <TopContainer>
        <strong>Contas</strong>
        <NavLink to="/contas">ver mais</NavLink>
      </TopContainer>
      <DefaultContainer content="start">
        <main>
          {accountsList.length === 0 && <EmptyAccounts mensageType="conta" />}
          {isLoading === true ? (
            <LinearProgressCustom />
          ) : (
            accountsList
              .slice(0, 3)
              .map((account) => (
                <AccountCard
                  accountTitle={account.accountTitle}
                  accountId={account.AcId}
                  accountType={account.Type}
                  income={account.DepositValue}
                  outcome={account.WithdrawValue}
                  total={account.sum}
                  isPageAccounts={false}
                  key={account.AcId}
                />
              ))
          )}
        </main>
      </DefaultContainer>
      <TopContainer>
        <strong>Metas</strong>
        <NavLink to="/metas">ver mais</NavLink>
      </TopContainer>
      <DefaultContainer content="start">
        {goalsList.length === 0 && <EmptyAccounts mensageType="meta" />}
        <main>
          {isLoadingGoals ? (
            <LinearProgressCustom />
          ) : (
            goalsList
              .slice(0, 3)
              .map((goal, index) => (
                <GoalCard
                  key={index}
                  title={goal.Title}
                  currentValue={goal.Value}
                  targetValue={goal.TargetedValue}
                  goalDate={goal.EndTime}
                  goalId={goal.Id}
                  isGoalsPage={false}
                />
              ))
          )}
        </main>
      </DefaultContainer>
    </HomeContainer>
  )
}
