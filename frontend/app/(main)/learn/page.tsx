import { FeedWrapper } from "@/components/feed-wrapper";
import { Header } from "./header";

const LearnPage = () => {
    return (
        <div className="flex flex-row gap-[48px] px-6">
            <FeedWrapper>
                <Header title="DML - Data Manipulation Language"/>
            </FeedWrapper>
        </div>
    )
};

export default LearnPage;