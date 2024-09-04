import Messages from './components/Messages'
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';
import styled from 'styled-components';

const MainContainer = styled.div`
  background: url(https://webimages.mongodb.com/_com_assets/cms/lvp611gcqbn2dkxgi-blob-1.svg?auto=format%252Ccompress) center left;
  background-repeat: no-repeat;
  background-color: #023430;
  background-size: contain;  
  min-height: 100vh
`;

const SubContainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(12, 1fr);
  max-width: 1416px;
  margin: auto;
`;

function App() {
  return (
    <MainContainer>
      <SubContainer>
        <Header/>
        <Form/>
        <Messages />
        <Footer />
      </SubContainer>
    </MainContainer>
  );
}

export default App;
