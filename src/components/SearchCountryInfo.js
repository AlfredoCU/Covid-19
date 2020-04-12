import React from "react";
import IconNewConfirmed from "@material-ui/icons/AddAlert";
import IconTotalConfirmed from "@material-ui/icons/AirlineSeatFlat";
import IconNewDeaths from "@material-ui/icons/NewReleases";
import IconTotalDeaths from "@material-ui/icons/MoodBad";
import IconNewRecovered from "@material-ui/icons/AccessibilityNew";
import IconTotalRecovered from "@material-ui/icons/EmojiEmotions";
import {
  List,
  Avatar,
  ListItemAvatar,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const SearchCountryInfo = ({ Countries }) => {
  return (
    <>
      <h2>País: {Countries.Country}</h2>
      <div className="card-row">
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar className="avatar1">
                <IconNewConfirmed className="color1" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={Countries.NewConfirmed}
              secondary="Nuevos confirmado:"
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar className="avatar1">
                <IconTotalConfirmed className="color1" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={Countries.TotalConfirmed}
              secondary="Total confirmado:"
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar className="avatar2">
                <IconNewDeaths className="color2" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={Countries.NewDeaths}
              secondary="Nuevas muertes:"
            />
          </ListItem>
        </List>

        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar className="avatar2">
                <IconTotalDeaths className="color2" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={Countries.TotalDeaths}
              secondary="Muertes totales:"
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar className="avatar3">
                <IconNewRecovered className="color3" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={Countries.NewRecovered}
              secondary="Nuevos recuperado:"
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar className="avatar3">
                <IconTotalRecovered className="color3" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={Countries.TotalRecovered}
              secondary="Total recuperado:"
            />
          </ListItem>
        </List>
      </div>
    </>
  );
};

export default SearchCountryInfo;
