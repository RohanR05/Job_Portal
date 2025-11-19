import dbConnect, { collectionNames } from "@/app/lib/dbConnect";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        const user = await dbConnect(collectionNames.USER).findOne({ email });
        if (!user) return null;

        const isPasswordOK = password === user.password;
        if (!isPasswordOK) return null;

        const { password: pwd, ...safeUser } = user;
        safeUser._id = user._id.toString();
        return safeUser;
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        const userCollection = dbConnect(collectionNames.USER);
        const existingUser = await userCollection.findOne({ email: user.email });

        if (!existingUser) {
          const newUser = {
            username: user.name,
            email: user.email,
            password: "",
            phone: "",
            address: "",
            image: user.image,
            gender: "",
            birth: "",
            nationality: "",
            role: "user",
            education: "",
            createdAt: new Date(),
          };

          const result = await userCollection.insertOne(newUser);
          user._id = result.insertedId.toString();
          user.role = "user";
        } else {
          user._id = existingUser._id.toString();
          user.role = existingUser.role; // IMPORTANT
        }
      }

      return true;
    },

    // Store full user into JWT
    async jwt({ token, user }) {
      if (user) {
        token.user = user; // store full user object
      }
      return token;
    },

    // Attach full user in session
    async session({ session, token }) {
      session.user = token.user; // full user object
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
