import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './components/Layout/Layout';
import { GlobalStyle } from './GlobalStyles';

const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const CreateEvent = lazy(() => import('./pages/CreateEvent/CreateEvent'));
const EventDetails = lazy(() => import('./pages/EventDetails/EventDetails'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />}></Route>
          <Route path="/create" element={<CreateEvent />} />
          <Route path="/:eventId" element={<EventDetails />} />
        </Route>
      </Routes>

      <GlobalStyle />
    </>
  );
}

export default App;
