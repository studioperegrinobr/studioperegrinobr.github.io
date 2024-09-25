tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: "#080f13"
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