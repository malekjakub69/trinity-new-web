import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from '@/app/components';
import { Button } from '@/app/components/shadcn/ui/button';
import useRegister from '@/app/hooks/auth/use-register';
import { UserRegisterType } from '@/app/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { object, string } from 'yup';

type FormValues = UserRegisterType;

interface RegisterFormProps {
    className?: string;
}

const formSchema = object().shape({
    login: string().required('Please enter your login'),
    email: string().required('Please enter your email').email('Please enter a valid email'),
    first_name: string().required('Please enter your first name'),
    last_name: string().required('Please enter your last name'),
    password: string().required('Please enter your password'),
    password_repeat: string().required('Please enter your password again')
});

export const RegisterForm: FC<RegisterFormProps> = ({}) => {
    const { t } = useTranslation();

    const { register, registring } = useRegister();

    const form = useForm<FormValues>({
        resolver: yupResolver(formSchema),
        defaultValues: {
            login: 'admin',
            email: 'aaaa@aaa.aa',
            first_name: 'Admin',
            last_name: 'Admin',
            password: 'Password1',
            password_repeat: 'Password1'
        }
    });

    const handleSend = (data: FormValues) => {
        register(data);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSend)} className="space-y-2">
                <FormField
                    control={form.control}
                    name="login"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t('login')}</FormLabel>
                            <FormMessage />
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t('email')}</FormLabel>
                            <FormControl>
                                <Input placeholder="example@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="first_name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t('first name')}</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="last_name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t('last name')}</FormLabel>
                            <FormControl>
                                <Input {...field} />
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
                            <FormLabel>{t('password')}</FormLabel>
                            <FormControl>
                                <Input type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password_repeat"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t('password again')}</FormLabel>
                            <FormControl>
                                <Input type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className="w-full mb-2" loading={registring} type="submit">
                    Register
                </Button>
            </form>
        </Form>
    );
};
