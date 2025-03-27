import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow, Column, IconButton, LetterFx, Badge, Grid, Row, SmartImage, TiltFx, GlitchFx } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";

import { baseURL, routes } from "@/app/resources";
import { home, about, person, newsletter, social } from "@/app/resources/content";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import SocialButtons from "@/components/general/social/social";
import './utils/page.css'; 

import EmblaCarousel from "@/components/general/home/Carousel";
import type { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = {  dragFree: true, direction: 'rtl', loop: true }


export async function generateMetadata() {
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Home() {

  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: home.title,
            description: home.description,
            url: `https://${baseURL}`,
            image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            publisher: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <Row fillWidth paddingY="l" gap="m">
        <Column maxWidth="m">
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="xs">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="s">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xs">
              {home.second_headline}
            </Text>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="m">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>

          <RevealFx translateY="12" delay={0.4} horizontal="space-between" gap="8" vertical="end">
            <Button
              id="about"
              data-border="rounded"
              href="/about/"
              variant="secondary"
              size="m"
              arrowIcon
            >
              <Flex gap="8" vertical="center">
                {about.avatar.display && (
                  <Avatar
                    style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Flex>
            </Button>
            <SocialButtons />
          </RevealFx>
        </Column>

        <Flex
          mobileDirection="column"   
          direction="row"            
          fillWidth
          paddingX="s"
          paddingTop="0"
          paddingBottom="24"
          gap="m"
          className="smart-image-mine"
        >
          <TiltFx maxWidth={24} aspectRatio={0} radius="l">
            
            <SmartImage
              enlarge
              radius="m"
              sizes="50vw"
              src="/images/me.svg"
              className="smart-image"
            />
          </TiltFx>
        </Flex>
      </Row>



      <RevealFx translateY="16" delay={0.6}>
      <div>
        <Heading as="h2" variant="display-strong-xs" wrap="balance" align="center">
          {home.skillset_title}
          </Heading>
          <EmblaCarousel options={OPTIONS} />
      </div>
    </RevealFx>

      <RevealFx translateY="16" delay={0.6} gap="xl"  paddingLeft="l">
        
      <GlitchFx
  fillWidth
  speed="medium"
>
        <Heading as="h2" variant="display-strong-xs" wrap="balance">
              {home.intro_title}
          </Heading>
          </GlitchFx>
        <Text
          wrap="balance"
          onBackground="neutral-weak"
          align="right"
          variant="heading-default-xl"
          paddingLeft="l"
          style={{ width: '350rem' }}
        >
              {home.intro_text}
            </Text>
      </RevealFx>

      <RevealFx translateY="16" delay={0.6} gap="xl"  paddingLeft="l" align="center">
        <Column horizontal="center">
          <Heading as="h2" variant="display-strong-xs" wrap="balance" marginBottom="40">
                {home.projects_title}
          </Heading>
          <Projects range={[1, 2]} />
          <Button  href="/work" variant="secondary"> View other projects </Button>
        </Column>
       
      </RevealFx>


      {newsletter.display && <Mailchimp newsletter={newsletter} />}
      
      {routes["/blog"] && (
        <Flex fillWidth gap="24" mobileDirection="column">
          <Flex flex={1} paddingLeft="l">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Latest from the blog
            </Heading>
          </Flex>
          <Flex flex={3} paddingX="20">
            <Posts range={[1, 2]} columns="2" />
          </Flex>
        </Flex>
      )}
    </Column>
  );
}
