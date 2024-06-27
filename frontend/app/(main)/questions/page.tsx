import { FeedWrapper } from "@/components/feed-wrapper";
import { Header } from "./header";

const CoursesPage = () => {
    return (
        <div className="flex flex-row gap-[48px] px-6">
            <FeedWrapper>
                <Header title="Learn SQL"/>
            </FeedWrapper>
        </div>
    )
}

export default CoursesPage;