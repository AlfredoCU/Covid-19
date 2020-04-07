import React from "react";
import {
  Card,
  CardHeader,
  List,
  Avatar,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@material-ui/core";
import moment from "moment";
import IconNewConfirmed from "@material-ui/icons/AddAlert";
import IconTotalConfirmed from "@material-ui/icons/AirlineSeatFlat";
import IconNewDeaths from "@material-ui/icons/NewReleases";
import IconTotalDeaths from "@material-ui/icons/MoodBad"; // SentimentVeryDissatisfied
import IconNewRecovered from "@material-ui/icons/AccessibilityNew";
import IconTotalRecovered from "@material-ui/icons/EmojiEmotions"; // TagFaces

const InfoGlobal = ({
  date,
  NewConfirmed,
  TotalConfirmed,
  NewDeaths,
  TotalDeaths,
  NewRecovered,
  TotalRecovered,
}) => {
  return (
    <Card className="card">
      <CardHeader
        title="Información Global de COVID-19"
        subheader={moment(date).format("LLLL")}
      />
      <div className="card-row">
        <div>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar className="avatar1">
                  <IconNewConfirmed className="color1" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Nuevos confirmado: "
                secondary={NewConfirmed}
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar className="avatar1">
                  <IconTotalConfirmed className="color1" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Total confirmado: "
                secondary={TotalConfirmed}
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar className="avatar2">
                  <IconNewDeaths className="color2" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Nuevas muertes: " secondary={NewDeaths} />
            </ListItem>
          </List>
        </div>

        <div>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar className="avatar2">
                  <IconTotalDeaths className="color2" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Muertes totales: "
                secondary={TotalDeaths}
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar className="avatar3">
                  <IconNewRecovered className="color3" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Nuevos recuperado: "
                secondary={NewRecovered}
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar className="avatar3">
                  <IconTotalRecovered className="color3" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Total recuperado: "
                secondary={TotalRecovered}
              />
            </ListItem>
          </List>
        </div>
      </div>
    </Card>
  );
};

export default InfoGlobal;
