import dbConnect, { collectionNames } from "@/app/lib/dbConnect";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

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

        // Find user by email
        const user = await dbConnect(collectionNames.USER).findOne({ email });
        if (!user) return null;

        // Compare password (plain text or hashed)
        const isPasswordOK = password === user.password; // replace with bcrypt for production
        if (!isPasswordOK) return null;

        // Exclude sensitive fields like password
        const { password: pwd, ...safeUser } = user;

        // Convert _id to string
        safeUser._id = user._id.toString();

        // Return the full safe user object
        return safeUser;
      },
    }),
  ],
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    // Store full user object in JWT token
    async jwt({ token, user }) {
      if (user) {
        token.user = user; // store full user in token
      }
      return token;
    },

    // Pass full user object to session
    async session({ session, token }) {
      session.user = token.user; // now session.user has all fields from DB
      return session;
    },
  },

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
    error: "/login?error",
  },

  secret: process.env.NEXTAUTH_SECRET,
};
