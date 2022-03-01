import s from './styles.module.scss';

import { Section, SubSection } from '../Section';
import { Align } from '../Align';
import { Button } from '../Button';

import logo from '../../images/logo-mastercraft.svg';
import bookmark from '../../images/icon-bookmark.svg';
import checkIcon from '../../images/icon-check.svg';
import { useState } from 'react';
import { Modal } from '../Modal';
import { ModalSelect } from '../ModalSelect';

export const Main = () => {
    const [check, setCheck] = useState(false);
    const [select, setSelect] = useState(false);

    return (
        <main className={s.main}> 
            <div>
                <img src={logo} alt="logo"/>
                <Section>
                    <h1>Mastercraft Bamboo Monitor Riser</h1>
                    <p>A beautifully handcrafted monitor stand to reduce neck and eye strain.</p>
                    <div className={s.align}>
                        <div onClick={() => setSelect(!select)}>
                            <Button
                                background='hsl(176, 50%, 47%)'
                                text='Back this project'
                                backgroundHover='hsl(176, 72%, 28%)'
                            />
                        { select ? <ModalSelect /> : null }
                        </div>
                        <div 
                            style={{cursor: 'pointer'}}
                            onClick={() => setCheck(!check)}
                            className={s.button} >
                            <img src={check ? checkIcon : bookmark} alt={check ? 'check' : 'bookmark'} />
                            <span style={check ? {color: 'hsl(176, 72%, 28%)'} : {color: 'hsl(0, 0%, 0%)'}}>{check ? 'Bookmarked' : 'Bookmark'}</span>
                            {
                                check ? <Modal /> : null
                            }
                        </div>
                    </div>
                </Section>
                <Section>
                    <div className={s.section1}>
                        <div>
                            <strong>$89,914</strong>
                            <span>of $100,000 backed</span>
                        </div>
                        <div>
                            <strong>$5,007</strong>
                            <span>total backers</span>
                        </div>
                        <div>
                            <strong>56</strong>
                            <span>days left</span>
                        </div>
                    </div>
                    <input className={s.input} type="range" min="0" max="100" />
                </Section>
            </div>
        <Section>
            <div className={s.section2}>
                <h2>About this project</h2>
                <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you comfortable while at work, helping you stay focused on the task at hand.</p>
                <p>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
                <SubSection>
                    <Align>
                        <h3>Bamboo Stand</h3>
                        <p className={s.p}>Piedge $25 or more</p>
                    </Align>
                    <p className={s.p2}>You get an ergonomic stand made of natural bamboo. You're helped us launch our promotional campaign, and you'll be added to a special Backer member list.</p>
                    <Align>
                        <div className={s.left}>
                            101
                            <span>left</span>
                        </div>
                        <Button
                            background='hsl(176, 50%, 47%)'
                            text='Select Reward'
                            backgroundHover='hsl(176, 72%, 28%)'
                        />
                    </Align>
                </SubSection>
                <SubSection>
                    <Align>
                        <h3>Black Edition Stand</h3>
                        <p className={s.p}>Piedge $75 or more</p>
                    </Align>
                    <p className={s.p2}>You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.</p>
                    <Align>
                        <div className={s.left}>
                            64
                            <span>left</span>
                        </div>
                        <Button
                            background='hsl(176, 50%, 47%)'
                            text='Select Reward'
                            backgroundHover='hsl(176, 72%, 28%)'
                        />
                    </Align>
                </SubSection>
                <SubSection>
                    <div className={s.disabled}>
                        <Align>
                            <h3>Mahogany Special Edition</h3>
                            <p className={s.p}>Piedge $200 or more</p>
                        </Align>
                        <p className={s.p2}>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.</p>
                        <Align>
                            <div className={s.left}>
                                0
                                <span>left</span>
                            </div>
                            <Button
                                background='hsl(0, 0%, 48%)'
                                text='Out of stock'
                                backgroundHover='hsl(0, 0%, 48%)'
                                disabled={true}
                            />
                        </Align>
                    </div>
                </SubSection>
            </div>
        </Section>
        </main>
    )
}

