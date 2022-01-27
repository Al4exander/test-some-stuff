import { useRouter } from 'next/router';

import Styles from './BackBtn.module.scss';

export const BackBtn = () => {
    const router = useRouter();

    return (
        <div className = { Styles.backBtn }>
            <a onClick = { router.back }>⬅ Назад</a>
        </div>
    );
};

