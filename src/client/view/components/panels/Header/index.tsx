import React, { FC } from 'react';

import { IHeaderPanel } from './types';
import { SHeaderPanel } from "./styles"

export const HeaderPanel: FC<IHeaderPanel> = ({
    children,
    theme,
    className
}) => {
    return (
        <SHeaderPanel theme={theme} className={className}>
            {children}
        </SHeaderPanel>
    );
};