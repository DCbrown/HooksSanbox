import './App.css';
import Parent from './hooks/context/Parent'
import StyleComponent from './styledComponents/index.js';
import { ThemeProvider } from 'styled-components';


const theme = {
  colors: {
    body: '#ffc',
    footer: '#003333'
  }
}

function App() {
  return (
    <ThemeProvider theme = {theme}>
    <StyleComponent />
    <div style={{marginLeft: 250}}>
     
    </div>
    </ThemeProvider>
  );
}

export default App;
