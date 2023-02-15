/* @jsxFrag React.Fragment */

import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { UiContext } from "~/context/ui";
import { Link } from "@remix-run/react";
export const DefaultHeader = () => {
  const { menuClose, menuOpen, isMenuOpen } = useContext(UiContext);
  return (
    <header>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding={6}
        bg="pink.300"
        color="white"
      >
        <Flex align="center" mr={7}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            Remix Drag learn
          </Heading>
        </Flex>

        <Box
          display={{ base: "block", md: "none" }}
          onClick={isMenuOpen ? menuClose : menuOpen}
        >
          <HamburgerIcon />
        </Box>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: isMenuOpen ? "block" : "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
          pt="1"
        >
          <Link to={"/task"}>
            <Text pr={2} as="button">
              Tasks
            </Text>
          </Link>
          <Text pr={2} as="button">
            Add Task
          </Text>
          <Text pr={2} as="button">
            Done Task
          </Text>
          <Link to={"/"}>
            <Text pr={2} as="button">
              top
            </Text>
          </Link>
        </Stack>
      </Flex>
    </header>
  );
};
