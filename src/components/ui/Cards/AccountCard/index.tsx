import { useState } from "react"
import { PopeoverOptionsAccount } from "./PopoverOptionsAccount"
import {
  Coins,
  Handshake,
  Landmark,
  Plus,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react"
import {
  AccountCardConatiner,
  AccountSummary,
  ActionsArea,
  ButtonAdd,
  SummaryType,
} from "./styles"
import { NewTransactionModal } from "../../../form/NewTransactionModal"
import { priceFormatter } from "../../../../utils/formatter"

interface AccountCardProps {
  isPageAccounts: boolean
  accountTitle: string
  accountType: string
  income: number
  outcome: number
  total: number
  accountId: string
}

export function AccountCard({
  isPageAccounts,
  accountTitle,
  total,
  income,
  outcome,
  accountId,
  accountType,
}: AccountCardProps) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const iconMap: Record<string, JSX.Element> = {
    Carteira: <Wallet size={32} />,
    ContaBancaria: <Landmark size={32} />,
    CorretoraDeInvestimentos: <Handshake size={32} />,
    Poupanca: <Coins size={32} />,
  }

  return (
    <AccountCardConatiner>
      <header>
        <div>
          {iconMap[accountType] || <Wallet size={32} />}
          <strong>{accountTitle}</strong>
        </div>
        <ActionsArea>
          {isPageAccounts && <PopeoverOptionsAccount accountId={accountId} />}
          <ButtonAdd onClick={handleOpen}>
            <Plus />
          </ButtonAdd>
        </ActionsArea>
      </header>
      <strong>{priceFormatter(total)}</strong>
      <AccountSummary>
        <SummaryType variant="income">
          <div>
            <TrendingUp />
            Depositos
          </div>
          <span>{priceFormatter(income)}</span>
        </SummaryType>
        <SummaryType variant="outcome">
          <div>
            <TrendingDown />
            Saídas
          </div>
          <span>{priceFormatter(outcome)}</span>
        </SummaryType>
      </AccountSummary>
      <NewTransactionModal
        open={open}
        handleClose={handleClose}
        accountId={accountId}
        accountTitle={accountTitle}
      />
    </AccountCardConatiner>
  )
}
