import React, { useEffect, useState } from 'react';

export default function Countdown({ countDate }) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const countDownDate = new Date(countDate).getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      if (distance < 0) {
        clearInterval(interval);
        setExpired(true);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [countDate]);

  if (expired) {
    return (
      <div className="cs_token_expired shadow-sm cs_rounded_10 bg-white cs_fs_36">
        TOKEN EXPIRED
      </div>
    );
  }
  return (
    <div className="cs_countdown cs_style_1 cs_mb_40">
      <div className="cs_countdown_box bg-white shadow-sm cs_rounded_10">
        <h3 id="cs_count_days" className="cs_countdown_number cs_fs_36 cs_mb_5">
          {days}
        </h3>
        <div className="cs_countdown_text text-uppercase cs_medium">Days</div>
      </div>
      <div className="cs_countdown_box bg-white shadow-sm cs_rounded_10">
        <h3
          id="cs_count_hours"
          className="cs_countdown_number cs_fs_36 cs_mb_5"
        >
          {hours}
        </h3>
        <div className="cs_countdown_text text-uppercase cs_medium">Hours</div>
      </div>
      <div className="cs_countdown_box bg-white shadow-sm cs_rounded_10">
        <h3
          id="cs_count_minutes"
          className="cs_countdown_number cs_fs_36 cs_mb_5"
        >
          {minutes}
        </h3>
        <div className="cs_countdown_text text-uppercase cs_medium">
          Minutes
        </div>
      </div>
      <div className="cs_countdown_box bg-white shadow-sm cs_rounded_10">
        <h3
          id="cs_count_seconds"
          className="cs_countdown_number cs_fs_36 cs_mb_5"
        >
          {seconds}
        </h3>
        <div className="cs_countdown_text text-uppercase cs_medium">
          Seconds
        </div>
      </div>
    </div>
  );
}
