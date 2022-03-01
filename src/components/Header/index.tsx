import s from './styles.module.scss';

import logo from '../../images/logo.svg';
import { Menu } from '../Menu';

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <img src={logo} alt="logo" />
                <Menu />
            </div>
        </header>
    )
}