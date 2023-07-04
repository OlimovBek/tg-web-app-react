import React from 'react';
import {useTelegram} from "../../hooks/useTelegram";

const Header = () => {
    const {tg, user, onClose} = useTelegram();

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Yopish</Button>
            <span className={'username'}>
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    );
};

export default Header;