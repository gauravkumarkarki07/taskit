import ProjectCard from "./ProjectCard"

function ProjectList() {
    return (
        <section className="flex flex-col gap-4">
            <h1 className="font-semibold">Project Details</h1>
            <section className="flex flex-wrap gap-12 items-center">
                {projects?.map((project) => (
                    <ProjectCard project={project} key={project.id} />
                ))}
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