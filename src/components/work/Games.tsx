import { getPosts, CONTENT_PATHS } from "@/app/utils/utils";
import { Grid } from "@/once-ui/components";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
}

export function Games({ range }: ProjectsProps) {
  const games = getPosts([...CONTENT_PATHS.WORK]).filter((project) => {
    return project.metadata.game && project.metadata.visible;
  });

  const sortedGames = games.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedGames = range
    ? sortedGames.slice(range[0] - 1, range[1] ?? sortedGames.length)
    : sortedGames;

  return (
    <Grid
      fillWidth
      gap="xl"
      marginBottom="40"
      paddingX="l"
      columns="2"
      tabletColumns="2"
      mobileColumns="1"
    >
      {displayedGames.map((post) => (
        <ProjectCard
          key={post.slug}
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          link={post.metadata.link || ""}
          code={post.metadata.code}
          codeLinks={post.metadata.codeLinks}
        />
      ))}
    </Grid>
  );
}
