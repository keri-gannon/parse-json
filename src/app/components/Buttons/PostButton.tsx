import { PartnersData } from '@/app/page';
import { findOptimalDate } from '@/app/utils';
import React from 'react';

// const userKey = process.env.USER_KEY; // Handle environment variable properly
const userKey = '07ee8602fc0fdb91536a46df3697';

type PostButtonProps = {
  partnersData: PartnersData;
};

export default function PostButton({ partnersData }: PostButtonProps) {
  async function postData() {
    if (!userKey) {
      console.error('Environment variable USER_KEY is not set.');
      return;
    }

    try {
      const url = `https://candidate.hubteam.com/candidateTest/v3/problem/result?userKey=${userKey}`;
      const optimalDate = findOptimalDate(partnersData);
      const data = {
        ...optimalDate,
      };

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Specify the content type
        },
        body: JSON.stringify(data), // Convert data to JSON format
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error: ${error.message}`);
      } else {
        console.error('An unknown error occurred');
      }
    }
  }

  // TODO: Show a message when the data is posted successfully
  // TODO: Show a message when the data is not posted successfully (i.e. user has not pressed GET button yet)

  return <button onClick={postData}>Post</button>;
}
