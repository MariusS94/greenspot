import React, { useState } from "react";
import InputField from "../components/InputField";
import LinkButton from "../components/LinkButton";

const ZipInput = () => {
  const [query, setQuery] = useState("");
  return (
    <div>
      <InputField
        type="number"
        value={query}
        onChange={(value) => setQuery(value)}
        placeholder="PLZ Eingabe"
      ></InputField>
      <LinkButton link={`/forecast/${query}`} label="Bestätigen"></LinkButton>
    </div>
  );
};

export default ZipInput;
