import React from "react";
export default function PinMoto(props) {
    return (
        //its a SVG example, it`s by half, or corrupted, to not occupy large caracter space here, use your SVG file here...
        <svg width="37" height="45" viewBox="0 0 26 34" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M13 0C6.0974 0 0.481453 5.83195 0.481453 13C0.481453 15.1519 0.999529 17.2855 1.98441 19.1779L12.3154 33.5811C12.4529 33.8397 12.715 34 13 34C13.285 34 13.547 33.8397 13.6846 33.5811L24.0194 19.1715C25.0005 17.2855 25.5185 15.1518 25.5185 12.9999C25.5185 5.83195 19.9026 0 13 0Z" fill="#DC462D" {...props} />
            <g clip-Path="url(#clip0)">
                <path d="M19.0012 12.7109C17.3488 12.7109 16.0023 14.1322 16.0023 15.8763C16.0023 17.6204 17.3453 19.0417 19.0012 19.0417C20.6535 19.0417 22 17.6242 22 15.8763C22 14.1285 20.6535 12.7109 19.0012 12.7109ZM19.0012 18.2513C17.7602 18.2513 16.7512 17.1863 16.7512 15.8763C16.7512 14.5663 17.7602 13.5013 19.0012 13.5013C20.2422 13.5013 21.2512 14.5663 21.2512 15.8763C21.2512 17.1863 20.2422 18.2513 19.0012 18.2513Z" fill="white" />

            </g>
            <defs>
                <clippath id="clip0">
                    <rect width="18" height="19" fill="white" transform="translate(4 4)" />
                </clippath>
            </defs>
        </svg>);
}