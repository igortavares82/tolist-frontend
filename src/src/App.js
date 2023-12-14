import { useState, useEffect, useMemo } from "react";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "assets/theme-dark";
import themeRTL from "assets/theme/theme-rtl";

// RTL plugins
import rtlPlugin from "stylis-plugin-rtl";

// @emotion components
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

export default function App() {
  const [rtlCache, setRtlCache] = useState(null);

  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });

    setRtlCache(cacheRtl);
  }, []);

  useEffect(() => {
    document.body.setAttribute("dir", "rtl");
  }, []);

  return (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={themeRTL}>
        <CssBaseline />
        // ... your code goes here
      </ThemeProvider>
    </CacheProvider>
  )
}