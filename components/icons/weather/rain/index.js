import * as React from "react";
import { Svg } from "expo";

const Rain = props => (
  <Svg width={50} height={50} viewBox="0 0 100 100" {...props} fill="#FFFFFF">
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M63.943 64.941V60.56a7.988 7.988 0 0 0 4-6.92 8 8 0 0 0-8-7.999c-1.6 0-3.082.48-4.333 1.291-1.231-5.317-5.974-9.29-11.665-9.29-6.626 0-11.998 5.372-11.998 11.998 0 3.55 1.551 6.728 4 8.925v4.916c-4.777-2.768-8-7.922-8-13.841 0-8.835 7.163-15.997 15.998-15.997 6.004 0 11.229 3.311 13.965 8.203.664-.113 1.338-.205 2.033-.205 6.627 0 11.999 5.372 11.999 11.999 0 5.223-3.341 9.653-7.999 11.301zm-21.997-11.3a2 2 0 0 1 1.999 2v15.998a2 2 0 1 1-3.999 0V55.641a2 2 0 0 1 2-2zm7.999 4a2 2 0 0 1 2 2v15.998a2 2 0 0 1-4 0V59.641a2 2 0 0 1 2-2zm7.999-4a2 2 0 0 1 1.999 2v15.998a2 2 0 1 1-3.999 0V55.641a2 2 0 0 1 2-2z"
    />
  </Svg>
);

export default Rain;
