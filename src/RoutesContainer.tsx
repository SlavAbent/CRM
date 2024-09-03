import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Chat } from './client/view/pages/Chat';
import { Dashboard } from './client/view/pages/Dashboard';
import { Kanban } from './client/view/pages/Kanban';
import { Layout } from './client/view/pages/Layout';
import { Profile } from './client/view/components/icons';
import React from 'react';

export const RoutesContainer = () => {
    return (
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />} >
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/profile" element={<Profile />} />
              </Route>
          </Routes>
        </BrowserRouter>
    );
};