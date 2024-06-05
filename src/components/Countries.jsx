export default function Countries({ list }) {
  return (
    <ul>
      {list.map((country) => (
        <li className="country_item" key={country.capital}>
          <div className="country_info">
            <h4 className="text-large">{country.name}</h4>
            <h5>Capitale : {country.capital}</h5>
            <h5>Population : {country.population}</h5>
          </div>
        </li>
      ))}
    </ul>
  );
}
