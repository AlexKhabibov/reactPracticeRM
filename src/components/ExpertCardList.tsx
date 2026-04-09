import { type ExpertType } from "../api/data";
import ExpertCard from "./ExpertCard";
import '../styles/ExpertCardList.css'

type Props = {
    experts: ExpertType[];
};

function ExpertCardList({ experts }: Props) {
    return (
        <div className="expert-grid">
            {experts.map((expert) => (
                <ExpertCard key={expert.id} expert={expert} />
            ))}
        </div>
    );
}

export default ExpertCardList;