// "use server";

import dbConnect, { collectionNames } from "@/app/lib/dbConnect";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs"; // for hashed password comparison

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        email: {
          label: "Email",
          type: "email",
          placeholder: "jsmith@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        // Find user by username
        const user = await dbConnect(collectionNames.USER).findOne({
          email,
        });
        if (!user) return null;

        // Compare password (plain text or hashed)
        // If using hashed passwords:
        // const isPasswordOK = await bcrypt.compare(password, user.password);
        const isPasswordOK = password === user.password; // replace with bcrypt for production

        if (!isPasswordOK) return null;

        // Return a plain object (convert ObjectId to string)
        return {
          id: user._id.toString(),
          username: user.username,
          email: user.email,
          role: user.role || "user", // default role
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      // On sign in, add username and role to the token
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      // Pass username and role to the session
      session.user.id = token.id;
      session.user.username = token.username;
      session.user.role = token.role;
      return session;
    },
  },

  session: {
    strategy: "jwt", // use JWT strategy
  },

  pages: {
    signIn: "/login", // custom login page
    error: "/login?error", // error redirect
  },

  secret: process.env.NEXTAUTH_SECRET, // make sure you set this in .env
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
