import { Align } from "../Align"
import { SubSection } from "../Section"

import s from "./styles.module.scss";

export const ModalSelect = () => {
    return (
        <div className={s.modalselect}>
            <div>
                <h2>Back this project</h2>
                <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                <SubSection>
                    <div>
                        <input type="radio" />
                        <div>
                            <h3>Pledge with no reward</h3>
                            <p>Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>
                        </div>
                    </div>
                </SubSection>
                <SubSection>
                    <input type="radio" />
                    <div>
                        <Align>
                            <h3>Pledge with no reward</h3>
                            <p>Pledge $25 or more</p>
                            <div className={s.left}>
                                0
                                <span>left</span>
                            </div>
                        </Align>
                        <p>Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>
                    </div>
                </SubSection>
                <SubSection>
                    <input type="radio" />
                    <div>
                        <Align>
                            <h3>Pledge with no reward</h3>
                            <p>Pledge $25 or more</p>
                            <div className={s.left}>
                                0
                                <span>left</span>
                            </div>
                        </Align>
                        <p>Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>
                    </div>
                </SubSection>
                <SubSection>
                    <input type="radio" />
                    <div>
                        <Align>
                            <h3>Pledge with no reward</h3>
                            <p>Pledge $25 or more</p>
                            <div className={s.left}>
                                0
                                <span>left</span>
                            </div>
                        </Align>
                        <p>Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>
                    </div>
                </SubSection>
            </div>
        </div>
    )
}