import SearchBar from "../SearchBar/SearchBar";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import logo from "../../images/rick-and-morty-app-logo.png";

// import App from "../App";

const NavBar = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  width: 95%;
  background-color: #00ced180;
  margin: 0 0 30px 0;
  padding: 30px;
`;

export default function Nav(props) {
  const { onSearch } = props;
  return (
    <NavBar>
      <div style={{ width: "40%" }}>
        <img
          src={logo}
          alt="Rick and Morty App Logo"
          style={{
            width: "250px",
            position: "fixed",
            top: "-30px",
            left: "25px",
          }}
        />
      </div>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">Acerca de</NavLink>
      <SearchBar onSearch={onSearch}></SearchBar>
    </NavBar>
  );
}
