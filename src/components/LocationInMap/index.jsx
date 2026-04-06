export default function LocationInMap({ data }) {
  return (
    <div className="cs_map">
      <iframe id="map" src={data} allowFullScreen title="Google Map"></iframe>
    </div>
  );
}
