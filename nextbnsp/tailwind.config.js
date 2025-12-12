module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
    darkMode: "class",
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px'
        },
        extend: {
            colors: {
                // Primary text colors
                text: {
                    primary: "var(--text-primary)",
                    secondary: "var(--text-secondary)",
                    muted: "var(--text-muted)",
                    light: "var(--text-light)",
                    medium: "var(--text-medium)",
                    brown: "var(--text-brown)",
                    'brown-alt': "var(--text-brown-alt)",
                    'white-overlay': "var(--text-white-overlay)"
                },
                // Background colors
                background: {
                    primary: "var(--bg-primary)",
                    light: "var(--bg-light)",
                    white: "var(--bg-white)"
                },
                // Border colors
                border: {
                    light: "var(--border-light)"
                },
                // Component-specific colors
                header: {
                    menu: "var(--header-menu-text)"
                },
                search: {
                    text: "var(--search-text)",
                    background: "var(--search-bg)",
                    border: "var(--search-border)"
                },
                button: {
                    text: "var(--button-text)",
                    background: "var(--button-bg)"
                }
            },
            fontSize: {
                'xs': 'var(--font-size-xs)',
                'sm': 'var(--font-size-sm)',
                'md': 'var(--font-size-md)',
                'lg': 'var(--font-size-lg)',
                'xl': 'var(--font-size-xl)',
                '2xl': 'var(--font-size-2xl)'
            },
            fontWeight: {
                'normal': 'var(--font-weight-normal)',
                'medium': 'var(--font-weight-medium)',
                'bold': 'var(--font-weight-bold)',
                'black': 'var(--font-weight-black)'
            },
            lineHeight: {
                'xs': 'var(--line-height-xs)',
                'sm': 'var(--line-height-sm)',
                'md': 'var(--line-height-md)',
                'lg': 'var(--line-height-lg)',
                'xl': 'var(--line-height-xl)',
                '2xl': 'var(--line-height-2xl)',
                '3xl': 'var(--line-height-3xl)',
                '4xl': 'var(--line-height-4xl)'
            },
            spacing: {
                'xs': 'var(--spacing-xs)',
                'sm': 'var(--spacing-sm)',
                'md': 'var(--spacing-md)',
                'lg': 'var(--spacing-lg)',
                'xl': 'var(--spacing-xl)',
                '2xl': 'var(--spacing-2xl)',
                '3xl': 'var(--spacing-3xl)'
            },
            borderRadius: {
                'xs': 'var(--radius-xs)',
                'sm': 'var(--radius-sm)',
                'md': 'var(--radius-md)'
            },
            gap: {
                'xs': 'var(--gap-xs)',
                'sm': 'var(--gap-sm)',
                'md': 'var(--gap-md)'
            }
        },
    },
    plugins: []
};