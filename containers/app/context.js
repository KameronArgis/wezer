import * as React from "react";

const APP_THEME = {
  day: {
    background: "#FA9A4B"
  },
  night: {
    backgound: "#4F3021"
  }
};

export const APP_CONTEXT = {
  theme: APP_THEME.day,
  forecast: []
};

export const AppContext = React.createContext(APP_CONTEXT);
