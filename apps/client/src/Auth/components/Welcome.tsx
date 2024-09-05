function Welcome() {
  return (
    <section className="px-4 py-4 h-full relative flex flex-col justify-between bg-gradient-to-r from-primary to-accentPrimary/90 text-white">
      <article className="flex flex-col gap-4">
        <section className="mt-6 text-4xl font-semibold">
          <span>*</span>
          <h1>Hello !</h1>
          <h1>Task
            <span className="text-accentPrimary">It</span>
          </h1>
        </section>
        <p className="text-sm text-white">
          Welcome to TaskIt, your ultimate solution for managing tasks and deadlines efficiently.
          Get started by exploring the features and setting up your projects.
        </p>
      </article>
      <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-gray-100">
        © 2024 Your Name. All rights reserved.
      </span>
    </section>
  );
}

export default Welcome;
