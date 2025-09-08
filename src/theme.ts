// mantine-theme.ts

import { MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  colors: {
    // Warm golden yellow
    brandYellow: [
      '#FFF9E6', // 50
      '#FFF1C2', // 100
      '#FFE89B', // 200
      '#FFDD72', // 300
      '#FDD14A', // 400
      '#F7C948', // 500 (main)
      '#E6B83C', // 600
      '#D1A632', // 700
      '#B89026', // 800
      '#99791C', // 900
    ],

    // Deep charcoal blue-gray
    charcoal: [
      '#F2F4F6', // 50
      '#E0E3E7', // 100
      '#C6CAD1', // 200
      '#A6ACB6', // 300
      '#7D8291', // 400
      '#2D3142', // 500 (main)
      '#272B3A', // 600
      '#212531', // 700
      '#1B1E28', // 800
      '#14161E', // 900
    ],

    // Muted steel blue
    steelBlue: [
      '#F0F6FA', // 50
      '#D9E7F2', // 100
      '#B8D2E6', // 200
      '#93BAD7', // 300
      '#6D9DC5', // 400 (main)
      '#5E8CAF', // 500
      '#507A98', // 600
      '#436981', // 700
      '#35566B', // 800
      '#274255', // 900
    ],
  },

  primaryColor: 'steelBlue',
  primaryShade: 5, // use brandYellow[500]

  // optional: font + radius for modern look
  fontFamily: 'Inter, sans-serif',
  defaultRadius: 'md',
};
