export default function ArrowDown({
  width = '1.5rem',
  height = '1.5rem',
  className,
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      {...{ className }}>
      <g transform="rotate(-90 12 12)">
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2">
          <path strokeDasharray="20" strokeDashoffset="20" d="M18 12H5.5">
            <animate fill="freeze" attributeName="stroke-dashoffset" dur="1s" values="20;0" />
          </path>
          <path strokeDasharray="12" strokeDashoffset="12" d="M3 12L10 19M3 12L10 5">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="1s"
              dur="0.5s"
              values="12;0"
            />
          </path>
        </g>
      </g>
    </svg>
  )
}
