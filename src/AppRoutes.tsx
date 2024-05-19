import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Chat } from "./client/view/pages/Chat";
import { Dashboard } from "./client/view/pages/Dashboard";
import { Kanban } from "./client/view/pages/Kanban";
import { MainPage } from "./client/view/pages/Main";
import { Profile } from "./client/view/pages/Profile";
import { Provider } from "react-redux";
import { store } from "./store";

export const AppRoutes = () => (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );