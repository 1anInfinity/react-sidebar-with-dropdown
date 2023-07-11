import { AppBar, Toolbar, Typography, Avatar, Stack } from "@mui/material";
import { AspectRatio } from "@mui/joy"
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import assets from "../../assets";

const Topbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${sizeConfigs.sidebar.width})`,
        ml: sizeConfigs.sidebar.width,
        boxShadow: "unset",
        backgroundColor: colorConfigs.topbar.bg,
        color: colorConfigs.topbar.color
      }}
    >
      <Toolbar sx={{ marginBottom: "10px", marginTop: "10px" }}>
      <Stack sx={{ width: "100%" }} direction="row" justifyContent="center">
            <Avatar src={assets.images.logo}
                    sx={{ width: 65, height: 65 }}
            />
            <Typography variant="h3" marginLeft={5}> Mahintana Foundation Inc.</Typography>
      </Stack>
        
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
