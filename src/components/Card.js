import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: "35%", direction: "rtl", bgcolor: "#035ab0ff" }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <Typography
              sx={{
                color: "white",
                fontFamily: "IBM",
                fontWeight: "500",
                fontSize: "48px",
              }}
            >
              الرياض
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontFamily: "IBM",
                fontWeight: "400",
                fontSize: "16px",
              }}
            >
              {" "}
              2025/01/12
            </Typography>
          </Stack>
          <hr />
        </Typography>
        <Typography variant="h5" component="div">
          <Grid container>
            <Grid size={7}>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent={"flex-start"}
                gap={2}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontFamily: "IBM",
                    fontWeight: "500",
                    fontSize: "72px",
                  }}
                >
                  {" "}
                  38{" "}
                </Typography>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                  alt="weather icon"
                />
              </Stack>
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "IBM",
                  fontWeight: "500",
                  fontSize: "24px",
                  my: 1
                }}
              >
                مشمس في الغالب
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "IBM",
                  fontWeight: "400",
                  fontSize: "16px",
                }}
              >
                الصغرى 30 || الكبرى 37{" "}
              </Typography>
            </Grid>
            <Grid
              size={5}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="weather icon"
              />
            </Grid>
          </Grid>
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          bgcolor:  "#1565c0",
          display: "flex",
          justifyContent: "flex-end",
          mb: 2,
          width: "90%",
          mx: "auto",
          borderRadius: "8px",
          gap: 2,
        }}
      >
        <Button
          variant="text"
          sx={{
            color: "white",
            fontFamily: "IBM",
            fontWeight: "400",
            fontSize: "16px",
          }}
          size="small"

        >
          Arabic
        </Button>
        <Button
            variant="text"
          sx={{
            color: "white",
            fontFamily: "IBM",
            fontWeight: "400",
            fontSize: "16px",
          }}
          size="small"
        >
          English
        </Button>
        <Button
            variant="text"
          sx={{
            color: "white",
            fontFamily: "IBM",
            fontWeight: "400",
            fontSize: "16px",
          }}
          size="small"
        >
          French
        </Button>
      </CardActions>
    </Card>
  );
}
