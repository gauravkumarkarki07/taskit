import Spinner from "@/Common/Utils/Spinner";
import { useGetAllProjects } from "../hooks/useProjectQuery"
import ProjectCard from "./ProjectCard"
import {
    Pagination, PaginationContent, PaginationItem,
    PaginationLink, PaginationNext, PaginationPrevious
} from "@/components/ui/pagination"

import { Project } from "./ProjectCard";

function ProjectList() {
    const { data: projectArray, isLoading } = useGetAllProjects();

    if (isLoading) {
        return <Spinner />
    }

    return (
        <section className="flex flex-col gap-4">
            <h1 className="font-semibold">Project Details</h1>
            <section className="flex flex-wrap gap-12 items-center">
                {projectArray.projects.length === 0 && <span>No projects created</span>}
                {projectArray?.projects.map((project: Project) => (
                    <ProjectCard project={project} key={project.id} />
                ))}
            </section>
            <section>
                {projectArray.projects.length > 0 &&
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
                }
            </section>
        </section>
    )
}



export default ProjectList