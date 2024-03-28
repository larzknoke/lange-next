"use client";

import React from "react";

const FormEvent = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onClick={handleSubmit}>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <textarea placeholder="Nachricht" />
      <button>Nachricht absenden</button>
    </form>
  );
};

export default FormEvent;
