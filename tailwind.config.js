tailwind.config = {
    theme: {
      fontFamily: {
        'sans': 'Outfit, sans-serif',
        'expletus': 'Expletus Sans, sans-serif'
      },
      extend: {
        colors: {
          primary: "#080f13",
          backgrond: "#fffcf3",
          gold: "#B68B2E"
        },
        keyframes: {
          "fadeIn": {
            from: { opacity: 0 },
            to: { opacity: 1 },
          },
          pulse: {
            "0%, 100%": { opacity: "1" },
            "50%": { opacity: "0.5" },
          },
          rotate: {
            "0%": { transform: "rotate(0deg)" },
            "100%": { transform: "rotate(360deg)" },
          }
        },
        animation: {
          "fadeIn": "fadeIn 1s ease-in",
          "rotate-pulse": "pulse 2s infinite ease-in-out, rotate 3s linear infinite",
        }
      }
    }
  }