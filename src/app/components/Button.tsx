import React from 'react';

type ButtonProps = {
  isGet?: boolean;
};

// const userKey = process.env.USER_KEY; // Handle environment variable properly
const userKey = '07ee8602fc0fdb91536a46df3697';

export default function Button({ isGet }: ButtonProps) {
  async function fetchData() {
    if (!userKey) {
      console.error('Environment variable USER_KEY is not set.');
      return;
    }
    try {
      const response = await fetch(
        `https://candidate.hubteam.com/candidateTest/v3/problem/dataset?userKey=${userKey}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data, 'data');
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error: ${error.message}`);
      } else {
        console.error('An unknown error occurred');
      }
    }
  }

  async function postData() {
    if (!userKey) {
      console.error('Environment variable USER_KEY is not set.');
      return;
    }
    try {
      const response = await fetch(
        `https://candidate.hubteam.com/candidateTest/v3/problem/dataset?userKey=${userKey}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data, 'data');
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error: ${error.message}`);
      } else {
        console.error('An unknown error occurred');
      }
    }
  }

  return (
    <button onClick={isGet ? fetchData : postData}>
      {isGet ? 'Get' : 'Post'}
    </button>
  );
}
