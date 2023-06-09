import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages";
import { RecoilRoot } from "recoil";
import PageTemplate from "./common/layer/PageTemplate";
import MapPage from "./pages/MapPage";
import ItemRowPage from "./pages/ItemRowPage";
import AreaInfoPage from "./pages/AreaInfoPage";
import { NavermapsProvider } from "react-naver-maps";
import { worker } from "./mocks/browsers";
import React from "react";
import MemoListPage from "./pages/MemoListPage";

function App() {
  worker.start();

  return (
    <RecoilRoot>
      <NavermapsProvider ncpClientId={`${import.meta.env.VITE_NAVER_MAP_ID}`}>
        <Routes>
          <Route element={<PageTemplate />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/item" element={<ItemRowPage />} />
            <Route path="/area" element={<AreaInfoPage />} />
            <Route path="/memo" element={<MemoListPage />} />
          </Route>
        </Routes>
      </NavermapsProvider>
    </RecoilRoot>
  );
}

export default App;
