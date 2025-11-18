'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from "@/components/ui/spinner";
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { toast } from "sonner";
import { useRouter } from 'next/navigation';
import { authService } from '@/services/auth';
import { ROUTES } from '@/routes';

const schema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
}).required();

type FormData = yup.InferType<typeof schema>;

function SignInPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);

    try {
      const res = await authService.login(data);

      if (res?.success) {
        toast.success("Login Successful!", { description: "You are being redirected to your dashboard" })
        router.push(ROUTES.DASHBOARD);
      }
    } catch (err) {
      toast.error("Login Failed!", {
        description: "Invalid email or password."
      })
      console.warn(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-full flex flex-row min-h-screen'>
      <div className='w-full flex flex-col gap-[157.5px] py-10 px-8 md:pl-[91px] lg:pl-[135px] md:pr-[91px] items-start 2xl:items-center'>
        <Image src={'icons/maglo-logo.svg'} alt='maglo-logo' width={120} height={30} />

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col md:max-w-[404px] w-full items-start gap-[25px]'>
          <div>
            <h2 className='text-primary font-semibold text-3xl'>Sign In</h2>
            <span className='text-third text-base'>Welcome back! Please enter your details</span>
          </div>

          <div className='flex flex-col w-full gap-1.5 text-primary'>
            <div className='flex flex-col gap-2.5 w-full'>
              <Label htmlFor="email" className='text-sm font-medium border-gray5'>Email</Label>
              <Input
                id='email'
                type='email'
                {...register('email')}
                placeholder='example@gmail.com'
                disabled={loading}
                className={clsx(
                  'w-full py-[15px] px-5 text-sm font-medium h-fit border-gray5',
                  errors?.email?.message ? 'border-red-800' : 'border-gray5'
                )} />
              {errors && errors?.email && <span className='text-red-800 text-xs -mt-1 mb-2.5'>{errors?.email?.message}</span>}

            </div>

            <div className='flex flex-col gap-2.5 w-full'>
              <Label htmlFor="password" className='text-sm font-medium border-gray5'>Password</Label>
              <Input id='password'
                type='password'
                {...register('password')}
                placeholder="● ● ● ● ● ● ●"
                disabled={loading}
                className={clsx(
                  'w-full py-[15px] px-5 text-sm font-medium h-fit border-gray5',
                  errors?.password?.message ? 'border-red-800' : 'border-gray5'
                )} />
              {errors && errors?.password && <span className='text-red-500 text-xs -mt-1'>{errors?.password?.message}</span>}

            </div>
          </div>

          <div className='flex flex-col gap-[15px] w-full'>
            <Button
              disabled={loading}
              type='submit' className='cursor-pointer leading-5 w-full py-3.5 min-h-12 h-fit bg-primary-color text-primary text-base font-semibold hover:text-white'>
              {loading ? <Spinner /> : 'Sign In'}
            </Button>
            <Button variant={"outline"} className='cursor-pointer border-gray3 w-full h-[50px] flex items-center justify-center gap-2.5 text-third'>
              <Image src={'icons/google.svg'} alt='' width={24} height={24} />
              Sign in with google
            </Button>
          </div>

          <div className='text-secondary text-sm flex self-center'>
            Don’t have an account?
            <div className='relative ml-1'>
              <Link href={'/sign-up'} className='text-primary font-medium'>
                Sign up
              </Link>
              <Image className='pt-[7px]' src={'icons/sign-up-marker.svg'} alt='' width={43} height={5} />
            </div>
          </div>
        </form>
      </div>
      <div className='hidden md:flex max-w-[675px] 2xl:max-w-[50%] w-full items-center relative justify-center h-screen'>
        <Image src={'/images/register-splash.png'} fill sizes='675/900' alt='register-splash' />
      </div>
    </div>
  )
}

export default SignInPage;
