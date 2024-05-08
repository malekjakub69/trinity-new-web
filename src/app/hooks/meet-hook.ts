import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const useMeet = () => {
    const { mutateAsync: login, isPending: logiging } = useMutation({
        mutationFn: (credentials: UserLoginType) => MeetApi.logIn(credentials),
        onSuccess: (data) => {},
        onError: (response: AxiosError<{ message: string }>) => {
            toast.error('Někde se stala chyba ' + (response.response?.data.message ?? ''));
        }
    });

    return { login, logiging };
};

export default useMeet;
