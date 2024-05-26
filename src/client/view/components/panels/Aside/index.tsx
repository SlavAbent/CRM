import React, { FC } from 'react';

import { IAsidePanel } from './types';
import { SAsidePanel } from "./styles"

export const AsidePanel: FC<IAsidePanel> = ({
    children,
    theme,
    className
}) => {
    return (
        <SAsidePanel theme={theme} className={className}>
            {children}
        </SAsidePanel>
    );
};