import React from "react";
import moment from "moment";
import "moment/locale/es";
import IconNewConfirmed from "@material-ui/icons/AddAlert";
import IconTotalConfirmed from "@material-ui/icons/AirlineSeatFlat";
import IconNewDeaths from "@material-ui/icons/NewReleases";
import IconTotalDeaths from "@material-ui/icons/MoodBad";
import IconNewRecovered from "@material-ui/icons/AccessibilityNew";
import IconTotalRecovered from "@material-ui/icons/EmojiEmotions";
import {
  Card,
  CardHeader,
  List,
  Avatar,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@material-ui/core";

const InfoGlobal = ({
  date,
  NewConfirmed,
  TotalConfirmed,
  NewDeaths,
  TotalDeaths,
  NewRecovered,
  TotalRecovered,
}) => {
  moment.locale("es");

  return (
    <Card className="card">
      <CardHeader
        title="Información Global"
        subheader={moment(date).format("LLLL")}
      />
      <div className="card-row">
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar className="avatar1">
                <IconNewConfirmed className="color1" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={NewConfirmed}
              secondary="Nuevos confirmado"
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar className="avatar1">
                <IconTotalConfirmed className="color1" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={TotalConfirmed}
              secondary="Total confirmado"
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar className="avatar2">
                <IconNewDeaths className="color2" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={NewDeaths} secondary="Nuevas muertes" />
          </ListItem>
        </List>

        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar className="avatar2">
                <IconTotalDeaths className="color2" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={TotalDeaths} secondary="Muertes totales" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar className="avatar3">
                <IconNewRecovered className="color3" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={NewRecovered}
              secondary="Nuevos recuperado"
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar className="avatar3">
                <IconTotalRecovered className="color3" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={TotalRecovered}
              secondary="Total recuperado"
            />
          </ListItem>
        </List>
      </div>
    </Card>
  );
};

export default InfoGlobal;
