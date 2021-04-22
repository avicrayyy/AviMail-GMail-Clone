import React from "react";
import { useDispatch } from "react-redux";
import { Button, IconButton } from "@material-ui/core";

// Icons
import {
  Add,
  Inbox,
  Star,
  AccessTime,
  LabelImportant,
  NearMe,
  Note,
  ExpandMore,
  Person,
  Duo,
  Phone,
} from "@material-ui/icons";

// Sub-components
import SidebarOption from "./SidebarOption";

// Reducers
import { openSendMessage } from "../../features/mail/mailSlice";

import "./styles.css";

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        onClick={() => dispatch(openSendMessage())}
        className="sidebar__compose"
        startIcon={<Add />}
      >
        Compose
      </Button>
      <SidebarOption Icon={Inbox} title={"Inbox"} number={69} selected={true} />
      <SidebarOption Icon={Star} title={`Starred`} number={0} />
      <SidebarOption Icon={AccessTime} title={`Snoozed`} number={0} />
      <SidebarOption Icon={LabelImportant} title={`Important`} number={0} />
      <SidebarOption Icon={NearMe} title={`Draft`} number={0} />
      <SidebarOption Icon={Note} title={`Sent`} number={0} />
      <SidebarOption Icon={ExpandMore} title={`More`} number={0} />
      <div className="sidebar__footer">
        <div className="sidenar__footerIcons">
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
