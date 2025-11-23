// Ethiopian diamond/zigzag pattern inspired by traditional textiles
export const EthiopianPattern2 = ({
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
          id="ethiopian-pattern-2"
          x="0"
          y="0"
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          {/* Diamond shapes */}
          <path
            d="M 30 0 L 60 30 L 30 60 L 0 30 Z"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="2"
            opacity={opacity}
          />
          {/* Inner diamond */}
          <path
            d="M 30 15 L 45 30 L 30 45 L 15 30 Z"
            fill="#D4AF37"
            opacity={opacity * 0.3}
          />
          {/* Zigzag lines */}
          <path
            d="M 0 0 L 15 15 L 30 0 L 45 15 L 60 0"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="1"
            opacity={opacity * 0.6}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#ethiopian-pattern-2)" />
    </svg>
  );
};
