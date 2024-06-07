import { FeedWrapper } from "@/components/feed-wrapper";
import { Header } from "./header";
import { Unit } from "./unit"

const CoursesPage = () => {
    return (
        <div className="flex flex-row gap-[48px] px-6">
            <FeedWrapper>
                <Header title="Ajustar o titulo depois"/>
            </FeedWrapper>
            <FeedWrapper>
                <Unit
                id={1}
                order={1}
                description="Teste"
                title="Teste2"
                />
            </FeedWrapper>
        </div>
    )
}

export default CoursesPage;