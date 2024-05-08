import { FC } from 'react';
import { Loader } from './Loader';

interface IProps {
    children?: JSX.Element | JSX.Element[];
    loading: boolean;
}

export const Loading: FC<IProps> = ({ children, loading }) => {
    if (loading) return <Loader />;
    return <>{children}</>;
};
