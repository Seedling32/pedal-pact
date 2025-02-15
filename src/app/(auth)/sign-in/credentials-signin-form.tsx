'use client';

import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { Label } from '@/src/components/ui/label';
import { signInDefaultValues } from '@/src/lib/constants';
import Link from 'next/link';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { signInWithCredentials } from '@/src/lib/actions/user.actions';
import { useSearchParams } from 'next/navigation';

const CredentialsSignInForm = () => {
  const [data, action] = useActionState(signInWithCredentials, {
    success: false,
    message: '',
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get('callbackUrl') || '/';

  const SignInButton = () => {
    const { pending } = useFormStatus();

    return (
      <Button disabled={pending} className="w-full" variant="default">
        {pending ? 'Signing in...' : 'Sign In'}
      </Button>
    );
  };

  return (
    <form action={action}>
      <input type="hidden" name="callbackurl" value={callbackUrl} />
      <div className="space-y-6">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            defaultValue={signInDefaultValues.email}
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="password"
            defaultValue={signInDefaultValues.password}
          />
        </div>
        <div>
          <SignInButton />
        </div>

        {data && !data.success && (
          <div className="text-center text-destructive">{data.message}</div>
        )}

        <div className="text-sm text-center text-muted-foreground">
          Don&apos;t have an account?{' '}
          <Link href="/register" target="_self" className="link">
            Register
          </Link>
        </div>
      </div>
    </form>
  );
};

export default CredentialsSignInForm;
