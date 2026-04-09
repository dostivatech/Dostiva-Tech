export default function WaveBackground({
  back = "#e0edff",
  front = "#dbeafe",
}) {
  return (
    <div
  className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none"
  style={{ zIndex: -100 }}
>

      
      {/* Back triangle wave */}
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="w-[200%] h-48 animate-wave-slow"
      >
        <path
          fill={back}
          d="
            M0 240
            L60 200
            L120 240
            L180 200
            L240 240
            L300 200
            L360 240
            L420 200
            L480 240
            L540 200
            L600 240
            L660 200
            L720 240
            L780 200
            L840 240
            L900 200
            L960 240
            L1020 200
            L1080 240
            L1140 200
            L1200 240
            L1260 200
            L1320 240
            L1380 200
            L1440 240
            L1440 320
            L0 320
            Z
          "
        />
      </svg>

      {/* Front triangle wave */}
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="w-[200%] h-40 -mt-28 animate-wave-fast"
      >
        <path
          fill={front}
          d="
            M0 220
            L80 180
            L160 220
            L240 180
            L320 220
            L400 180
            L480 220
            L560 180
            L640 220
            L720 180
            L800 220
            L880 180
            L960 220
            L1040 180
            L1120 220
            L1200 180
            L1280 220
            L1360 180
            L1440 220
            L1440 320
            L0 320
            Z
          "
        />
      </svg>
    </div>
  );
}
