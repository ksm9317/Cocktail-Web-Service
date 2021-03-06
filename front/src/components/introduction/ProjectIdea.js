import React from "react";
import { Box, Grid, Container, Typography } from "@mui/material";
import What from "../../imgs/what.png";
import dylc from "../../imgs/doyoulikecocktail.jpg";
import alcohol from "../../imgs/alcohol.png";
import Chart from "./SpiritChart.js";

export default function ProjectIdea() {
  return (
    <Container
      sx={{
        textAlign: "center",
        color: "white",
        backgroundColor: "rgba(64, 64, 64, 0.4)",
        py: 10,
        width: "70vw",
        borderRadius: "1.5rem",
      }}
    >
      <Box sx={{ px: 5 }}>
        <Typography
          variant="h3"
          sx={{
            p: 2,
            fontFamily: "YUniverse-B",
          }}
        >
          ๐ธ์ ์ชฝ ์๋๊ป์ ๋ณด๋ด์  ๊ฒ๋๋ค.
        </Typography>
        <Box
          component="img"
          src={What}
          alt=""
          width="60%"
          minWidth="250px"
          sx={{ my: 3 }}
        />
      </Box>

      <Box sx={{ px: 5 }}>
        <Typography
          variant="h4"
          sx={{
            backgroundColor: "rgba(0,0,0,0.4)",
            p: 2,
          }}
        >
          Project Introduction
        </Typography>
        <Box sx={{ my: 3 }}>
          <Typography
            component="span"
            variant="h5"
            sx={{ backgroundColor: "rgba(87,24,146,0.3)", p: 1 }}
          >
            ์นต๋ฆฐ์ด๋ค์ ์ํ ์นตํ์ผ ์ถ์ฒ ์๋น์ค
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "rgba(0,0,0,0.4)",
            p: 3,
            my: 3,
            textAlign: "left",
          }}
        >
          <Typography variant="h6">
            ์ฐ๋ฆฌ๋๋ผ์ ์นตํ์ผ ์๋น ์ฆ์ง์ ์ํ ์นตํ์ผ ์๊ฐ ๋ฐ ๋ ์ํผ ๊ณต์ , ์ถ์ฒ
            ๊ฐ๊ตญ์ ์ธ๊ณ ์ฃผ๋ฅ ์๋น๋์ ๋น๊ตํด๋ณด๋ฉด ์ฐ๋ฆฌ๋๋ผ๋ ์นตํ์ผ ์๋น์ ๋นํด
            ๋งฅ์ฃผ ์๋น๋์ด ์๋ฑํ ๋์ต๋๋ค.
          </Typography>
          <br />
          <Typography variant="h6">
            ์ด ๊ทธ๋ํ๋ฅผ ๋ณด๋ฉด ์ฐ๋ฆฌ๋๋ผ๋ ์นตํ์ผ ์๋น๊ฐ ์ ๊ณ  ์ธ์ง๋๊ฐ ๋ฎ๋ค๋ ๊ฒ์
            ์ ์ ์์ต๋๋ค.
          </Typography>
          <br />
          <Typography variant="h6">
            ๋ฐ๋ผ์ ์ฐ๋ฆฌ๋ ์นตํ์ผ์ ์๊ฐํด์ฃผ๋ ์๋น์ค๋ฅผ ๋ง๋ค๊ณ ์ ํ๋ค. ํ์ง๋ง
            ์นตํ์ผ์ ์๊ฐ๋ง ํ๋ค๋ฉด ์๋ฌธ์๊ฐ ์๋ฌด ์นตํ์ผ์ด๋ ๊ณจ๋ผ ๊ณง๋ฐ๋ก ๋ง๋ค๊ธฐ
            ์ฝ์ง ์์ ๊ฒ์ด๋ค.
          </Typography>
          <br />
          <Typography variant="h6">
            ๋ฐ์ดํฐ๋ถ์์ ํ ๋๋ก ์ธ๊ธฐ ์๋ ์นตํ์ผ ์ ๋ณด๋ฅผ ์ ๊ณตํ๊ณ , ์ฌ์ฉ์๊ฐ
            ๊ฐ์ง๊ณ  ์๋ ์ต์ํ์ ์ฌ๋ฃ๋ก ๋ง ๋ค ์ ์๋ ์นตํ์ผ์ ์ถ์ฒํด์ค์ผ๋ก์จ
            ์นตํ์ผ์ ์ง์์ฅ๋ฒฝ์ ๋ฎ์ถ๊ณ ์ ํ๋ค.
          </Typography>
        </Box>
        <Box width="40%" sx={{ mt: 3 }} />
        <Chart stlye={{ width: "300px" }} />
        <Typography> โช ๋ค๋ฅธ ๋๋ผ์์ ์นตํ์ผ ์๋น๋ ๋ฐ ์ธ์ง๋ ์ฐจ์ด</Typography>
      </Box>

      <Box sx={{ px: 5 }}>
        <Box sx={{ my: 3 }}>
          <Typography
            sx={{ backgroundColor: "rgba(0,0,0,0.4)", p: 2 }}
            variant="h4"
          >
            Project Goals
          </Typography>
        </Box>
        <Grid container sx={{ mt: 5 }}>
          <Grid item xs sx={{ mx: "auto" }}>
            <Box
              component="img"
              src={dylc}
              alt=""
              width="80%"
              minWidth="200px"
            />
          </Grid>
          <Grid
            item
            xs
            sx={{
              textAlign: "left",
              my: "auto",
              p: 3,
              backgroundColor: "rgba(0,0,0,0.4)",
            }}
          >
            <Typography variant="h6" sx={{ mb: 3 }}>
              ๋๋ ๋ฐ์ผํ๋ก Kaggle์์ ๋ฐ์ดํฐ๋ฅผ ์ฐพ๋ 4์ 19์ผ...
            </Typography>
            <Typography variant="h6">
              ์ง์ : ํน์ ์นตํ์ผ ์ ์์๋์?
            </Typography>
            <Typography variant="h6">
              ํ์ : ์๋์... ์ ๋ชจ๋ฅด๋๋ฐ...
            </Typography>
            <Typography variant="h6">
              ์ง์ : ๊ทธ๋ฌ๋ฉด Kaggle์์ ์นตํ์ผ ๋ฐ์ดํฐ๋ฅผ ์ฐพ์๋๋ฐ{" "}
              <Typography
                variant="h6"
                component="span"
                sx={{ backgroundColor: "rgba(87,24,146,0.3)", p: 1 }}
              >
                ์นตํ์ผ์ ์๊ฐํ๋ ํ๋ก์ ํธ
              </Typography>
              ๋ฅผ ํ๋ฉด ์ด๋จ๊น์?
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box textAlign="left" sx={{ px: 5, my: 3 }}>
        <Typography
          align="center"
          sx={{ backgroundColor: "rgba(0,0,0,0.4)", p: 2 }}
          variant="h4"
        >
          Cocktail ?
        </Typography>

        <Box sx={{ backgroundColor: "rgba(0,0,0,0.4)", p: 3, my: 3 }}>
          <Box sx={{ mb: 3 }}>
            <Typography component="span" variant="h6">
              ์นตํ์ผ์ ์ ๊ณผ ์ฌ๋ฌ ์ข๋ฅ์ ์๋ฃ, ์ฒจ๊ฐ๋ฌผ ๋ฑ์ ์์ด ๋ง๋  ํผํฉ์ฃผ๋ฅผ
              ๋งํฉ๋๋ค. ์๋งฅ, ๊ฟ์ฃผ, ๋ง๊ฒ์ฃผ ๋ฑ๋ฑ... ์ฌ์ค ์ฐ๋ฆฌ๋ ๊ทธ๋์ ์๊ฒ
              ๋ชจ๋ฅด๊ฒ ์นตํ์ผ์ ๋ง์์์ต๋๋ค. ํ์ ์ ์๋ฆฌ์์ ๊ฐ์ธ์ ์ทจํฅ์ ๋ง๊ฒ
              ์ปค์คํฐ๋ง์ด์ง ํด ๋จน๋ ์ ์ด ๋ฐ๋ก ์นตํ์ผ์ด๊ฑฐ๋ ์.
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ mt: 3 }}>
            ํ์ง๋ง ์์ง ๋ง์ ์ฌ๋์ด ์นตํ์ผ์ ์ด๋ ต๊ณ  ๋ฉ๊ฒ๋ง ์๊ฐํ๊ณ  ์์ต๋๋ค.
            ์ ํฌ๋ ์ฌ์ฉ์๊ฐ ๋๋ง์ ์นตํ์ผ์ ๋ง์๊ป ๊ณต์ ํ๊ณ , ์ฌ์ฉ์๊ฐ ๊ฐ์ง๊ณ 
            ์๋ ์ฌ๋ฃ ์ ๋ณด๋ฅผ ๋ฐ์ ์ฝ๊ฒ ๋ง๋ค ์ ์๋ ์นตํ์ผ์ ์ถ์ฒํด ์ค์ผ๋ก์จ
            ์ด๋ฐ ๋ฌธ์ ์ ์ ํด๊ฒฐํ๊ณ ์ ํฉ๋๋ค
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
