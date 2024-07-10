import * as React from "react";

export const AdminEmailTemplate = ({ name, message, email }) => (
  <div>
    <h1>
      From {name}: {email}
    </h1>
    <p>{message}</p>
  </div>
);
