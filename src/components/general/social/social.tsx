"use client";

import React from "react";
import { Button, Flex, IconButton } from "@/once-ui/components";
import { social } from "@/app/resources/content";

interface SocialButtonsProps {
  compact?: boolean;
}

export default function SocialButtons({ compact = false }: SocialButtonsProps) {
  return (
    <>
      {social.length > 0 && (
        <Flex paddingTop="20" paddingBottom="8" gap="8" wrap horizontal="center" fitWidth>
          {social.map(
            (item) =>
              item.link && (
                <React.Fragment key={item.name}>
                  {!compact && (
                    <Button
                      className="s-flex-hide"
                      href={item.link}
                      prefixIcon={item.icon}
                      label={item.name}
                      size="s"
                      variant="secondary"
                      style={{ cursor: "pointer" }}
                    />
                  )}
                  <IconButton
                    className={compact ? undefined : "s-flex-show"}
                    size="l"
                    href={item.link}
                    icon={item.icon}
                    tooltip={item.name}
                    variant="secondary"
                    style={{ cursor: "pointer" }}
                  />
                </React.Fragment>
              ),
          )}
          {!compact && (
            <a
              href="/Jessica_Ferreira_CV_2026.pdf"
              download="Jessica_Ferreira_CV_2026.pdf"
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              <Button
                className="s-flex-hide"
                prefixIcon="download"
                label="My Curriculum"
                size="s"
                variant="secondary"
                style={{ cursor: "pointer" }}
              />
            </a>
          )}
          <a
            href="/Jessica_Ferreira_CV_2026.pdf"
            download="Jessica_Ferreira_CV_2026.pdf"
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            <IconButton
              className={compact ? undefined : "s-flex-show"}
              size="l"
              icon="download"
              tooltip="CV"
              variant="secondary"
              style={{ cursor: "pointer" }}
            />
          </a>
        </Flex>
      )}
    </>
  );
}
