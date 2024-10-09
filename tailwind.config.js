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
        },
        animation: {
          "fadeIn": "fadeIn 0.2s ease-in",
        }
      }
    }
  }