"use client";

import { Button, Carousel, Column, Flex, Heading, Line, Text } from "@/once-ui/components";
import { VscLinkExternal } from "react-icons/vsc";
import styles from "./ProjectCard.module.scss";

interface CodeLink {
  label: string;
  url: string;
}

interface ProjectCardProps {
  images: string[];
  title: string;
  content: string;
  description: string;
  link: string;
  code?: string;
  codeLinks?: CodeLink[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  images = [],
  title,
  content,
  description,
  link,
  code,
  codeLinks = [],
}) => {
  return (
    <Column fillWidth gap="m" border="neutral-medium" radius={"s-4"} className={styles.card}>
      <div className={styles.imageContainer}>
        <Carousel
          sizes="(max-width: 960px) 100vw, 960px"
          images={images.map((image) => ({
            src: image,
            alt: title,
          }))}
        />
      </div>
      <Flex
        mobileDirection="column"
        direction="column"
        fillWidth
        paddingX="s"
        paddingTop="0"
        paddingBottom="24"
        gap="m"
      >
        {title && (
          <Flex flex={5}>
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              {title}
            </Heading>
          </Flex>
        )}
        {(description?.trim() || content?.trim()) && (
          <Column flex={7} gap="16">
            {description?.trim() && (
              <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
                {description}
              </Text>
            )}

            <Line background="neutral-alpha-medium" />
            <Flex gap="24" wrap horizontal="space-between">
              {link && (
                <Button variant="primary" onClick={() => window.open(link, "_blank")}>
                  <Text paddingRight="4" variant="body-default-s">
                    Preview online
                  </Text>
                  <VscLinkExternal />
                </Button>
              )}

              {codeLinks.length > 0 &&
                codeLinks.map((cl) => (
                  <Button
                    key={cl.url}
                    variant="secondary"
                    onClick={() => window.open(cl.url, "_blank")}
                  >
                    <Text variant="body-default-s">{cl.label}</Text>
                  </Button>
                ))}
              {codeLinks.length === 0 && code && (
                <Button variant="secondary" onClick={() => window.open(code, "_blank")}>
                  <Text variant="body-default-s">Code</Text>
                </Button>
              )}
            </Flex>
          </Column>
        )}
      </Flex>
    </Column>
  );
};
