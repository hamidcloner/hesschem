import styled from "styled-components";
import { Container } from "react-bootstrap";
import headerBg from '../../assets/images/header/headerBg.png';


export const HeaderContainer = styled(Container)`
    background-image : url(${headerBg});
    background-size : 100% 100%;
    background-repeat : no-repeat;
    height : 100vh;

`;


