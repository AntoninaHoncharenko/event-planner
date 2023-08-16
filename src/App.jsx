import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './components/Layout/Layout';
import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from './GlobalStyles';

const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const CreateEvent = lazy(() => import('./pages/CreateEvent/CreateEvent'));
const EventDetails = lazy(() => import('./pages/EventDetails/EventDetails'));
const EditEvent = lazy(() => import('./pages/EditEvent/EditEvent'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />}></Route>
          <Route path="/create" element={<CreateEvent />} />
          <Route path="/:eventId" element={<EventDetails />}></Route>
          <Route path="/:eventId/edit" element={<EditEvent />} />
        </Route>
      </Routes>
      <Toaster containerStyle={{ width: '280px', margin: '0 auto' }} />
      <GlobalStyle />
    </>
  );
}

export default App;
