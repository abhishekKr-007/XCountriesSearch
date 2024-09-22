import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

function Country() {
  const API_ENDPOINT = "https://restcountries.com/v3.1/all";
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setFilteredCountries(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to fetch country data");
      });
  }, []);

  useEffect(() => {
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCountries(filtered);
  }, [searchTerm, countries]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <input
        type="text"
        placeholder="Search for countries..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
        style={{ width: "700px", padding: "10px", border: "1px solid gray" }}
      />
      <div
        className="country-container"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {filteredCountries.length > 0
          ? filteredCountries.map((country) => (
              <CountryCard
                key={country.cca3}
                name={country.name.common}
                flagImg={country.flags.png}
                flagAltText={country.name.common}
              />
            ))
          : null}
      </div>
    </div>
  );
}

export default Country;
