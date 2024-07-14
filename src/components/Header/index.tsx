import { CircleUserRound, Moon, Search, Sun } from "lucide-react"
import {
  ActionsContainer,
  HeaderContainer,
  InputArea,
  LeftContainer,
} from "./styles"
import logoWhite from "../../assets/logo-white.svg"
import logoDark from "../../assets/logo-dark.svg"
import { NavLink } from "react-router-dom"
import { DrawerBasic } from "./Drawer"
import { SearchBarArea } from "./SearchBarArea"
import { useContext, useState } from "react"
import { ThemeContext } from "../../contexts/styledThemeContext"

export function Header() {
  const themeContext = useContext(ThemeContext)

  if (!themeContext) {
    throw new Error("Default value underfined")
  }

  const { theme, toggleTheme } = themeContext

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <HeaderContainer>
      <LeftContainer>
        <DrawerBasic />
        <img src={theme === "light" ? logoWhite : logoDark} />
      </LeftContainer>
      <InputArea onClick={handleOpen}>
        <Search />
        <div>
          <span>Pesquisar</span>
        </div>
      </InputArea>
      <ActionsContainer>
        <button onClick={handleOpen}>
          <Search />
        </button>
        <button onClick={toggleTheme}>
          {theme === "light" ? <Sun /> : <Moon />}
        </button>
        <NavLink to="/profile">
          <CircleUserRound />
          <span>Preferências da conta</span>
        </NavLink>
      </ActionsContainer>

      <SearchBarArea open={open} handleClose={handleClose} />
    </HeaderContainer>
  )
}
