import React,{Fragment} from 'react';
import GlobalStyle from './globalStyles';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header';
import { Container,Row,Col } from 'react-bootstrap';
import { MyContainer,MyRow,MyCol } from './globalStyles';

function App() {
  return (
    <Fragment>
      {/* <Container fluid style={{backgroundColor : 'yellow'}}>Container fluid</Container>
      <Container style={{backgroundColor : 'blue'}}>Container</Container>

      <MyContainer fluid style={{backgroundColor : 'red'}}>MyContainer Fluid</MyContainer>
      <MyContainer style={{backgroundColor : 'green'}}>
        <MyRow>
        
          <MyCol xs={{span : 2,offset : 5}} style={{backgroundColor : 'pink'}}>col</MyCol>
        </MyRow>
      </MyContainer> */}
      <Header />
      




      <GlobalStyle />
    </Fragment>

  );
}

export default App;
  