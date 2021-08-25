import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled(Link)`
 background: ${({primary})=>(primary ? "#000d1a" : "CD853F")};
white-space: nowrap;
outline: none;
border: none;
min-width: 100px;
max-width: 200px;
cursor: pointer;
text-decoration: none;
transition: 0ms.3s;
display: flex;
justify-content: center;
align-items: center;
color: ${({ primary }) => (primary ? "#fff" : "#000d1a")};
padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
font-size: ${({big}) => (big ? "20px":"14px")};
 
&:hover{
    transform: translateY(-2px);
}
`;