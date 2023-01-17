 
import IndexPage from './pages/IndexPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VideoPage from './pages/VideoPage';


 
function App() {
  return (
    <BrowserRouter>
        
        <Routes>
          <Route path='/' element={  <IndexPage /> } />  
          <Route path='/video' element={<VideoPage />} />  
        </Routes>

         
    </BrowserRouter>
  );
}

export default App;
