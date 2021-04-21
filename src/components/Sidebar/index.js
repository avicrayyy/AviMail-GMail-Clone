import React from "react";
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

import "./styles.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button className="sidebar__compose" startIcon={<Add />}>
        Compose
      </Button>
      <SidebarOption Icon={Inbox} title={"Inbox"} number={69} selected={true} />
      <SidebarOption Icon={Star} title={`Starred`} number={69} />
      <SidebarOption Icon={AccessTime} title={`Snoozed`} number={69} />
      <SidebarOption Icon={LabelImportant} title={`Important`} number={69} />
      <SidebarOption Icon={NearMe} title={`Draft`} number={69} />
      <SidebarOption Icon={Note} title={`Sent`} number={69} />
      <SidebarOption Icon={ExpandMore} title={`More`} number={69} />
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
