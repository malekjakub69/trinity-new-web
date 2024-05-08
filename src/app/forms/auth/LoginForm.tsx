import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from '@/app/components/shadcn';
import { Button } from '@/app/components/shadcn/ui/button';
import useLogin from '@/app/hooks/auth/use-login';
import { UserLoginType } from '@/app/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { object, string } from 'yup';

type FormValues = UserLoginType;

type LoginFormProps = {
    className?: string;
};

const formSchema = object().shape({
    login: string().required('Please enter your login or email'),
    password: string().required('Please enter your password')
});

export const LoginForm: FC<LoginFormProps> = ({}) => {
    const { t } = useTranslation();

    const { login, logiging } = useLogin();

    const form = useForm<FormValues>({
        resolver: yupResolver<FormValues>(formSchema),
        defaultValues: {
            login: 'admin',
            password: 'Password1'
        }
    });

    const handleSend = (data: FormValues) => {
        login(data);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSend)} className="space-y-2">
                <FormField
                    control={form.control}
                    name="login"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t('Username or email')}</FormLabel>
                            <FormControl>
                                <Input placeholder="example@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t('Password')}</FormLabel>
                            <FormControl>
                                <Input type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className="w-full" loading={logiging} type="submit">
                    Login
                </Button>
            </form>
        </Form>
    );
};
