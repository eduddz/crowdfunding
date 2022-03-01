import { ReactNode } from "react";

import s from './styles.module.scss';

interface AlignProps {
    children: ReactNode;
}

export const Align = ({ children }: AlignProps) => {
    return (
        <div className={s.align}>
            {children}
        </div>

    )
}