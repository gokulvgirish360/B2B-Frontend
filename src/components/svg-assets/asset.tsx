export const BatteryChargingIcon = ({ color }: { color: string }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 28 25"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        d="M2.5 3.99956C2.5 3.20402 2.81602 2.44108 3.37855 1.87855C3.94108 1.31602 4.70402 1 5.49956 1H21.9971C22.7926 1 23.5556 1.31602 24.1181 1.87855C24.6806 2.44108 24.9967 3.20402 24.9967 3.99956V4.74944C24.9967 4.94833 25.0757 5.13906 25.2163 5.2797C25.3569 5.42033 25.5477 5.49933 25.7466 5.49933C25.9454 5.49933 26.1362 5.57834 26.2768 5.71897C26.4174 5.8596 26.4964 6.05034 26.4964 6.24922V10.7486C26.4964 10.9474 26.4174 11.1382 26.2768 11.2788C26.1362 11.4194 25.9454 11.4984 25.7466 11.4984C25.5477 11.4984 25.3569 11.5774 25.2163 11.7181C25.0757 11.8587 24.9967 12.0494 24.9967 12.2483V12.9982C24.9967 13.7938 24.6806 14.5567 24.1181 15.1192C23.5556 15.6818 22.7926 15.9978 21.9971 15.9978H15.2481"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1 13.0015H9.99867V16.001C9.99867 16.7966 9.68264 17.5595 9.12012 18.122C8.55759 18.6846 7.79464 19.0006 6.99911 19.0006H3.99956C3.20402 19.0006 2.44108 18.6846 1.87855 18.122C1.31602 17.5595 1 16.7966 1 16.001V13.0015Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.49609 23.5013V19.002"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.5 12.9985V9.24902"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.5 12.9985V9.24902"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const BatteryIcon = ({color}:{color:string}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_888_3258)">
        <path
          d="M6 7H17C17.5304 7 18.0391 7.21071 18.4142 7.58579C18.7893 7.96086 19 8.46957 19 9V9.5C19 9.63261 19.0527 9.75979 19.1464 9.85355C19.2402 9.94732 19.3674 10 19.5 10C19.6326 10 19.7598 10.0527 19.8536 10.1464C19.9473 10.2402 20 10.3674 20 10.5V13.5C20 13.6326 19.9473 13.7598 19.8536 13.8536C19.7598 13.9473 19.6326 14 19.5 14C19.3674 14 19.2402 14.0527 19.1464 14.1464C19.0527 14.2402 19 14.3674 19 14.5V15C19 15.5304 18.7893 16.0391 18.4142 16.4142C18.0391 16.7893 17.5304 17 17 17H6C5.46957 17 4.96086 16.7893 4.58579 16.4142C4.21071 16.0391 4 15.5304 4 15V9C4 8.46957 4.21071 7.96086 4.58579 7.58579C4.96086 7.21071 5.46957 7 6 7Z"
          stroke={color}
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7 10V14"
          stroke={color}
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10 10V14"
          stroke={color}
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13 10V14"
          stroke={color}
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16 10V14"
          stroke={color}
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_888_3258">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ChargingIcon = ({ color }: { color: string }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 26 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.998 20.5003C18.998 21.2959 19.3141 22.0589 19.8767 22.6215C20.4392 23.1841 21.2023 23.5001 21.9979 23.5001C22.7935 23.5001 23.5565 23.1841 24.119 22.6215C24.6816 22.0589 24.9977 21.2959 24.9977 20.5003C24.9977 19.7047 24.6816 18.9417 24.119 18.3791C23.5565 17.8165 22.7935 17.5005 21.9979 17.5005C21.2023 17.5005 20.4392 17.8165 19.8767 18.3791C19.3141 18.9417 18.998 19.7047 18.998 20.5003Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1 20.5003C1 21.2959 1.31605 22.0589 1.87862 22.6215C2.4412 23.1841 3.20421 23.5001 3.99981 23.5001C4.79541 23.5001 5.55842 23.1841 6.121 22.6215C6.68357 22.0589 6.99962 21.2959 6.99962 20.5003C6.99962 19.7047 6.68357 18.9417 6.121 18.3791C5.55842 17.8165 4.79541 17.5005 3.99981 17.5005C3.20421 17.5005 2.4412 17.8165 1.87862 18.3791C1.31605 18.9417 1 19.7047 1 20.5003Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.99805 20.4994H14.4976C14.7923 18.6162 15.6774 16.8753 17.0252 15.5274C18.373 14.1796 20.1139 13.2946 21.9971 12.9998V5.5003C21.9971 4.7047 21.681 3.94169 21.1185 3.37911C20.5559 2.81654 19.7929 2.50049 18.9973 2.50049H17.4974"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.99786 1L6.99805 6.99962H11.4978L8.49795 12.9992"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const ArrowIcon=(props:{direction:"left"|"right"})=>{

  return (
    <svg
      width={18}
      height={14}
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform="scale(-1, 1)"
      style={{
        transform: props.direction === "left" ? "scaleX(-1)" : "scaleX(1)",
      }} // Ensures flip works properly in all browsers
      {...props}
    >
      <path
        d="M9.98837 13.628C10.0009 13.6406 10.3845 13.7367 10.8408 13.8416C11.2971 13.9464 11.6753 14.0162 11.6814 13.9967C11.6875 13.9772 11.7347 13.6605 11.7863 13.2929C11.89 12.5547 12.1411 11.6929 12.4094 11.1539C13.2458 9.474 14.7463 8.3617 16.5662 8.0726L17.0297 7.99896V7.25688V6.51474L16.6096 6.44426C13.8576 5.98257 12.0635 3.92488 11.7278 0.845543C11.7059 0.644464 11.6798 0.48 11.6697 0.48C11.5769 0.48 10.039 0.85063 10.0099 0.879991C9.98884 0.901221 10.0045 1.08972 10.0447 1.29882C10.4897 3.61414 11.7639 5.49818 13.4175 6.28594L13.8141 6.47491L5.65764 6.48971L0.5 6.4991V8.00096L5.67091 8.01037L13.8082 8.02522L13.3074 8.27894C12.0083 8.93709 10.9798 10.2281 10.3741 11.961C10.2015 12.4547 9.9411 13.5803 9.98837 13.628Z"
        fill="#636363"
      />
    </svg>
  );
  
}
