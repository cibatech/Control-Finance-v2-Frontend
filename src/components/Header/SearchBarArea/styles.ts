import Modal from "@mui/material/Modal"
import styled from "styled-components"

export const ModalStyled = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContainerModal = styled.div`
  background-color: ${(props) => props.theme.primaryGray};
  width: 33.75rem;
  min-height: 20rem;
  padding: 1.25rem;
  border-radius: 12px;
  display: flex;

  flex-direction: column;
  gap: 0.75rem;

  header {
    width: 100%;
    display: inline-flex;
    gap: 1.5rem;

    button {
      background-color: transparent;
      border: 0;
      font-size: 1rem;
      color: ${(props) => props.theme.primary};
      cursor: pointer;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  @media (max-width: 768px) {
    & {
      height: 100vh;
      border-radius: 0;
    }
  }
`

export const InputAreaFunctional = styled.div`
  border-radius: 12px;
  background-color: ${(props) => props.theme.secundaryGray};
  color: ${(props) => props.theme.text};
  height: 2.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  flex: 1;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  input {
    background-color: transparent;
    border: 0;
    color: ${(props) => props.theme.text};
    flex: 1;
    /* height: 1.25rem; */
    line-height: 0.5;
    font-size: 1rem;
  }

  input::placeholder {
    color: ${(props) => props.theme.text};
    font-size: 1rem;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    & {
      /* display: none; */
    }
  }
`

export const SuggestionArea = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.75rem;

  header {
    display: flex;
    justify-content: space-between;

    span {
      color: ${(props) => props.theme.terciaryGray};
      font-weight: 300;
      font-size: 0.875rem;
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme.secundary};
    }
  }

  ul {
    display: inline-flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`

export const Suggestion = styled.li`
  background-color: ${(props) => props.theme.secundaryGray};
  border-radius: 8px;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  color: ${(props) => props.theme.text};
  flex: 1;

  svg {
    color: ${(props) => props.theme.secundary};
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;

    span {
      border-radius: 8px;
      width: 1.5rem;
      height: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${(props) => props.theme.primaryGray};

      svg {
        width: 1rem;
        height: 1rem;
      }
    }
  }
`
