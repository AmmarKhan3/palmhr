import React from "react";
import HubspotForm from "react-hubspot-form";
import { navigate } from "gatsby";

const HubForm = () => {
  const onSucmit = ()=> {
  navigate("/ThankYouPage")
  }
  return (
    <HubspotForm
      region="na1"
      portalId="9295838"
      formId="19a5eab0-a339-4e9d-bfc1-8434338d086c"
      onSubmit={onSucmit}
      onReady={(form) => console.log(form, "Form ready!")}
      loading={<div>Loading...</div>}
    />
  );
};

export default HubForm;
