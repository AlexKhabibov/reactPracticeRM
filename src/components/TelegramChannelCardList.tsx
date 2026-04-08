import type { TgChannelsType } from "../api/data";
import TelegramChannelCard from "./TelegramChannelCard";

type Props = {
    channels: TgChannelsType[];
};

function TelegramChannelCardList({ channels }: Props) {
    return (
        <div className="telegram-grid">
            {channels.map((channel) => (
                <TelegramChannelCard key={channel.id} channel={channel} />
            ))}
        </div>
    );
}

export default TelegramChannelCardList;