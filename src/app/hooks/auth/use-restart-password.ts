import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthApi } from '../../../api';
import { ForgotPasswordType } from '../../types';

const useRestartPassword = () => {
    const navigate = useNavigate();

    const { mutateAsync: register, isPending: registring } = useMutation({
        mutationFn: (credentials: ForgotPasswordType) => AuthApi.restartPassword(credentials),
        onSuccess: () => {
            toast.success('Registrace proběhla úspěšně');
            navigate('/login');
        },
        onError: (response: AxiosError<{ message: string }>) => {
            toast.error('Někde se stala chyba ' + (response.response?.data.message ?? ''));
        }
    });

    return { register, registring };
};

export default useRestartPassword;
