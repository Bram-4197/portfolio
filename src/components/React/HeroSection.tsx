import * as Content from "../../content/HeroSectionContent.md";
function HeroSection() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center flex-col-reverse lg:flex-row py-16 lg:py-24">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-emerald-900 mb-4">
              {Content.frontmatter.Title}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8">
              {Content.frontmatter.Omschrijving}
            </p>
          </div>
          <div className="lg:w-1/2 lg:pl-16">
            <img
              src="https://avatars.githubusercontent.com/u/94552705?s=400&u=07887d7d1e5a0da310eedcf832221ada82c82a7c&v=4"
              alt="Developer"
              className="rounded-full w-64 lg:w-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
