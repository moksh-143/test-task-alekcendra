import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import Image from "next/image";
import ImageCarousel from "../carousel/ImageCarousel";
import backgroundImage from "../../public/images/background.png";
import downBox from "../../public/images/downBox.png";
import bottomimg from "../../public/images/bottomimg.png";
import downBox2 from "../../public/images/downBox2.png";
import carouse1 from "../../public/images/carouse1.png";
import carousel2 from "../../public/images/carousel2.png";
import backcouple from "../../public/images/backcouple.png";
import frontcouple from "../../public/images/frontcouple.png";
import grupcouple from "../../public/images/grupcouple.png";
import footerImg from "../../public/images/footerimg.png";
import videoBtn from "../../public/images/videobtn.png";
import logo from "../../public/images/logo.svg";
import wave from "../../public/images/wave.png";
import lightwave from "../../public/images/light-wave.png";
import classes from "./main-header.module.css";
import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import { useState } from "react";

const pages = ["HOME", "ABOUT", "CONTACT", "CALL NOW FOR A CONSULT"];

const images = [
  {
    url: carouse1,
    headcaption: "Abbie Harvey",
    maincaption:
      "I have been caring for my mom & dad off and on for about 10 years now, and I know the importance of me being there for appointments. Older people need attention, love and care that they truly deserve.",
  },
  {
    url: carouse1,
    headcaption: "headcaption",
    maincaption:
      "I have been caring for my mom & dad off and on for about 10 years now, and I know the importance of me being there for appointments. Older people need attention, love and care that they truly deserve.",
  },
  {
    url: carouse1,
    headcaption: "headcaption",
    maincaption:
      "I have been caring for my mom & dad off and on for about 10 years now, and I know the importance of me being there for appointments. Older people need attention, love and care that they truly deserve.",
  },
];

