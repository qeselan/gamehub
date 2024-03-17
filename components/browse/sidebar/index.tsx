import { Wrapper } from "@/components/browse/sidebar/wrapper";
import { Toggle, ToggleSkeleton } from "@/components/browse/sidebar/toggle";
import {
  Recommended,
  RecommendedSkeleton,
} from "@/components/browse/sidebar/recommended";
import {
  Following,
  FollowingSkeleton,
} from "@/components/browse/sidebar/following";
import { getRecommended } from "@/lib/recommended-service";
import { getFollowedUsers } from "@/lib/follow-service";

export const Sidebar = async () => {
  const recommended = await getRecommended();
  const following = await getFollowedUsers();

  return (
    <Wrapper>
      <Toggle />
      <div className="space-y-4 pt-4 lg:pt-0">
        <Following data={following} />
        <Recommended data={recommended} />
      </div>
    </Wrapper>
  );
};

export const SidebarSkeleton = () => {
  return (
    <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-primary z-50">
      <ToggleSkeleton />
      <FollowingSkeleton />
      <RecommendedSkeleton />
    </aside>
  );
};
