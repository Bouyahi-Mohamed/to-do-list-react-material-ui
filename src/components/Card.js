// React
import {useEffect } from "react";
// Material UI components
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";
import TextField from '@mui/material/TextField';
// external libraries
//images
import weatherIcon from '../images/weatherIcon.jpg';

// redux usiing
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm, setLang ,fetchInfo } from '../features/apiCall/getInfo';




export default function BasicCard() {
  // redux state
  const lang = useSelector((state) => state.getInfo.lang);
  const searchTerm = useSelector((state) => state.getInfo.searchTerm);
  const weatherData = useSelector((state) => state.getInfo.data);
  // redux dispatch function
  const dispatch = useDispatch();

  // fetch weather data when searchTerm or lang changes
  useEffect(() => {
    dispatch(fetchInfo({ searchTerm, lang }));
  }, [searchTerm, lang, dispatch]);


// redux action dispatchers search term and lang
  const handleChangeSearchTerm = (e) => {
    dispatch(setSearchTerm(e.target.value));
  }
  const handleChangeLang = (lang) => {
    dispatch(setLang(lang));
  }
  
  // helper functions
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
              {weatherData?.name}
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
                  src={`https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@2x.png`}
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
                {weatherData?.weather ? weatherData.weather[0].description : ""}
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
                src={weatherIcon}
                alt="weather icon"
                style={{ width: "200px", height: "200px" ,backgroundColor:"white", borderRadius:"50%", boxShadow:"0px 0px 10px rgba(255, 255, 255, 0.5)"}}
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
        <TextField value={searchTerm} id="outlined-basic" label={lang === "ar" ? "بحث" : lang === "en" ? "Search" : "recherche"} variant="filled" sx={{ input: { color: "white" }, label: { color: "white" }, "& .MuiInputLabel-root.Mui-focused": {
      color: "white", 
    },}} onChange={handleChangeSearchTerm} />

      </CardActions>
    </Card>
  );
}
