import React from "react";

export const Badge = ({ children, variant }) => (
  <span className={`badge ${variant}`}>{children}</span>
);
