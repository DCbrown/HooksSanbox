import React from 'react';
import { Container } from './styles/Container.styled';
import { StyledHeader, Nav } from './styles/Header.styled';
import { Button } from './styles/Button.styled';

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Button>Header Button</Button>
        </Nav>

          <div>
            <h1>Header Title</h1>
            <h3>Sub Header</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur mi eget tellus eleifend scelerisque. Donec id porttitor justo, ac sollicitudin ex. Mauris pretium tincidunt nibh, nec consequat risus egestas id. Aenean vitae ex pretium turpis tincidunt aliquam ac a metus. Duis fermentum ornare pretium. Phasellus id augue rhoncus, vulputate est elementum, euismod quam. Aenean urna odio, tristique in lectus nec, auctor varius elit. Fusce sed nibh finibus, suscipit leo non, maximus tortor. Phasellus mollis pretium vestibulum.</p>

            <Button bg='#ff0099' color='#fff'>
              Read More
            </Button>
          </div>

      </Container>
    </StyledHeader>  
    /*  
    <StyledHeader bg="#ebfffe">
        <Container>
            <Nav>
             
                    <h1>Logo</h1>
                
                <Button>Click Me</Button>
            </Nav>
        </Container>
    </StyledHeader>
    */
  )
}

export default Header