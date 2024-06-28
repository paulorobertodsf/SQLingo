import { getCourses } from "@/db/queries";
import { List } from "./list";

const LearnPage = async () => {
    const courses = await getCourses();
    return (
        <div className="h-full max-w-[912px] px-3 mx-auto">
            <h1 className="text-2xl font-bold text-neutral-700">
                SQL Operations
            </h1>
            <List
                courses={courses}
                activeCourseId={9}
            />
        </div>
    )
};

export default LearnPage;