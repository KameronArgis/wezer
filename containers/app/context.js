import * as React from "react";
import COLORS from "../../style/colors";

const APP_THEME = {
  day: {
    background: COLORS.orange
  },
  night: {
    backgound: COLORS.black
  }
};

export const APP_CONTEXT = {
  theme: APP_THEME.day,
  forecast: []
};

export const AppContext = React.createContext(APP_CONTEXT);
