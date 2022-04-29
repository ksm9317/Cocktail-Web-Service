import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Introduce() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const labels = ["서비스 소개", "팀 소개", "Item Three"];

  return (
    <>
      <Box sx={{ width: "100%", pt: 30, color: "white" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            //   orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{ borderRight: 1, borderColor: "divider" }}
          >
            {labels.map((label, i) => (
              <Tab label={label} {...a11yProps(i)} />
            ))}
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <Box>주제 선정 이유</Box>
          <Box>주제 선정 이유</Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          @ @ @ @ @ @
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
    </>
  );
}

export default Introduce;