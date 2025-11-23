import { minMaxByLang, temperatureByLang, date, weatherKelvinToCelsius, weatherKelvinToFahrenheit  } from '../components/Card';

test('weather api to C ', () => {
  expect(weatherKelvinToCelsius(287.26)).toBe("14°C");
});

test('weather api to F ', () => {
  expect(weatherKelvinToFahrenheit(14)).toBe("57°F");
});

test('temperature by lang ar ', () => {
  expect(temperatureByLang("ar", 287.26)).toBe("14°C");
});

test('temperature by lang en ', () => {
  expect(temperatureByLang("en", 14)).toBe("57°F");
});

test('temperature by lang fr ', () => {
  expect(temperatureByLang("fr", 287.26)).toBe("14°C");
});


test('min max by lang ar ', () => {
  expect(minMaxByLang("ar", 283.15, 293.15)).toBe("الصغرى 10°C || الكبرى 20°C");
});

test('min max by lang en ', () => {
  expect(minMaxByLang("en", 10, 20)).toBe("Low 50°F || High 68°F");
});
test('min max by lang fr ', () => {
  expect(minMaxByLang("fr", 283.15, 293.15)).toBe("Min 10°C || Max 20°C");
});
