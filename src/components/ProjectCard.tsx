"use client";

import {
  AvatarGroup,
  Button,
  Carousel,
  Column,
  Flex,
  Heading,
  Icon,
  Line,
  SmartLink,
  Text,
} from "@/once-ui/components";
import { VscLinkExternal } from "react-icons/vsc";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
  code?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
  code
}) => {
  console.log(code)
  return (
    <Column
      fillWidth gap="m"
      border="neutral-medium"
      radius={'s-4'}
    >
      <Carousel
        sizes="(max-width: 960px) 100vw, 960px"
        images={images.map((image) => ({
          src: image,
          alt: title,
        }))}
      />
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
              
                <Button
                variant="primary"
                onClick={() => window.open(link, "_blank")}
                >
                  <Text paddingRight="4" variant="body-default-s">Preview online</Text>
                  <VscLinkExternal /> 
              </Button>
               
              {code && (
                <Button
                  variant="secondary"
                  onClick={() => window.open(code, "_blank")}
              >
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
