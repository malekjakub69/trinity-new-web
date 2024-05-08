import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthApi } from '../../../api';
import { UserRegisterType } from '../../types';

const useRegister = () => {
    const navigate = useNavigate();

    const { mutateAsync: register, isPending: registring } = useMutation({
        mutationFn: (credentials: UserRegisterType) => AuthApi.register(credentials),
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

export default useRegister;
