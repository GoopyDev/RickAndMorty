import SearchBar from "./SearchBar";
import styled from "styled-components";
// import App from "../App";

const NavBar = styled.nav`
    position:           relative;
    display:            flex;
    justify-content:    right;
    width:              95%;
    background-color:   #00ced180;
    margin:             30px;
    padding:            30px;
`

export default function Nav(props) {
    const { onSearch } = props;
    return (
        <NavBar>
            <SearchBar onSearch={onSearch}></SearchBar>
        </NavBar>
    );
}