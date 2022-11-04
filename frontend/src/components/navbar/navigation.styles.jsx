import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
    padding: 10px 25px;
    display: flex;
    
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;
    
    border-bottom: 2px solid #e0e0e0;
    justify-content: space-between;
    height: auto;
    background-color: rgba(255,255,255,0.91);
    
    //background-color: rgba(24, 24, 24, 0.91);
    /* background-color: rgba(0,0,0,0.3); */
;
`

export const NavbarLogo = styled(Link)`
    font-weight: bolder;
    text-decoration: none;
    color: black;
    //color: white;
    font-size: 1.4rem;
`

export const NavbarContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const NavbarLink = styled(Link)`
    text-decoration: none;
    margin-right: 20px;
    //color: white;
    color: black;
    &:hover{
        color: #6366f1;
    }

    &:focus{
        color: #6366f1;
    }
`

export const Button = styled(Link)`
    text-decoration: none;
    border: 1px solid #6366f1;
    border-radius: 5px;
    background-color: white;
    color: #6366f1;
    padding: 3px 24px;
    cursor: pointer;
    
    &:hover {
        background-color: #6366f1;
        color: white;
    }
`
