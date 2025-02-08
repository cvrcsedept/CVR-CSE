import { Button, Container, Group, Text, Title } from "@mantine/core";
import { Illustration } from "./Illustration";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import classes from "./NothingFoundBackground.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function NothingFoundBackground() {
  const navigate = useNavigate();

  return (
    <>
      <Container ta="center" className={classes.root}>
        <div className={classes.inner}>
          <Illustration className={classes.image} />
          <div className={classes.content}>
            <Title className={classes.title}>Nothing to see here</Title>
            <Text
              c="dimmed"
              size="lg"
              ta="center"
              className={classes.description}
            >
              Page you are trying to open does not exist. You may have mistyped
              the address, or the page has been moved to another URL. If you
              think this is an error contact support.
            </Text>
            <Button size="md" ta="center" onClick={() => navigate("/")}>
              Take me back to home page
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}
