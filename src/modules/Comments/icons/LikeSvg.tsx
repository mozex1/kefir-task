import {IconProps} from "src/common/types";

type Props = {
    type?: "empty" | "fill";
} & IconProps;

const LikeSvg = ({type = "empty", sizes = "22", className}: Props) => {
    if (type === "fill") {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={sizes}
                height={sizes}
                viewBox="0 0 22 22"
                fill="none"
                className={className}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.88157 15.1717C4.06987 13.2604 2.62123 11.9856 2.15374 9.96945C1.80608 8.47017 1.90934 5.7293 3.95027 4.45277C8.45061 1.63764 10.9723 5.95738 10.9723 5.95738H11.0277C11.0277 5.95738 13.5494 1.63764 18.0497 4.45277C20.0907 5.7293 20.1939 8.47017 19.8463 9.96945C19.3788 11.9856 17.9301 13.2604 16.1184 15.1717C11 20 11.0028 20.0049 11 20C11 20 11 20 5.88157 15.1717Z"
                    fill="url(#paint0_linear_1_79)"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.88157 15.1717C4.06987 13.2604 2.62123 11.9856 2.15374 9.96945C1.80608 8.47017 1.90934 5.7293 3.95027 4.45277C8.45061 1.63764 10.9723 5.95738 10.9723 5.95738H11.0277C11.0277 5.95738 13.5494 1.63764 18.0497 4.45277C20.0907 5.7293 20.1939 8.47017 19.8463 9.96945C19.3788 11.9856 17.9301 13.2604 16.1184 15.1717C11 20 11.0028 20.0049 11 20C11 20 11 20 5.88157 15.1717Z"
                    stroke="url(#paint1_linear_1_79)"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.88157 15.1717C4.06987 13.2604 2.62123 11.9856 2.15374 9.96945C1.80608 8.47017 1.90934 5.7293 3.95027 4.45277C8.45061 1.63764 10.9723 5.95738 10.9723 5.95738H11.0277C11.0277 5.95738 13.5494 1.63764 18.0497 4.45277C20.0907 5.7293 20.1939 8.47017 19.8463 9.96945C19.3788 11.9856 17.9301 13.2604 16.1184 15.1717C11 20 11.0028 20.0049 11 20C11 20 11 20 5.88157 15.1717Z"
                    stroke="url(#paint2_linear_1_79)"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_1_79"
                        x1="9.28437"
                        y1="-4.85326"
                        x2="24.8758"
                        y2="4.9132"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#D44F4F" />
                        <stop offset="1" stopColor="#B43333" />
                    </linearGradient>
                    <linearGradient
                        id="paint2_linear_1_79"
                        x1="9.28437"
                        y1="-4.85326"
                        x2="24.8758"
                        y2="4.9132"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#D44F4F" />
                        <stop offset="1" stopColor="#B43333" />
                    </linearGradient>
                </defs>
            </svg>
        );
    }
    return (
        <svg
            className={className}
            width={sizes}
            height={sizes}
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g>
                <path
                    id="Vector"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.88157 15.1717C4.06987 13.2604 2.62123 11.9856 2.15374 9.96945C1.80608 8.47017 1.90934 5.7293 3.95027 4.45277C8.45061 1.63764 10.9723 5.95738 10.9723 5.95738H11.0277C11.0277 5.95738 13.5494 1.63764 18.0497 4.45277C20.0907 5.7293 20.1939 8.47017 19.8463 9.96945C19.3788 11.9856 17.9301 13.2604 16.1184 15.1717C11 20 11.0028 20.0049 11 20C11 20 11 20 5.88157 15.1717Z"
                    stroke="url(#paint0_linear_1_93)"
                    strokeWidth="2"
                />
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear_1_93"
                    x1="9.28437"
                    y1="-4.85326"
                    x2="24.8758"
                    y2="4.9132"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#D44F4F" />
                    <stop offset="1" stopColor="#B43333" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default LikeSvg;
