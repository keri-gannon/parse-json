'use client';
import { useState } from 'react';
import GetButton from './components/Buttons/GetButton';
import PostButton from './components/Buttons/PostButton';

type PartnerData = {
  availableDates: string[];
  country: string;
  email: string;
  firstName: string;
  lastName: string;
};

export type PartnersData = {
  partners: PartnerData[];
};

export type CountryData = {
  attendeeCount: number;
  attendees: string[];
  name: string;
  startDate: string | null;
};

export type CountriesData = {
  countries: CountryData[];
};

export default function Home() {
  const [partersData, setPartnersData] = useState<PartnersData>({
    partners: [],
  });

  return (
    <>
      <GetButton setPartnersData={setPartnersData} />
      <br />
      <br />
      <PostButton partnersData={partersData} />
    </>
  );
}
