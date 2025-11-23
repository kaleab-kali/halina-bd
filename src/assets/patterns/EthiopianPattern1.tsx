// Ethiopian geometric pattern inspired by traditional habesha designs
export const EthiopianPattern1 = ({
  className = "",
  opacity = 0.1
}: {
  className?: string;
  opacity?: number
}) => {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="ethiopian-pattern-1"
          x="0"
          y="0"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          {/* Cross pattern */}
          <path
            d="M 50 0 L 50 100 M 0 50 L 100 50"
            stroke="#D4AF37"
            strokeWidth="2"
            opacity={opacity}
          />
          {/* Diagonal lines */}
          <path
            d="M 0 0 L 100 100 M 100 0 L 0 100"
            stroke="#D4AF37"
            strokeWidth="1"
            opacity={opacity * 0.5}
          />
          {/* Small circles at intersections */}
          <circle cx="50" cy="50" r="5" fill="#D4AF37" opacity={opacity} />
          <circle cx="0" cy="0" r="3" fill="#D4AF37" opacity={opacity} />
          <circle cx="100" cy="0" r="3" fill="#D4AF37" opacity={opacity} />
          <circle cx="0" cy="100" r="3" fill="#D4AF37" opacity={opacity} />
          <circle cx="100" cy="100" r="3" fill="#D4AF37" opacity={opacity} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#ethiopian-pattern-1)" />
    </svg>
  );
};
