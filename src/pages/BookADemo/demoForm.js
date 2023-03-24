import React from "react";
import HubspotForm from "react-hubspot-form";
import { navigate, Script } from "gatsby";

const BookDemo = () => {
 
  return (
    <>
    <Script type="text/javascript" src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"></Script>
    <div class="meetings-iframe-container" data-src="https://meetings.hubspot.com/majid-al-awami/palmhrdemo?embed=true"></div>
    </>
  );
};

export default BookDemo;
