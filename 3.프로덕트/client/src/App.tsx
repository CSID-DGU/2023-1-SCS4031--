import {Route, Routes} from "react-router-dom";
import MainPage from "./pages";
import {RecoilRoot} from "recoil";
import PageTemplate from "./common/layer/PageTemplate";

function App() {
  return (
      <RecoilRoot>
          <Routes>
              <Route element={<PageTemplate />}>
                  <Route path="/" element={<MainPage />} />
                  <Route path="/map" element={<MainPage />} />
              </Route>
          </Routes>
      </RecoilRoot>
  )
}

export default App
