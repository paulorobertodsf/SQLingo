"use client";

import { Course } from "@/db/schema";
import { Card } from "./card";

type Props = {
    courses: Course[];
    activeCourseId: number;
}

export const List = ({courses, activeCourseId}: Props) => {
    return (
        <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
            {courses.map((course) => (
                <Card
                    key={course.id}
                    id={course.id}
                    title={course.title}
                    imageSrc={course.image_src}
                    onClick={() => {}}
                    disable={false}
                    active={course.id === activeCourseId}
                />
            ))}
        </div>
    );
}