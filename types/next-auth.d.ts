// next-auth.d.ts ou em outro arquivo de tipos
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    activeSubscription: any; // ou o tipo que você está esperando para activeSubscription
  }
}
