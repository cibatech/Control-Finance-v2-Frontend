import { NavLink } from "react-router-dom"
import {
  ContainerDefault,
  EstatisticCard,
  HomeContainer,
  TopContainer,
} from "./styles"
import { AccountCard } from "../../components/Cards/AccountCard"
import { GoalCard } from "../../components/Cards/GoalCard"
import { DonutChart } from "./Chart"
import { Summary } from "./HomeSummary"

export function Home() {
  return (
    <HomeContainer>
      <ContainerDefault content="center">
        <EstatisticCard>
          <strong>Saldo total</strong>
          <Summary />
        </EstatisticCard>
        <EstatisticCard>
          <strong>Resumo dos depósitos</strong>
          <DonutChart />
        </EstatisticCard>
        <EstatisticCard>
          <strong>Resumo dos saques</strong>
          <DonutChart />
        </EstatisticCard>
      </ContainerDefault>
      <TopContainer>
        <strong>Contas</strong>
        <NavLink to="/contas">ver mais</NavLink>
      </TopContainer>
      <ContainerDefault content="start">
        <main>
          <AccountCard />
          <AccountCard />
          <AccountCard />
        </main>
      </ContainerDefault>
      <TopContainer>
        <strong>Metas</strong>
        <NavLink to="/metas">ver mais</NavLink>
      </TopContainer>
      <ContainerDefault content="start">
        <main>
          <GoalCard />
          <GoalCard />
          {/* <GoalCard /> */}
        </main>
      </ContainerDefault>
    </HomeContainer>
  )
}
