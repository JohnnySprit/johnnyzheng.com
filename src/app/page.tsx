import { Navbar } from "@/components/layout/NavBar";
import { PhotoRail } from "@/components/layout/PhotoRail";
import { Analytics } from "@vercel/analytics/next";
import { PROJECTS } from "@/data/projects";
import { WORK } from "@/data/work";
import { COLLECTIONS } from "@/data/collections";

const sectionClass = "py-12 sm:py-16";
const headingClass = "mb-6 text-2xl font-semibold sm:text-3xl";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center py-12 px-4 sm:px-6">
      <Analytics />
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-[120px_1fr_220px] md:gap-12">
        <Navbar />
        <div className="min-w-0 text-base leading-relaxed">

          <div className="mb-6 flex items-center justify-between">
            <div className="relative inline-block">
              <h1 className="relative text-4xl italic font-bold hover:opacity-80 text-[var(--name-color)] hover:not-italic">
                johnny zheng
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/in/jnzheng"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[var(--text-secondary)] transition-colors duration-200 hover:opacity-60"
              >
                <svg width="25" height="25" fill="currentColor">
                  <path
                    transform="scale(1.5)"
                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                  />
                </svg>
              </a>
              <a
                href="https://github.com/JohnnySprit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-[var(--text-secondary)] transition-colors duration-200 hover:opacity-60"
              >
                <svg width="25" height="25" fill="currentColor">
                  <path
                    transform="scale(1.5)"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                  />
                </svg>
              </a>
            </div>
          </div>


          <div className="grid gap-6 max-w-[720px]">
            <h2>i'm a senior CS student at &nbsp;
              <a className="iu text-xl hover:saturate-125" href="https://luddy.iu.edu/index.html" target="_blank" rel="noopener noreferrer" aria-label="Indiana University - Bloomington">
                indiana university - bloomington
              </a>
            </h2>
            <div>
              <p className="font-bold text-sm">some cool things about me:</p>
              <ul className="list-disc pl-4 text-sm leading-relaxed marker:text-[8px]">
                <li>
                  <p>specializing in software engineering and ai, minors in data science and informatics</p>
                </li>
                <li>
                  <p>performed with the boston crusaders, the cavaliers, and the memphis youth symphony</p>
                </li>
                <li>
                  <p>always looking out for cool consumer electronics</p>
                </li>
                <li>
                  <p>i love aim training and fps games</p>
                </li>
              </ul>
            </div>
          </div>


          <section id="work" className={sectionClass}>
            <h2 className={headingClass}>work</h2>
            <div>
              {WORK.map((work) => (
                <article
                  key={work.title}
                  className="group border-l-1 border-transparent pl-4 py-4 transition-colors hover:border-[var(--text-primary)]"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-lg text-[var(--text-primary)]">
                      {work.title}
                    </h3>
                    <span className="shrink-0 text-xs text-[var(--text-muted)]">
                      {work.startDate} - {work.endDate}
                    </span>
                  </div>
                  <p className="mt-1 max-w-xl text-sm text-[var(--text-secondary)]">
                    {work.company}
                  </p>
                  <p className="mt-2 text-xs text-[var(--text-muted)]">
                    {work.location}
                  </p>
                </article>
              ))}
            </div>

          </section>
          <section id="projects" className={sectionClass}>
            <h2 className={headingClass}>projects</h2>
            <div>
              {PROJECTS.map((project) => (
                <article
                  key={project.title}
                  className="group border-l-1 border-transparent py-4 pl-4 transition-colors hover:border-[var(--text-primary)]"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-lg text-[var(--text-primary)]">
                      {project.title}
                    </h3>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)]">
                      {project.linkLabel} →
                    </a>
                  </div>
                  <p className="mt-1 text-sm text-[var(--text-secondary)] max-w-[520px]">
                    {project.description}
                  </p>

                  <p className="mt-2 text-xs text-[var(--text-muted)]">
                    {project.tech.join(", ")}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section id="collections" className={sectionClass}>
            <h2 className={headingClass}>collections</h2>
            <div>
              {COLLECTIONS.map((collection) => {
                const { title, blurb, ...categories } = collection;

                return (
                  <article
                    key={title}
                    tabIndex={0}
                    className="group cursor-pointer border-l border-transparent py-4 pl-4 outline-none transition-colors hover:border-[var(--text-primary)] focus:border-[var(--text-primary)]"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-xl text-[var(--text-primary)]">
                        {title}
                      </h3>
                      <span
                        aria-hidden
                        className="text-md text-[var(--text-muted)] transition-transform duration-300 ease-out group-focus:rotate-90"
                      >
                        &gt;
                      </span>
                    </div>
                    <p className="mt-1 text-md italic text-[var(--text-secondary)]">
                      {blurb}
                    </p>

                    <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-focus:grid-rows-[1fr]">
                      <div className="overflow-hidden">
                        <div className="mt-3 space-y-2 opacity-0 transition-opacity duration-300 ease-out group-focus:opacity-100">
                          {Object.entries(categories).map(([category, items]) => (
                            <div key={category}>
                              <p className="text-xs text-[var(--text-muted)]">{category}</p>
                              <p className="text-sm text-[var(--text-secondary)]">
                                {(items as string[]).join(", ")}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

        </div>
        <PhotoRail />
      </div>
    </main>
  );
}
