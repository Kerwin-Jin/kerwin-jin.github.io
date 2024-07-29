tailwind.config = {
  theme:{
    extend:{
      gridTemplateColumns:{
        "auto": "repeat(auto-fit, minmax(200px, 1fr))"
      },
      fontFamily:{
        Outfit:["Outfit", 'sans-serif'],
        Ovo:["Ovo", 'serif'],
      },
      animation:{
        spin_slow: "spin 6s linear infinite"
      },
      colors:{
        lightHover: "#fbf4fe",
        darkTheme: "#11001f",
        darkHover: "#260347"
      },
      boxShadow:{
        "black": "4px 4px 0 #000",
        "white": "4px 4px 0 #fff"
      }
    }
  },
  darkMode:"selector"
}