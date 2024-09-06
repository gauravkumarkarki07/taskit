import CreateProjectDialog from "./CreateProjectDialog"

function MyProjectsHeader() {
  return (
    <header>
    <section className="flex flex-col gap-4">
      <article>
        <h1 className="text-lg font-semibold">My Projects</h1>
        <p className="text-gray-500">
          Manage your projects here.
        </p>
      </article>
      <CreateProjectDialog/>
    </section>
  </header>
  )
}

export default MyProjectsHeader