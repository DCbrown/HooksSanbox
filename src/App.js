import './App.css';
import Parent from './hooks/context/Parent'
import StyleComponent from './styledComponents/index.js';
import { ThemeProvider } from 'styled-components';
import AppUseAxiosClient from './hooks/api/useAxiosClient';


const theme = {
  colors: {
    body: '#ffc',
    footer: '#003333'
  }
}

function App() {
  return (
    <ThemeProvider theme = {theme}>
    <div>
      <StyleComponent />
      <AppUseAxiosClient />
    </div>
    </ThemeProvider>
  );
}

export default App;
