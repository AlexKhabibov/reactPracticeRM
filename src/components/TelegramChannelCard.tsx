import type { TgChannelsType } from '../api/data';
import '../styles/tgCard.css'

type Props = {
    channel: TgChannelsType
}

function TelegramChannelCard({ channel }: Props) {
    return (
        <div className="tg-card">
            <div className="tg-card__header">
                <img
                    src={channel.avatar}
                    alt="channel"
                    className="tg-card__icon"
                />

                <div className="tg-card__text">
                    <h3 className="tg-card__title">{channel.title}</h3>
                    <p className="tg-card__description">{channel.description}</p>
                </div>
            </div>

            <button className="tg-card__button">
                Перейти в канал
            </button>
        </div>
    );
}

export default TelegramChannelCard;