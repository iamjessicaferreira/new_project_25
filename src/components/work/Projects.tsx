import { getPosts } from "@/app/utils/utils";
import { Grid } from "@/once-ui/components";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
}

export function Projects({ range }: ProjectsProps) {
  const projects = getPosts(["src", "app", "work", "projects"]).filter((project) => {
    return !project.metadata.game;
  });
  const sortedProjects = projects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

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
      {displayedProjects.map((post, index) => (
        <ProjectCard
          priority={index < 2}
          key={post.slug}
          href={`/work/${post.slug}`}
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
          link={post.metadata.link || ""}
          code={post.metadata.code}
        />
      ))}
    </Grid>
  );
}
