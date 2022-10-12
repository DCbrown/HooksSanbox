import styled from 'styled-components';

export const StyledHeader = styled.header`
    background-color: ${(bg) => bg};
    padding: 40px 0;

    h1 {
        color: #333;
    }

    &:hover {
        background-color: #eee;
    }
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
`