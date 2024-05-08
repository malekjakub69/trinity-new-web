import { FC } from 'react';
import { IcoLoader } from '../../../assets/icons';

export const Loader: FC = () => {
    return <IcoLoader className={'m-auto animate-spin w-10 fill-gray-500'} />;
};
