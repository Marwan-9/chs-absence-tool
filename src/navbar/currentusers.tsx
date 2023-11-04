import React from "react";
import { BetaAnalyticsDataClient } from "@google-analytics/data";

interface IButtonProps{
  label: string;
  onClick: () => void;
  sx: React.CSSProperties;
}

const CurrentUsers: React.FC<IButtonProps> = (props: IButtonProps) => {
  const { label, onClick, sx} = props;
  const analyticsDataClient = new BetaAnalyticsDataClient({
    credentials: {
      client_email: process.env.GA_CLIENT_EMAIL,
      private_key: process.env.GA_PRIVATE_KEY?.replace(/\n/gm, "\n"), // replacing is necessary
    },
  });
  return(
    <>
    </>
  )
}

export default CurrentUsers;