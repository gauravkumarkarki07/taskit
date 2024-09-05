import { Button } from "@/components/ui/button"
import { CirclePlus } from 'lucide-react';

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
      <Button className="flex gap-2 items-center w-fit">
        <span>
          <CirclePlus />
        </span>
        <span>
          Create New
        </span>
      </Button>
    </section>
  </header>
  )
}

export default MyProjectsHeader