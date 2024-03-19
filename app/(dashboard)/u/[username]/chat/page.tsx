import { ToggleCard } from "@/components/browse/username/chat/toggle-card";
import { getSelf } from "@/lib/auth-service";
import { getStreamByUserId } from "@/lib/stream-service";

const ChatPage = async () => {
  const self = await getSelf();
  const stream = await getStreamByUserId(self.id);

  if (!stream) return null;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Chat settings</h1>
      <div className="space-y-4">
        <ToggleCard
          field="isChatEnabled"
          label="Enable chat"
          value={stream.isChatEnabled}
        />
        <ToggleCard
          field="isChatDelayed"
          label="Delay chat"
          value={stream.isChatDelayed}
        />
        <ToggleCard
          field="isChatFollowersOnly"
          label="Must be following to chat"
          value={stream.isChatFollowersOnly}
        />
      </div>
    </div>
  );
};

export default ChatPage;
