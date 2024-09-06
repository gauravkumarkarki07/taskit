import ProjectCard from "./ProjectCard"
import {
    Pagination, PaginationContent, PaginationItem,
    PaginationLink, PaginationNext, PaginationPrevious
} from "@/components/ui/pagination"


function ProjectList() {
    return (
        <section className="flex flex-col gap-4">
            <h1 className="font-semibold">Project Details</h1>
            <section className="flex flex-wrap gap-12 items-center">
                {projects?.map((project) => (
                    <ProjectCard project={project} key={project.id} />
                ))}
            </section>
            <section>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            1
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
            </section>
        </section>
    )
}

const projects = [
    {
        id: 'asdasd',
        title: 'asdasd',
        description: 'asdasd',
        totalTask: 5,
        taskCompleted: 2

    },
    {
        id: 's',
        title: 'asdasd',
        description: 'asdasd',
        totalTask: 5,
        taskCompleted: 2

    },
    {
        id: 'sd',
        title: 'asdasd',
        description: 'asdasd',
        totalTask: 5,
        taskCompleted: 2

    },
    {
        id: 'asd',
        title: 'asdasd',
        description: 'asdasd',
        totalTask: 5,
        taskCompleted: 2

    }
]


export default ProjectList