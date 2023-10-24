import { CountriesData, PartnersData } from '../page';

export const groupPartnersByCountry = (partnersData: PartnersData) => {
  const countriesData: CountriesData = { countries: [] };

  partnersData.partners.forEach((partner) => {
    const existingCountry = countriesData.countries.find(
      (country) => country.name === partner.country
    );
    if (existingCountry) {
      existingCountry.attendees.push(partner.email);
      existingCountry.attendeeCount += 1;
    } else {
      countriesData.countries.push({
        attendeeCount: 1,
        attendees: [partner.email],
        name: partner.country,
      });
    }
  });
  return countriesData;
};

// Iterate through partners, and group them by country
// If there are no two days in a row when any partners can make it, return startDate: null, attendees: [], attendeeCount: 0
