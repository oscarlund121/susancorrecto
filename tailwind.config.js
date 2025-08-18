const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'archivo': ['var(--font-archivo)', 'sans-serif'],
      },
      colors: {
        'susan-green': '#367067',
        'susan-gray': '#D3D9E5',
      },
    },
  },
  plugins: [],
}

export default config
