import s from './styles.module.scss';

import hamburger from '../../images/icon-hamburger.svg';
import close from '../../images/icon-close-menu.svg';

import { useState } from 'react';

export const Menu = () => {

    const [menu, setMenu] = useState(true);

    const u = window.screen.width < 751 ? true : false;

    return (
        <nav>
            {
                u ?
                <>
                    <img 
                        onClick={() => setMenu(!menu)}
                        src={menu ? hamburger : close} 
                        alt={menu ? 'hamburger' : 'close'}
                    />
                    {
                        menu ? null : <Item />
                    }
                </> : <Item />
            }
        </nav>
    )
}


const Item = () => {
    return (
        <ul className={s.nav}>
            <li>About</li>
            <li>Discover</li>
            <li>Get Started</li>
        </ul>
    )
}