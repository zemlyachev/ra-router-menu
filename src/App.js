import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/HomePage";
import DriftPage from "./components/pages/DriftPage";
import ForzaPage from "./components/pages/ForzaPage";
import TimeAttackPage from "./components/pages/TimeAttackPage";
import Menu from "./components/Menu";

const routes = [
  { path: "/", title: "Главная", element: HomePage },
  { path: "/drift", title: "Дрифт-такси", element: DriftPage },
  { path: "/timeattack", title: "Time Attack", element: TimeAttackPage },
  { path: "/forza", title: "Forza Karting", element: ForzaPage },
];

export default function App() {
  return (
    <div>
      <Menu routes={routes} />
      <div className="page">
        <Routes>
          {routes.map((router, i) => {
            return (
              <Route path={router.path} element={router.element()} key={i} />
            );
          })}
        </Routes>
      </div>
    </div>
  );
}
