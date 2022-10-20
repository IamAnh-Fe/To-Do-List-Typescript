import React from "react";

import styled from "styled-components";
import { Outlet, NavLink } from "react-router-dom";
import { colors, GlobalStyle } from "./styles/styles";

import TaskContext from "./contexts/TaskContext";
import useLocalStorage from "./hooks/useLocalStorage";
import { Task } from "./Types/Types";
const Layout = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 35px;
`;

const Nav = styled.nav`
  display: flex;
  margin-bottom: 45px;
`;

const TabButton = styled(NavLink)`
  align-items: center;
  background: #000;
  color: #fff;
  display: flex;
  height: 62px;
  justify-content: center;
  text-decoration: none;
  width: 120px;
  &:first-child {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }
  &:last-child {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  &.active {
    background: ${colors.primary};
    color: #000;
  }
`;

function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);
  return (
    <>
      <GlobalStyle />
      <TaskContext.Provider value={[tasks, setTasks]}>
        <Layout>
          <Nav>
            <TabButton to="/">List</TabButton>
            <TabButton to="focus">Focus</TabButton>
          </Nav>
          <Outlet />
         
        </Layout>
      </TaskContext.Provider>
    </>
  );
}

export default App;
