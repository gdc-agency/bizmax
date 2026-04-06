import parse from 'html-react-parser';
import Button from '../Button';

export default function Hero({
  bgUrl,
  titleUp,
  title,
  subTitle,
  btnText,
  btnUrl,
}) {
  return (
    <div className="cs_hero cs_style_1 d-flex align-items-center justify-content-center background-filled position-relative overflow-hidden">
      <figure
        className="cs_swiper_parallax_bg"
        style={{ backgroundImage: `url(${bgUrl})` }}
      >
        <div className="bg-primary opacity-75 position-absolute w-100 h-100 start-0 top-0" />
      </figure>
      <div className="container">
        <div className="cs_hero_text position-relative cs_zindex_5 d-inline-block">
          <h2 className="text-white cs_mb_5 fw-normal cs_fs_18">
            {parse(titleUp)}
          </h2>
          <h1 className="text-white cs_mb_16 cs_fs_60 cs_fs_lg_46">
            {parse(title)}
          </h1>
          <p className="text-white cs_mb_20">{parse(subTitle)}</p>
          <div className="cs_hero_btn">
            <Button btnText={btnText} btnUrl={btnUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}
