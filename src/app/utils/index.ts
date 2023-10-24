import { CountriesData, CountryData, PartnersData } from '../page';

export const findOptimalDate = (partnersData: PartnersData): CountriesData => {
  const countryDataMap: Map<string, CountryData> = new Map();

  for (const partner of partnersData.partners) {
    const country = partner.country;
    if (!countryDataMap.has(country)) {
      countryDataMap.set(country, {
        attendeeCount: 0,
        attendees: [],
        name: country,
        startDate: null,
      });
    }

    const countryData = countryDataMap.get(country)!;
    const availableDates = partner.availableDates.sort();

    for (let i = 0; i < availableDates.length - 1; i++) {
      const date1 = availableDates[i];
      const date2 = availableDates[i + 1];
      const attendees = partnersData.partners.filter(
        (p) =>
          p.country === country &&
          p.availableDates.includes(date1) &&
          p.availableDates.includes(date2)
      );

      if (attendees.length > countryData.attendeeCount) {
        countryData.attendeeCount = attendees.length;
        countryData.attendees = attendees.map((p) => p.email);
        countryData.startDate = date1;
      } else if (
        attendees.length === countryData.attendeeCount &&
        date1 < countryData.startDate!
      ) {
        countryData.startDate = date1;
        countryData.attendees = attendees.map((p) => p.email);
      }
    }
  }

  const countries = Array.from(countryDataMap.values());
  return { countries };
};
