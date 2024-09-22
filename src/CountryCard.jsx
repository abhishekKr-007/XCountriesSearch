const CountryCard = ({ name, flagImg, flagAltText }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        margin: "10px",
        border: "0.5px solid grey",
        borderRadius: "4px",
        width: "200px",
        height: "200px",
      }}
    >
      <img
        src={flagImg}
        alt={`Flag of ${flagAltText}`}
        style={{ width: "100px", height: "100px" }}
      />
      <h2>{name}</h2>
    </div>
  );
};
export default CountryCard;
