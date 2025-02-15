import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from './src/db/prisma';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compareSync } from 'bcrypt-ts-edge';
import type { NextAuthConfig } from 'next-auth';

export const config = {
  pages: {
    signIn: '/sign-in',
    error: '/sign-in',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, //30 days
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      credentials: {
        email: { type: 'email' },
        password: { type: 'password' },
      },
      async authorize(credentials) {
        if (credentials == null) return null;

        //Find user in database
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email as string,
          },
        });

        // Check if user exists and if password matches
        if (user && user.password) {
          const isMatch = compareSync(credentials.password as string, user.password);

          // If password is correct, return user
          if (isMatch) {
            return {
              id: user.userId,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              role: user.role,
            };
          }
        }

        // If user does not exist or password does not match, return null
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, user, trigger, token }: any) {
      // Set user ID from token
      session.user.userId = token.sub;

      // If there is an update, set user name
      if (trigger === 'update') {
        session.user.firstName = user.firstName;
        session.user.lastName = user.lastName;
      }

      return session;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
