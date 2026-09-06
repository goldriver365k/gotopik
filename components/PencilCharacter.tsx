type PencilCharacterProps = {
  size?: number;
};

export default function PencilCharacter({ size = 88 }: PencilCharacterProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 88 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="rotate(-18 44 44)">
        <rect x="34" y="10" width="20" height="56" rx="8" fill="#12B886" />
        <path d="M34 66h20l-10 14-10-14Z" fill="#0CA678" />
        <rect x="34" y="10" width="20" height="12" rx="6" fill="#E6F9F3" />
        <circle cx="40" cy="38" r="2.4" fill="#14181A" />
        <circle cx="48" cy="38" r="2.4" fill="#14181A" />
        <path
          d="M39 46c1.8 2 6.2 2 8 0"
          stroke="#14181A"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </g>
    </svg>
  );
}
