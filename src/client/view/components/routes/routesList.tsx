import { Chat, Dashboard, Kanban, Profile } from '../icons';

import { ILinks } from "./types";

export const routesList: ILinks[] = [
    {
        id: 1,
        href: "dashboard",
        title: "dashboard",
        icon: <Dashboard />,
    },
    {
        id: 2,
        href: "kanban",
        title: "kanban",
        icon: <Kanban />,
    },
    {
        id: 3,
        href: "chat",
        title: "chat",
        icon: <Chat />,
    },
    {
        id: 4,
        href: "profile",
        title: "profile",
        icon: <Profile />,
    },
]