import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { auth } from '@/auth';
import SignUpForm from './sign-up-form';
import { APP_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Sign Up',
};

const SignUpPage = async (props: {
  searchParams: Promise<{ callbackUrl: string }>;
}) => {
  const { callbackUrl } = await props.searchParams;

  const session = await auth();

  if (session) {
    return redirect(callbackUrl || '/');
  }

  return (
    <div className='w-full max-w-md mx-auto'>
      <Card>
        <CardHeader className='space-y-4'>
          <Link href='/' className='flex-center'>
            <Image
              src='/images/logo.svg'
              alt={`${APP_NAME} logo`}
              priority={true}
              width={100}
              height={100}
            />
          </Link>
          <CardTitle className='text-center'>Create Account</CardTitle>
          <CardDescription className='text-center'>
            Enter your information below to sign up
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <SignUpForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpPage;
