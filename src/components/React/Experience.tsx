import * as Content from "../../content/Experience.md";
function Experience() {
  
  interface Experience {
    LinkLogo: string;
    Website: string;
    Bedrijf: string;
    Functie: string;
    Werktijd: string;
    Extra: string;
  }

  const Experiences: Array<Experience> = Content.frontmatter.Experience;

  return (
    <section
      aria-labelledby=":rr:"
      className="w-full mx-auto max-w-5xl sm:px-6 sm:border-l sm:border-primary-700/40"
    >
      <div className="grid grid-cols-1 gap-y-8 items-baseline md:grid-cols-4">
        <h2
          id=":rr:"
          className="text-lg font-semibold tracking-tight sm:text-xl text-primary-100"
        >
          Ervaringen
        </h2>
        <div className="md:col-span-3">
          <ul role="list" className="space-y-16">
            {Experiences.map((experience, index) => (
              <li key={index} className="flex flex-col items-start">
                <div className="flex flex-row justify-between items-baseline pl-2 w-full border-l border-primary-700">
                  <div className="flex flex-col">
                    <div className="flex flex-row gap-2 items-center">
                      <img
                        decoding="async"
                        loading="lazy"
                        src={experience.LinkLogo}
                        className="w-5 h-5 rounded-full ring-1 shadow-md shadow-primary-800/5 ring-primary-900"
                      />
                      <a
                        href={experience.Website}
                        className="text-base font-semibold tracking-tight sm:max-w-none sm:text-lg max-w-[20ch] text-primary-100"
                      >
                        {experience.Bedrijf}
                      </a>
                    </div>

                    <h2 className="text-sm tracking-tight sm:max-w-none sm:text-base max-w-[20ch] text-primary-300">
                      {experience.Functie}
                    </h2>
                  </div>
                  <time className="text-sm text-primary-600">
                    {experience.Werktijd}
                  </time>
                </div>
                <p className="z-10 mt-4 text-sm text-primary-300 max-w-[75ch]">
                  {experience.Extra}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
