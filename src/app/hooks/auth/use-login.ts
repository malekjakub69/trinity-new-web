import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthApi } from '../../../api';
import { UserLoginType } from '../../types';
import queryKeys from '../queryKeys';

const useLogin = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { mutateAsync: login, isPending: logiging } = useMutation({
        mutationFn: (credentials: UserLoginType) => AuthApi.logIn(credentials),
        onSuccess: (data) => {
            console.log(data);
            localStorage.setItem('access_token', data.access_token);
            localStorage.setItem('refresh_token', data.refresh_token);
            queryClient.resetQueries({ queryKey: queryKeys.AUTH_KEY });
            navigate('/');
        },
        onError: (response: AxiosError<{ message: string }>) => {
            toast.error('Někde se stala chyba ' + (response.response?.data.message ?? ''));
        }
    });

    return { login, logiging };
};

export default useLogin;
