// React
import { useState } from "react";
// Material UI components
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

export default function BasicCard({ weatherData }) {
  const [lang, setLang] = useState("ar");
  function handleChangeLang(lang) {
    setLang(lang);
  }
  console.log(weatherData);
  function cityNameByLang(lang) {
    switch (lang) {
      case "ar":
        return "تونس";
      case "en":
        return "Tunis";
      default:
        return "Tunis";
    }
  }
  function date(lang) {
    const date = new Date();
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return lang === "ar"
      ? date.toLocaleDateString("ar-TN", options)
      : date.toLocaleDateString("en-US", options);
  }
  function temperatureByLang(lang, weatherTemp) {
    switch (lang) {
      case "ar":
        return Math.round((weatherTemp - 273.15)) + "°C";
      case "en":
        return Math.round((weatherTemp - 273.15) * 9/5 + 32) + "°F";
      case "fr":
        return Math.round((weatherTemp - 273.15)) + "°C";
      default:
        return Math.round((weatherTemp - 273.15) * 9/5 + 32) + "°F";
    }
  }
  function weatherDescriptionByLang(lang, weatherDescription) {
    switch (lang) {
      case "ar":
        return weatherDescription || "مشمس في الغالب";
      case "en":
        return weatherDescription || "Mostly Sunny";
      case "fr":
        return weatherDescription || "Principalement ensoleillé";
      default:
        return weatherDescription || "Mostly Sunny";
    }
  }
  function minMaxByLang(lang, weatherTempmin, weatherTempmax) {
    switch (lang) {
      case "ar":
        return `الصغرى ${temperatureByLang(lang, weatherTempmin)} || الكبرى ${temperatureByLang(lang, weatherTempmax)}`;
      case "en":
        return `Low ${temperatureByLang(lang, weatherTempmin)} || High ${temperatureByLang(lang, weatherTempmax)}`;
      case "fr":
        return `Min ${temperatureByLang(lang, weatherTempmin)} || Max ${temperatureByLang(lang, weatherTempmax)}`;
      default:
        return `Low ${temperatureByLang(lang, weatherTempmin)} || High ${temperatureByLang(lang, weatherTempmax)}`;
    }
  }
  return (
    <Card sx={{ minWidth: "35%", bgcolor: "#035ab0ff" }} dir={lang === "ar" ? "rtl" : "ltr"}>
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
              {cityNameByLang(lang)}
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
              {date(lang)}
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
                  {temperatureByLang(lang, weatherData?.main?.temp)}{" "}
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
                {weatherDescriptionByLang(lang, weatherData?.weather?.[0]?.description)}
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "IBM",
                  fontWeight: "400",
                  fontSize: "16px",
                }}
              >
                {minMaxByLang(lang, weatherData?.main?.temp_min, weatherData?.main?.temp_max)}
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
        dir={lang === "ar" ? "rtl" : "ltr"}
        sx={{

          bgcolor:  "#1565c0",
          display: "flex",
          mb: 2,
          width: "90%",
          mx: "auto",
          borderRadius: "8px",
          gap: 2,
        }}
      >
      <Button
          value="ar"
          variant="text"
          sx={{
            color: "white",
            fontFamily: "IBM",
            fontWeight: "400",
            fontSize: "16px",
          }}
          size="small"
          onClick={() => handleChangeLang("ar")}
        >
          العربية
        </Button>
        <Button
          value="en"
          variant="text"
          sx={{
            color: "white",
            fontFamily: "IBM",
            fontWeight: "400",
            fontSize: "16px",
          }}
          size="small"
          onClick={() => handleChangeLang("en")}
        >
          English
        </Button>
        <Button
          value="fr"
          variant="text"
          sx={{
            color: "white",
            fontFamily: "IBM",
            fontWeight: "400",
            fontSize: "16px",
          }}
          size="small"
          onClick={() => handleChangeLang("fr")}
        >
          French
        </Button>
        
      </CardActions>
    </Card>
  );
}
