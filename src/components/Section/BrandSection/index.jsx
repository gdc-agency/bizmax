
export default function BrandSection({data}) {
  return (
    <div className="container">
      <div className="cs_brands d-flex justify-content-xl-between align-items-center cs_column_gap_25 cs_row_gap_25 flex-wrap justify-content-center">
        {data.map((item, index) => (
          <div className="cs_brand" key={index}>
            <img src={item.imgUrl} alt="Brand" />
          </div>
        ))}
      </div>
    </div>
  )
}
