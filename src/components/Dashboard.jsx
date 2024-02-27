
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";

import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import TodayRoundedIcon from '@mui/icons-material/TodayRounded';
 
export function Dashboard() {
  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="m-5 w-4">
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      </div>
      <List>
        <ListItem>
          <ListItemPrefix>
            <PresentationChartBarIcon className="m-5 w-5" />
            
          </ListItemPrefix>
          Add task
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            
            <InboxIcon className="m-5 w-5" />
          </ListItemPrefix>
          Inbox
        </ListItem>
        <ListItem>
          <ListItemPrefix>
          <TodayRoundedIcon className="m-5 w-5"/>
          
          </ListItemPrefix>
          Today
          <ListItemSuffix>
            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />

          </ListItemSuffix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="m-5 w-5" />
          </ListItemPrefix>
          Upcomming
        </ListItem>
        
      </List>
    </Card>
  );
}