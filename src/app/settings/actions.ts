"use server";

import { auth } from "@/auth";
import { UpdateProfileValues, updateProfileSchema } from "@/lib/validation";
import { revalidatePath } from "next/cache";
import  prisma  from "@/lib/prisma";

// To learn more about server actions, watch my YT tutorial: https://www.youtube.com/watch?v=XD5FpbVpWzk

export async function updateProfile(values: UpdateProfileValues) {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    throw new Error("User not foun.");
  }


  const { name } = updateProfileSchema.parse(values);

  await prisma.user.update({
    where: {
      id: userId
    },
    data: {
      name
    }
  });
  revalidatePath("/"); /* por causa do cache na paguina serve para dar reload a paguina */
  }
