/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
    	extend: {
    		colors: {
    			'apple-black': '#000000',
    			'apple-grey': '#8E8E93',
    			'apple-blue': '#007AFF',
    			'apple-white': '#FFFFFF',
    			'cyber-blue': '#007BFF',
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		fontFamily: {
    			cyber: [
    				'Orbitron',
    				'sans-serif'
    			],
    			sans: [
    				'Inter',
    				'sans-serif'
    			]
    		},
    		borderRadius: {
    			apple: '1.25rem',
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		backdropBlur: {
    			apple: '20px'
    		},
    		transitionTimingFunction: {
    			'apple-ease': 'cubic-bezier(0.32, 0.72, 0, 1)'
    		},
    		spacing: {
    			'8': '8px',
    			'16': '16px',
    			'24': '24px',
    			'32': '32px',
    			'48': '48px',
    			'64': '64px'
    		},
    		animation: {
    			'horizontal-marquee': 'scrollHorizontal 40s linear infinite',
    			'horizontal-marquee-reverse': 'scrollHorizontalReverse 45s linear infinite'
    		},
    		keyframes: {
    			scrollHorizontal: {
    				'0%': {
    					transform: 'translateX(0)'
    				},
    				'100%': {
    					transform: 'translateX(-50%)'
    				}
    			},
    			scrollHorizontalReverse: {
    				'0%': {
    					transform: 'translateX(-50%)'
    				},
    				'100%': {
    					transform: 'translateX(0)'
    				}
    			}
    		}
    	}
    },
    plugins: [require("tailwindcss-animate")],
}
