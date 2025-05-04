"use client"

import { JSX } from 'react';
import { userRouter } from 'next/navigation';

export default function Page(): JSX.Element {
  const router = useRouter();

  return (
    // Redirects to home page
    <button type="button" onClick={() => router.push('/')}>
      Redirect!
    </button>
  );
};
