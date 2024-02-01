'use client'

import StudyElement from "@/component/atom/study-element"
import StudyElementSkeleton from "@/component/atom/study-element/skeleton"

const StudyListSection = () => {
    return(
        <section className="w-full flex flex-col items-center gap-4">
            <StudyElement id="1" title="a" description="b"/>
            <StudyElementSkeleton/>
        </section>
    )
}

export default StudyListSection