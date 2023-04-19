import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages";
import { RecoilRoot } from "recoil";
import PageTemplate from "./common/layer/PageTemplate";
import MapPage from "./pages/MapPage";
import ItemRowPage from "./pages/ItemRowPage";
import AreaInfoPage from "./pages/AreaInfoPage";

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route element={<PageTemplate />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/item" element={<ItemRowPage />} />
          <Route path="/area" element={<AreaInfoPage />} />
        </Route>
      </Routes>
    </RecoilRoot>
  );
}

export default App;
