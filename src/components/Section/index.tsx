import { ReactNode } from 'react';
import s from './styles.module.scss';

interface SectionProps {
    children: ReactNode;
}

export const Section = ({ children }: SectionProps) => {
    return (
        <section className={s.section}>
            {children}
        </section>
    )
}
export const SubSection = ({ children }: SectionProps) => {
    return (
        <section className={s.subsection}>
            {children}
        </section>
    )
}