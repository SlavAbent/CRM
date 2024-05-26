import { SLayoutMain, SLayoutWrapper } from "./styles"

import { AsidePanel } from '../../components/panels/Aside/index';
import { HeaderPanel } from '../../components/panels/Header/index';
import { Links } from '../../components/routes/index';
import { Outlet } from 'react-router-dom';

export const Layout= () => {
    return (
        <SLayoutWrapper>
            <HeaderPanel theme="light">
                <div>content</div>
            </HeaderPanel>
            <AsidePanel theme={'light'}>
                <>
                    <Links />
                </>
            </AsidePanel>
            <SLayoutMain>
                <Outlet />
            </SLayoutMain>
        </SLayoutWrapper>
    );
};
