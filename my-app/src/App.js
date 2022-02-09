import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import HistoryList from './HistoryList/index';
import HistoryDetail from './HistoryDetail/index';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/history/:historyId" element={<HistoryDetail />} />
          <Route path="/history" element={<HistoryList />} />
          <Route index element={<HistoryList />} />
        </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;
