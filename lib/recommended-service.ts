import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";

export const getRecommended = async () => {
  let userId: string | null;

  try {
    const self = await getSelf();
    userId = self.id;
  } catch (error) {
    userId = null;
  }

  let users = await db.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  if (userId) {
    users = users.filter((user) => user.id !== userId);
  }

  return users;
};