const MainHeader = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box className={classes.root}>
      <div>
        <AppBar className={classes.headerbg}>
          <Container>
            <Toolbar disableGutters>
              <Box>
                <Image
                  src={logo}
                  alt={logo}
                  width={226}
                  height={35}
                  className={classes.logo}
                />
              </Box>

              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                  justifyContent: "end",
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page} </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "end",
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page}
                    className={classes.navbarBtn}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}{" "}
                    {page.includes("CALL") && (
                      <span style={{ color: "#5BC8AF" }}>123.456.7890</span>
                    )}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
      <div className={classes.wavebox}>
        <Image
          src={backgroundImage}
          alt={backgroundImage}
          className={classes.bgimg}
        />
        <Box className={classes.headingContent}>
          <Box className={classes.sideContentBox}>
            <h1>
              <span>GET AN</span> INTERVENTION
            </h1>
            <p>
              Showing greater respect to older adults can be done in several
              ways : acknowledging and putting to use the talents and skills of
              older adults; creating intergenerational initiatives; and allowing
              older adults to stay active and independent for as long as
              possible.
            </p>
          </Box>
          <Box className={classes.sideContactBox}>
            <h3>Contact Us</h3>
            <Box>
              <Box className={classes.inputTag}>
                <TextField
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                />
              </Box>
              <Box className={classes.inputTag}>
                <TextField
                  id="outlined-basic"
                  label="Business Email "
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Company"
                  variant="outlined"
                />
              </Box>
              <Box className={classes.inputTag}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Country</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Country"
                    className={classes.selectItem}
                  >
                    <MenuItem value={10}>Country</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Button className={classes.submitButton}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1_118)">
                    <path
                      d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_118">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
        <Image
          src={lightwave}
          alt={backgroundImage}
          className={classes.waveimg}
        />
        <Image src={wave} alt={backgroundImage} className={classes.waveimg2} />
      </div>

      <Box className={classes.gridParentBox}>
        <Box className={classes.gridBox}>
          <Box>
            <Image
              src={backcouple}
              alt={backgroundImage}
              className={classes.gridimg}
            />
            <h3 className={classes.understandHeading}>
              <span>WE</span> UNDERSTAND
            </h3>
          </Box>
          <Image
            src={frontcouple}
            alt={backgroundImage}
            className={classes.gridimg}
          />
          <Image
            src={grupcouple}
            alt={backgroundImage}
            className={classes.gridimg}
          />
        </Box>

        <Box className={classes.gridBoxContent2}>
          <Box>
            Older adults want to play active and meaningful roles in their
            lives, including as part of a social network, a neighborhood, and a
            community. Service providers and policymakers must consider that a
            lack of sense of purpose can become problematic as people age.
            Engaging them in leisure activities and volunteer work is important.
          </Box>
          <Box>
            Older adults want to stay active and contribute to society in a
            reciprocal manner (meaning that they want to exchange their services
            and skills with others for the mutual benefit of the neighborhood or
            community). Qualitative and quantitative studies published from 2005
            to 2016 examining the social needs of older adults were eligible for
            inclusion.
          </Box>
          <Box>
            To stimulate social contacts, neighborhood initiatives can be
            developed. Social meeting places, such as pubs and churches can help
            to foster the development of close and peripheral relationships.
            <Button>
              92% Success Rate
              <svg
                style={{ marginLeft: 10 }}
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="14"
                viewBox="0 0 17 14"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.3431 0.92888L16.7071 6.29284C17.0976 6.68336 17.0976 7.31653 16.7071 7.70705L11.3431 13.071C10.9526 13.4615 10.3195 13.4615 9.92893 13.071C9.53841 12.6805 9.53841 12.0473 9.92893 11.6568L13.5858 7.99995H0V5.99995H13.5858L9.92893 2.34309C9.53841 1.95257 9.53841 1.3194 9.92893 0.92888C10.3195 0.538355 10.9526 0.538355 11.3431 0.92888Z"
                  fill="#5BC8AF"
                />
              </svg>
            </Button>
          </Box>
        </Box>
      </Box>

      <ImageCarousel images={images} />

      <Box className={classes.gridBoxParentBorder}>
        <h3 className={classes.understandHeading2}>
          <span>WE</span> CAN ORGANIZE EVERYTHING
        </h3>
        <Box className={classes.gridBoxContent}>
          <Box>
            <span>Interventions</span> should focus on older adult’s desire for
            connectedness, participation and independence.
          </Box>
          <Box>
            Loneliness and social isolation are growing public health concerns
            in our aging society. Whilst these experiences occur across the life
            span, 50% of individuals aged over 60 are at risk of social
            isolation and one-third will experience some degree of loneliness
            later in life. It is vital to reduce loneliness and social isolation
            among older adults.
          </Box>
          <Box>
            The methodology framework proposed by Arskey and O’Malley and
            further developed by Levac, et al. was used to guide the scoping
            review process. A total of 33 reviews met the inclusion criteria,
            evaluating a range of interventions targeted at older people
            residing in the community or institutionalised settings.
          </Box>
        </Box>
        <Box className={classes.gridBox}>
          <Box className={classes.gridBoxBorder}>Needs Assesment</Box>
          <Box className={classes.gridBoxBorder}>
            Treatment Planning & Placement
          </Box>
          <Box className={classes.gridBoxBorder}>
            Transportation & Logistics
          </Box>
        </Box>
        <Box className={classes.gridBox2}>
          <Box className={classes.gridBoxBorder}>
            Insurance Advocacy
            <svg
              style={{ marginLeft: 10, cursor: "pointer" }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clipPath="url(#clip0_1_214)">
                <path d="M13 17H11V11H13V17ZM13 9H11V7H13V9Z" fill="#5BC8AF" />
                <path
                  d="M3.5 12C3.5 7.30814 7.30814 3.5 12 3.5C16.6919 3.5 20.5 7.30814 20.5 12C20.5 16.6919 16.6919 20.5 12 20.5C7.30814 20.5 3.5 16.6919 3.5 12Z"
                  stroke="#5BC8AF"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_214">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <Box className={classes.alertParentBox}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="9" viewBox="0 0 22 9" fill="none">
            <path d="M11 0L22 9H0L11 0Z" fill="#297C6B"/>
            </svg>
            <Box className={classes.alertBox}>We’re experienced in our individual crafts and understand how each one of our roles impacts your plan holistically.</Box>
            </Box>
          </Box>
          <Box className={classes.gridBoxBorder}>Employment Advocacy</Box>
          <Box className={classes.gridBoxBorder}>Aftercare Planning</Box>
        </Box>
        <Box className={classes.footerBox}>
          <svg
            className={classes.footersvg2}
            xmlns="http://www.w3.org/2000/svg"
            width="779"
            height="648"
            viewBox="0 0 779 648"
            fill="none"
          >
            <path
              d="M0 0H742.597C655.445 274 857.597 323.5 742.597 648H0V0Z"
              fill="white"
              fillOpacity="0.2"
            />
          </svg>
          <svg
            className={classes.footersvg1}
            xmlns="http://www.w3.org/2000/svg"
            width="755"
            height="648"
            viewBox="0 0 755 648"
            fill="none"
          >
            <path
              d="M0 0H719.719C635.252 274 831.175 323.5 719.719 648H0V0Z"
              fill="url(#paint0_linear_1_237)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_237"
                x1="377.5"
                y1="0"
                x2="377.5"
                y2="648"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#305D52" />
                <stop offset="1" stopColor="#153F38" />
              </linearGradient>
            </defs>
          </svg>
          <Box className={classes.footerText}>
            <h3 className={classes.watchHeading}>
              <span>WATCH</span> THE VIDEO
            </h3>
            <Box className={classes.footerContentBox}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
              >
                <path
                  d="M5.6 10.6L1.4 6.4L0 7.8L5.6 13.4L17.6 1.4L16.2 0L5.6 10.6Z"
                  fill="#5BC8AF"
                />
              </svg>
              <Box>
                <h4>Needs Assessment</h4>
                <p>
                  The Advocacy Evaluation Toolkit contains the instruments used
                  to collect data for evaluating the Consumer Voices for
                  Coverage program.
                </p>
              </Box>
            </Box>
            <Box className={classes.footerContentBox}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
              >
                <path
                  d="M5.6 10.6L1.4 6.4L0 7.8L5.6 13.4L17.6 1.4L16.2 0L5.6 10.6Z"
                  fill="#5BC8AF"
                />
              </svg>
              <Box>
                <h4>Insurance Advocacy</h4>
                <p>
                  We are committed to advocating for appropriate coverage and
                  payment policies.
                </p>
              </Box>
            </Box>
            <Box className={classes.footerContentBox}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
              >
                <path
                  d="M5.6 10.6L1.4 6.4L0 7.8L5.6 13.4L17.6 1.4L16.2 0L5.6 10.6Z"
                  fill="#5BC8AF"
                />
              </svg>
              <Box>
                <h4>Treatment Planning & Placement</h4>
                <p>
                  Patients can better understand medical procedures, discharge
                  instructions, etc.
                </p>
              </Box>
            </Box>
          </Box>

          <Image
            src={footerImg}
            alt={backgroundImage}
            className={classes.footerimg}
          />
          <Image
            src={bottomimg}
            alt={backgroundImage}
            className={classes.bottomimg}
          />
          <Image
            src={videoBtn}
            alt={backgroundImage}
            className={classes.videoBtn}
          />
          <Image
            src={downBox}
            alt={backgroundImage}
            className={classes.downImage}
          />
          <Image
            src={downBox2}
            alt={backgroundImage}
            className={classes.downImage2}
          />
        </Box>
        <Box className={classes.footerData}>
          <Box>@2021 Get an Intervention Inc. All rights reserved.</Box>
          <Box>
            <a href="#">Privacy Policy</a> | <a href="#">Terms of use</a> |{" "}
            <a href="#">Site Map</a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainHeader;
