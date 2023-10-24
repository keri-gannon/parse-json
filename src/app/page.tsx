'use client';
import { useState } from 'react';
import Button from './components/Button';

type Partner = {
  availableDates: string[];
  country: string;
  email: string;
  firstName: string;
  lastName: string;
};

type PartnersData = {
  partners: Partner[];
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
