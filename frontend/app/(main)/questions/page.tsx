import { FeedWrapper } from "@/components/feed-wrapper";
import { StickWrapper } from "@/components/sticky-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";

const LearnPage = () => {
    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickWrapper>
                <UserProgress activeCourse={{ title: "SQL", imageSrc: "/courses.png"}} hearts={5} points={100} hasActiveSubscription={false}/>
            </StickWrapper>
            <FeedWrapper>
                <Header title="DML - Data Manipulation Language"/>
            </FeedWrapper>
        </div>
    )
};

export default LearnPage;