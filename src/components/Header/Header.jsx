import React from 'react';
import {useTelegram} from "../../hooks/useTelegram";

const Header = () => {
    const {user, onClose} = useTelegram();

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Yopish</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
};

export default Header;