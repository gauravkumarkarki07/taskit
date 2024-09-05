import MyProjectsHeader from "../components/MyProjectsHeader"
import ProjectList from "../components/ProjectList"


function Index() {
  return (
    <section className="flex flex-col gap-10 h-full w-full">
      <MyProjectsHeader />
      <ProjectList />
    </section>
  )
}

export default Index