import { getPosts, generatePageMetadata, CONTENT_PATHS } from "@/app/utils/utils";
import { Column, Heading } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";
import { baseURL } from "@/app/resources";
import { person, work } from "@/app/resources/content";
import { Games } from "@/components/work/Games";

export async function generateMetadata() {
  return generatePageMetadata(work.title, work.description, baseURL, `https://${baseURL}/work/`);
}

export default function Work() {
  const allProjects = getPosts([...CONTENT_PATHS.WORK]);

  return (
    <Column maxWidth="m">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            headline: work.title,
            description: work.description,
            url: `https://${baseURL}/work/`,
            image: `${baseURL}/og?title=${encodeURIComponent(work.title)}`,
            author: {
              "@type": "Person",
              name: person.name,
            },
            hasPart: allProjects.map((project) => ({
              "@type": "CreativeWork",
              headline: project.metadata.title,
              description: project.metadata.summary,
              url: `https://${baseURL}/work/${project.slug}/`,
              image: `${baseURL}/${project.metadata.image}`,
            })),
          }),
        }}
      />
      <Heading padding="l" as="h2" variant="display-strong-xs" wrap="balance">
        Web projects
      </Heading>
      <Projects />
      <Heading padding="l" as="h2" variant="display-strong-xs" wrap="balance">
        Games
      </Heading>
      <Games />
    </Column>
  );
}
