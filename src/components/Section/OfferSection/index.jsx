import Countdown from './Countdown';
import Button from '../../Button';

export default function OfferSection({
  bgImgUrl,
  imgUrl,
  sectionTitle,
  sectionSubTitle,
  countDate,
  btnUrl,
  btnText,
}) {
  return (
    <section
      className="cs_offer_section background-filled position-relative"
      style={{ backgroundImage: `url('${bgImgUrl}')` }}
    >
      <div className="container">
        <div className="row align-items-center cs_reverse_direction_lg">
          <div className="col-lg-6">
            <img src={imgUrl} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="cs_pt_133 cs_pt_lg_73 cs_pb_140 cs_pb_lg_30">
              {sectionTitle && (
                <h2 className="cs_fs_48 text-accent cs_mb_8">
                  {sectionTitle}
                  <svg
                    width={249}
                    height={47}
                    viewBox="0 0 249 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_601_466)">
                      <path
                        d="M2.59294 28.7456C2.59294 28.7456 155.707 7.96482 242.592 18.8052"
                        stroke="#E9A132"
                        strokeWidth={5}
                        strokeLinecap="round"
                      />
                      <path
                        d="M2.81488 25.5361C2.81488 25.5361 159.091 10.8201 245.855 25.909"
                        stroke="#E9A132"
                        strokeWidth={5}
                        strokeLinecap="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_601_466">
                        <rect
                          width="247.416"
                          height="36.8807"
                          fill="white"
                          transform="translate(0 10.0259) rotate(-2.11611)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </h2>
              )}
              {sectionSubTitle && <p className="cs_mb_25">{sectionSubTitle}</p>}
              <Countdown countDate={countDate} />
              <Button btnText={btnText} btnUrl={btnUrl} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
