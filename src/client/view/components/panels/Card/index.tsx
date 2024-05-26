import React, { FC } from 'react';

import { ICard } from './types';
import { SCard } from './styles';

export const Card:FC<ICard> = ({
    theme,
    children,
    className
}) => {
    return (
        <SCard theme={theme} className={className}>
            {children}
        </SCard>
    );
};