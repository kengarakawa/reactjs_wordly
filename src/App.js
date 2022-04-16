

import TestPage from './pages/TestPage';
import GamePage from './pages/GamePage';



function App() {
  
  const handleGoBack = () => {
    console.log('HandleGoBack')
  }
  const handleSubmit = () => {
    console.log('HandleSubmit')
  }
  
  
  return (
    <div className="App">
      {/* <PlayPage 
      goBack={() => handleGoBack()}
      submit={()=> handleSubmit()}
      /> */}
      <TestPage />
      
      <GamePage />
    </div>
  );
}

export default App;
