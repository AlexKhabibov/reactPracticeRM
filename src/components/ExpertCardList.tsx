import { type ExpertType } from "../api/data";
import ExpertCard from "./ExpertCard";

type Props = {
    experts: ExpertType[];
};

function ExpertCardList({ experts }: Props) {
    return (
        <div className="">
            {experts.map((expert) => (
                <ExpertCard key={expert.id} expert={expert} />
            ))}
        </div>
    );
}

export default ExpertCardList;