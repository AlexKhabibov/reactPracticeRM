import type { ExpertType } from '../api/data';
import '../styles/expertCard.css'

type Props = {
    expert: ExpertType;
};


function ExpertCard({ expert }: Props) {

    return (
        <div className="expert-card container">
            <img
                src={expert.avatar}
                alt="Денис"
                className="expert-card__avatar"
            />

            <div className="expert-card__content">
                <div className="expert-card__header">
                    <h3 className="expert-card__name">{expert.name}</h3>
                    <p className="expert-card__role">{expert.role}</p>
                </div>

                <p className="expert-card__description">
                    {expert.description}
                </p>

                <div className="expert-card__socials">
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                </div>
            </div>
        </div>
    );
}

export default ExpertCard;