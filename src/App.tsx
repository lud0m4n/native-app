import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage.tsx';
import PeriodPage from './pages/PeriodPage/PeriodPage.tsx';
import { useEffect } from 'react';


const { invoke } = (window as any).__TAURI__.tauri;

const App = () => {
  useEffect(() => {
    invoke('tauri', {cmd: 'create'})
      .then((response: any) => console.log(response))
      .catch((error: any) => console.log(error));
    return () => {
      invoke('tauri', {cmd: 'close'})
      .then((response: any) => console.log(response))
      .catch((error: any) => console.log(error));
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/WebAppDev_front" element={<MainPage />} />
        <Route path="/WebAppDev_front/period/:id" element={<PeriodPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
