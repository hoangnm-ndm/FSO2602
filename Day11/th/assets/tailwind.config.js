tailwind.config = {
	theme: {
		extend: {
        screens: {
            sm: '420px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',

            // custom
            tablet: '900px',
            laptop: '1200px',
            desktop: '1440px',
      },
			colors: {
				primary: "#FF4B4B",
				secondary: "#2B59C3",
				blue: {
					500: "#2B59C3", // đổi sang màu đậm hơn (tuỳ bạn chọn)
				},
				yellow: {
					500: "#FFC300",
				},
                black:{
                    500: "#111C2C",
                },
                red:{
                    500: "#B81120",
                    400: "#DC3135"
                },
                blue:{
                    200: "#D8E3FA",
                }
			},
			spacing: {
				128: "32rem",
			},
			fontFamily: {
				sans: ["Graphik", "sans-serif"],
			},
			"color-red-500": "#2B59C3",
		},
	},
	// Kích hoạt các plugin chính thức nếu cần
	plugins: [
		// tailwind.plugin.lineClamp,
	],
};
