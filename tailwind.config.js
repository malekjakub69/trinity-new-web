/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./src/**/*.{js,jsx,ts,tsx}', "./index.html"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      mobile: '320px',
      tablet: '1024px',
      desktop: '1280px'
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        'green': {
          '50': '#f6fbea',
          '100': '#ebf5d2',
          '200': '#d7ebab',
          '300': '#bbdd79',
          '400': '#a1cc4f',
          '500': '#82b131',
          '600': '#648d23',
          '700': '#48651d',
          '800': '#40561e',
          '900': '#364a1d',
          '950': '#1b280b',
          DEFAULT: '#48651d'
        },
        'red': {
          '50': '#fdf3f3',
          '100': '#fbe9e8',
          '200': '#f7d4d4',
          '300': '#f1b0b1',
          '400': '#e88488',
          '500': '#db5860',
          '600': '#c83e4d',
          '700': '#a62a3a',
          '800': '#8b2637',
          '900': '#782334',
          '950': '#420f17',
          DEFAULT: '#c83e4d'
        },
        'blue': {
          '50': '#f5f7fa',
          '100': '#eaeef4',
          '200': '#cfdbe8',
          '300': '#a6bdd3',
          '400': '#7699ba',
          '500': '#547ca3',
          '600': '#456990',
          '700': '#36506e',
          '800': '#2f455d',
          '900': '#2b3c4f',
          '950': '#1d2734',
          DEFAULT: '#456990'
        },
        navy: {
          '50': '#f1f7fd',
          '100': '#e0edf9',
          '200': '#c8e0f5',
          '300': '#a3cded',
          '400': '#77b1e3',
          '500': '#5795da',
          '600': '#437bcd',
          '700': '#3967bc',
          '800': '#345499',
          '900': '#2d4777',
          '950': '#202e4b',
          DEFAULT: '#2d4777'
        },
        mint: {
          '50': '#f0fbfb',
          '100': '#d9f3f4',
          '200': '#b8e7e9',
          '300': '#80d1d6',
          '400': '#4fb9c1',
          '500': '#349ca6',
          '600': '#2e7f8c',
          '700': '#2b6773',
          '800': '#2a5660',
          '900': '#274952',
          '950': '#152f37',
          DEFAULT: '#80D1D6'
        },
        "floral-white": {
          '50': '#fdfaf3',
          '100': '#f9f0db',
          '200': '#f2dfb6',
          '300': '#e9c888',
          '400': '#e0a957',
          '500': '#d99136',
          '600': '#ca792c',
          '700': '#a85f26',
          '800': '#874c25',
          '900': '#6d3f21',
          '950': '#3a1f10',
          DEFAULT: '#FDFAF3'
        },
        "lime-white": {
          '50': '#f6f6f0',
          '100': '#e5e6d6',
          '200': '#d3d3b5',
          '300': '#b9b98b',
          '400': '#a4a16b',
          '500': '#95905d',
          '600': '#80774e',
          '700': '#675e41',
          '800': '#584e3b',
          '900': '#4d4436',
          '950': '#2c251c',
          DEFAULT: '#E5E6D6'
        },

        white: '#fff',
        black: '#000',

        transparent: {
          DEFAULT: ' #00000000',
          50: '#00000011',
          100: '#00000022',
          200: '#00000033',
          300: '#00000055',
          400: '#00000066',
          500: '#00000088',
          600: '#000000aa',
          700: '#000000cc',
          800: '#000000dd',
          900: '#000000ff'
        },

      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    fontFamily: {
      body: ['Titillium Web', 'sans-serif']
    }
  },
  plugins: [require("tailwindcss-animate")],
}