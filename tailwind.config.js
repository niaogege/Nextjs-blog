/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        humanPickColorMain: "#1A4B7C",
        humanPickColorPrimary: "#2F6499",
        humanPickColorPatch: "#678099",
      },
      backgroundColor: {
        homebg: "#F6F6F6",
      },
      backgroundImage: {
        humanPick:
          "linear-gradient(180deg, #EBF3FA 0%, rgba(240,245,250,0.00) 100%)",
        womanPick:
          "linear-gradient(180deg, #FAF0F5 0%, rgba(250,240,245,0.00) 100%)",
      },
      height: {
        18: "4.5rem",
        85: "22rem",
      },
      textColor: {
        grayprimary: "#999999",
        little: "#8D8D91",
        secondary: "#ffed4a",
        danger: "#FF4444;",
        bottomSlogan: "#C9CBCD",
        highBlack: "#3D3D3D",
      },
      fontSize: {
        13: "13px",
        18: "18px",
      },
      fontFamily: {
        pingyin: [" PingFangSC-Regular", "ui-monospace", "SFMono-Regular"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
