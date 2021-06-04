import {
  Avatar,
  Container,
  Divider,
  Paper,
  Typography,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React from "react";
import MessageCard from "./MessageCard";

export default function Messages() {
  return (
    <div style={{ position: "absolute", top: "5em", width: "100%" }}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper
            style={{
              display: "flex",
              justifyContent: "space-around",
              padding: "1em",
              margin: "1em",
            }}
          >
            <Avatar src="../../ck.jpg"></Avatar>
            <Typography variant="h6" noWrap>
              Chakshu Jain
            </Typography>
          </Paper>
          <Paper
            style={{
              display: "flex",
              justifyContent: "space-around",
              padding: "1em",
              margin: "1em",
            }}
          >
            <Avatar src="../../ck.jpg"></Avatar>
            <Typography variant="h6" noWrap>
              Chakshu Jain
            </Typography>
          </Paper>
          <Paper
            style={{
              display: "flex",
              justifyContent: "space-around",
              padding: "1em",
              margin: "1em",
            }}
          >
            <Avatar src="../../ck.jpg"></Avatar>
            <Typography variant="h6" noWrap>
              Chakshu Jain
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae sint
          tempore ea inventore quo excepturi pariatur praesentium neque odit
          animi debitis similique molestiae dolore cupiditate rerum dolor, sequi
          eaque perspiciatis! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Voluptates soluta nihil repudiandae deserunt.
          Commodi ullam corrupti nisi sequi recusandae quaerat ipsam et facere
          asperiores, quia, nihil odit! Qui, quidem ea? Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Voluptates sunt nulla quia minima
          nemo rem doloribus magnam, quasi iure quae veritatis cum nesciunt
          mollitia possimus, eius adipisci accusantium reprehenderit dicta
          neque, animi consequuntur. Quidem aliquid vero animi ex. Provident
          delectus natus quis aut inventore praesentium mollitia possimus,
          aliquid corrupti magni expedita ad eum dolore ipsam laborum modi.
          Consequuntur nam reprehenderit animi dolore libero ut rerum qui? Sequi
          explicabo nobis voluptas error repellat cum dolore deleniti quod quia
          omnis, voluptates et dolor molestiae laudantium, eveniet beatae ullam!
          Eveniet qui doloremque obcaecati accusamus hic. Nulla saepe nisi eos,
          ea nobis nesciunt voluptatum!
        </Grid>
      </Grid>
    </div>
  );
}
