import { UnitBanner } from "./unit-banner"

type Props = {
    id: number
    order: number
    title: string
    description: string
}

export const Unit = ({
    id,
    order,
    title,
    description
}: Props) => {
    return (
        <>
            <UnitBanner title={title} description={description}/>
        </>
    )
}