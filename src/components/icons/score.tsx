// icon:scoreboard | Material Design Icons https://materialdesignicons.com/ | Austin Andrews
import * as React from "react";

function ScoreIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="4em"
      width="4em"
      {...props}
    >
      <path d="M6 9h2v6H6V9m10 0h2v6h-2V9m5-6c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h18M5 7c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h4c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1H5m10 0c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h4c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1h-4m-3 4c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1m0 4c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1z" />
    </svg>
  );
}

export default ScoreIcon;
