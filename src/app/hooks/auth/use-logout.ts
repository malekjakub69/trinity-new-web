import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { AuthApi } from '../../../api';

const useLogout = () => {
    const navigate = useNavigate();

    const {
        mutateAsync: logout,
        isPending: logouting,
        isError
    } = useMutation({
        mutationFn: async () => AuthApi.logout(),
        onSuccess: () => {
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            navigate('/login');
        }
    });

    return { logout, logouting, isError };
};

export default useLogout;
