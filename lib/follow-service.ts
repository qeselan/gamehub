import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";
import { isBlockedByUser, isBlockingUser } from "./block-service";

export const getFollowedUsers = async () => {
  try {
    const self = await getSelf();

    const followedUsers = db.follow.findMany({
      where: {
        followerId: self.id,
        following: {
          AND: [
            {
              NOT: {
                blockedBy: {
                  some: {
                    blockerId: self.id,
                  },
                },
              },
            },
            {
              NOT: {
                blocking: {
                  some: {
                    blockedId: self.id,
                  },
                },
              },
            },
          ],
        },
      },
      include: {
        following: true,
      },
    });

    return followedUsers;
  } catch (error) {
    return [];
  }
};

export const isFollowingUser = async (id: string) => {
  try {
    const self = await getSelf();

    const otherUser = await db.user.findUnique({
      where: { id },
    });

    if (!otherUser) throw new Error("User not found");

    if (otherUser.id === self.id) return true;

    const existingFollow = await db.follow.findUnique({
      where: {
        followerId_followingId: {
          followerId: self.id,
          followingId: otherUser.id,
        },
      },
    });

    return !!existingFollow;
  } catch (error) {
    return false;
  }
};

export const followUser = async (id: string) => {
  const self = await getSelf();

  const otherUser = await db.user.findUnique({
    where: { id },
  });

  if (!otherUser) {
    throw new Error("user not found");
  }

  if (otherUser.id === self.id) {
    throw new Error("Can't follow yourself");
  }

  if ((await isBlockedByUser(id)) || (await isBlockingUser(id)))
    throw new Error("Blocked or being blocked by the user");

  const existingFollow = await db.follow.findUnique({
    where: {
      followerId_followingId: {
        followerId: self.id,
        followingId: otherUser.id,
      },
    },
  });

  if (existingFollow) throw new Error("Already following");

  const follow = await db.follow.create({
    data: {
      followerId: self.id,
      followingId: otherUser.id,
    },
    include: {
      following: true,
      follower: true,
    },
  });

  return follow;
};

export const unfollowUser = async (id: string) => {
  const self = await getSelf();

  const otherUser = await db.user.findUnique({
    where: {
      id,
    },
  });

  if (!otherUser) {
    throw new Error("user not found");
  }

  if (otherUser.id === self.id) {
    throw new Error("Can't unfollow yourself");
  }

  if ((await isBlockedByUser(id)) || (await isBlockingUser(id)))
    throw new Error("Blocked or being blocked by the user");

  const existingFollow = await db.follow.findUnique({
    where: {
      followerId_followingId: {
        followerId: self.id,
        followingId: otherUser.id,
      },
    },
  });

  if (!existingFollow) throw new Error("Not following");

  const follow = await db.follow.delete({
    where: {
      id: existingFollow.id,
    },
    include: { following: true },
  });

  return follow;
};
