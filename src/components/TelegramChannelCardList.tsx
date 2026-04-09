import type { TgChannelsType } from "../api/data";
import TelegramChannelCard from "./TelegramChannelCard";
import '../styles/tgCardList.css'

type Props = {
    channels: TgChannelsType[];
};

function TelegramChannelCardList({ channels }: Props) {
    return (
        <div className="telegram-grid container">
            {channels.map((channel) => (
                <TelegramChannelCard key={channel.id} channel={channel} />
            ))}
        </div>
    );
}

export default TelegramChannelCardList;