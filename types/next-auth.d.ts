/* mudar os tipos que ja existem tipo o da session e do user na library do next o "role" nao entra nos tipos por default */

import { DefaultSession } from "next-auth";


declare module "next-auth" {
    interface Session {
        user: User & DefaultSession["user"];
    }

    interface User {
        role: string | null;
    }
}