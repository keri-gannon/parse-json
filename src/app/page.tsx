'use client';
import { useState } from 'react';
import Button from './components/Button';

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
  startDate?: Date;
};

export type CountriesData = {
  countries: CountryData[];
};

export default function Home() {
  const [parterData, setPartnerData] = useState<PartnersData>({ partners: [] });

  return (
    <>
      <Button isGet />
      <br />
      <br />
      <Button />
    </>
  );
}
