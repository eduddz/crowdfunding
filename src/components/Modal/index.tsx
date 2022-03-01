import { Button } from "../Button";
import check from "../../images/icon-check.svg";

import s from "./styles.module.scss";

export const Modal = () => {
    return (
        <div className={s.modal}>
            <div>
                <img src={check} alt="" />
                <h2>Thanks for your support</h2>
                <p>Your pledge brings us one closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
                <Button
                    background='hsl(176, 50%, 47%)'
                    text='Got it!'
                    backgroundHover='hsl(176, 72%, 28%)'
                    />
            </div>
        </div>
    )
}