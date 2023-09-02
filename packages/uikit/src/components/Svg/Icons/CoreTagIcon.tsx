import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="68" height="24" viewBox="0 0 68 24" fill="none" {...props}>
<rect x="0.5" width="67" height="24" rx="12" fill="#5DCB83"/>
<path d="M23.0766 11.2658L22.2833 10.3441C22.1316 10.1691 22.0091 9.84247 22.0091 9.60914V8.61747C22.0091 7.99914 21.5016 7.49164 20.8833 7.49164H19.8916C19.6641 7.49164 19.3316 7.36914 19.1566 7.21747L18.235 6.42414C17.8325 6.07997 17.1733 6.07997 16.765 6.42414L15.8491 7.22331C15.6741 7.36914 15.3416 7.49164 15.1141 7.49164H14.105C13.4866 7.49164 12.9791 7.99914 12.9791 8.61747V9.61497C12.9791 9.84247 12.8566 10.1691 12.7108 10.3441L11.9233 11.2716C11.585 11.6741 11.585 12.3275 11.9233 12.73L12.7108 13.6575C12.8566 13.8325 12.9791 14.1591 12.9791 14.3866V15.3841C12.9791 16.0025 13.4866 16.51 14.105 16.51H15.1141C15.3416 16.51 15.6741 16.6325 15.8491 16.7841L16.7708 17.5775C17.1733 17.9216 17.8325 17.9216 18.2408 17.5775L19.1625 16.7841C19.3375 16.6325 19.6641 16.51 19.8975 16.51H20.8891C21.5075 16.51 22.015 16.0025 22.015 15.3841V14.3925C22.015 14.165 22.1375 13.8325 22.2891 13.6575L23.0825 12.7358C23.4208 12.3333 23.4208 11.6683 23.0766 11.2658ZM19.9266 10.8983L17.1091 13.7158C17.0275 13.7975 16.9166 13.8441 16.8 13.8441C16.6833 13.8441 16.5725 13.7975 16.4908 13.7158L15.0791 12.3041C14.91 12.135 14.91 11.855 15.0791 11.6858C15.2483 11.5166 15.5283 11.5166 15.6975 11.6858L16.8 12.7883L19.3083 10.28C19.4775 10.1108 19.7575 10.1108 19.9266 10.28C20.0958 10.4491 20.0958 10.7291 19.9266 10.8983Z" fill="white"/>
<path d="M29.85 12.5C29.85 11.8133 30.0033 11.2 30.31 10.66C30.6233 10.1133 31.0467 9.69 31.58 9.39C32.12 9.08333 32.7233 8.93 33.39 8.93C34.17 8.93 34.8533 9.13 35.44 9.53C36.0267 9.93 36.4367 10.4833 36.67 11.19H35.06C34.9 10.8567 34.6733 10.6067 34.38 10.44C34.0933 10.2733 33.76 10.19 33.38 10.19C32.9733 10.19 32.61 10.2867 32.29 10.48C31.9767 10.6667 31.73 10.9333 31.55 11.28C31.3767 11.6267 31.29 12.0333 31.29 12.5C31.29 12.96 31.3767 13.3667 31.55 13.72C31.73 14.0667 31.9767 14.3367 32.29 14.53C32.61 14.7167 32.9733 14.81 33.38 14.81C33.76 14.81 34.0933 14.7267 34.38 14.56C34.6733 14.3867 34.9 14.1333 35.06 13.8H36.67C36.4367 14.5133 36.0267 15.07 35.44 15.47C34.86 15.8633 34.1767 16.06 33.39 16.06C32.7233 16.06 32.12 15.91 31.58 15.61C31.0467 15.3033 30.6233 14.88 30.31 14.34C30.0033 13.8 29.85 13.1867 29.85 12.5ZM41.1058 16.07C40.4524 16.07 39.8524 15.9167 39.3058 15.61C38.7591 15.3033 38.3258 14.88 38.0058 14.34C37.6858 13.7933 37.5258 13.1767 37.5258 12.49C37.5258 11.81 37.6858 11.2 38.0058 10.66C38.3258 10.1133 38.7591 9.68667 39.3058 9.38C39.8524 9.07333 40.4524 8.92 41.1058 8.92C41.7658 8.92 42.3658 9.07333 42.9058 9.38C43.4524 9.68667 43.8824 10.1133 44.1958 10.66C44.5158 11.2 44.6758 11.81 44.6758 12.49C44.6758 13.1767 44.5158 13.7933 44.1958 14.34C43.8824 14.88 43.4524 15.3033 42.9058 15.61C42.3591 15.9167 41.7591 16.07 41.1058 16.07ZM41.1058 14.82C41.5258 14.82 41.8958 14.7267 42.2158 14.54C42.5358 14.3467 42.7858 14.0733 42.9658 13.72C43.1458 13.3667 43.2358 12.9567 43.2358 12.49C43.2358 12.0233 43.1458 11.6167 42.9658 11.27C42.7858 10.9167 42.5358 10.6467 42.2158 10.46C41.8958 10.2733 41.5258 10.18 41.1058 10.18C40.6858 10.18 40.3124 10.2733 39.9858 10.46C39.6658 10.6467 39.4158 10.9167 39.2358 11.27C39.0558 11.6167 38.9658 12.0233 38.9658 12.49C38.9658 12.9567 39.0558 13.3667 39.2358 13.72C39.4158 14.0733 39.6658 14.3467 39.9858 14.54C40.3124 14.7267 40.6858 14.82 41.1058 14.82ZM49.3173 16L47.7773 13.28H47.1173V16H45.7173V9.02H48.3373C48.8773 9.02 49.3373 9.11667 49.7173 9.31C50.0973 9.49667 50.3807 9.75333 50.5673 10.08C50.7607 10.4 50.8573 10.76 50.8573 11.16C50.8573 11.62 50.724 12.0367 50.4573 12.41C50.1907 12.7767 49.794 13.03 49.2673 13.17L50.9373 16H49.3173ZM47.1173 12.23H48.2873C48.6673 12.23 48.9507 12.14 49.1373 11.96C49.324 11.7733 49.4173 11.5167 49.4173 11.19C49.4173 10.87 49.324 10.6233 49.1373 10.45C48.9507 10.27 48.6673 10.18 48.2873 10.18H47.1173V12.23ZM53.5236 10.15V11.9H55.8736V13.01H53.5236V14.86H56.1736V16H52.1236V9.01H56.1736V10.15H53.5236Z" fill="white"/>
    </Svg>
  );
};

export default Icon;
