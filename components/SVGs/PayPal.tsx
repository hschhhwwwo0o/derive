import React, { FunctionComponent } from "react";
import Svg, { Path } from "react-native-svg";

const PayPalSVG: FunctionComponent = () => {
  return (
    <>
      <Svg width="44" height="18" viewBox="0 0 44 18" fill="none">
        <Path
          d="M40.6786 4.55298H39.5647C39.5641 4.55298 39.5635 4.55318 39.5631 4.55318L39.5624 4.55298C39.3075 4.55298 39.0487 4.7443 38.9765 4.9877C38.9736 4.99755 38.9686 5.00698 38.9662 5.01723C38.9662 5.01723 38.9397 5.13596 38.8936 5.34123L37.3636 12.1349C37.3282 12.2884 37.3046 12.3885 37.2975 12.4146L37.3004 12.4183C37.2474 12.6557 37.3931 12.8521 37.6324 12.8741L37.6355 12.8786H38.7917C39.045 12.8786 39.302 12.6891 39.3765 12.4488C39.3801 12.4371 39.3858 12.4262 39.3885 12.4146L41.0575 5.01682L41.055 5.016C41.1117 4.76296 40.9453 4.55298 40.6786 4.55298ZM34.9653 11.2299C34.8108 11.3252 34.6476 11.4068 34.4765 11.4763C34.2467 11.5672 34.0288 11.6147 33.8272 11.6147C33.5178 11.6147 33.28 11.5719 33.1192 11.4802C32.9583 11.3933 32.8738 11.2421 32.8766 11.0258C32.8766 10.7761 32.9354 10.5823 33.0573 10.4303C33.1799 10.2841 33.3622 10.1665 33.5883 10.0787C33.8132 10.004 34.0897 9.94253 34.4089 9.89839C34.6928 9.86333 35.254 9.79997 35.3258 9.79954C35.3976 9.79896 35.4454 9.76023 35.4133 9.94764C35.3991 10.029 35.237 10.6807 35.1627 10.977C35.1412 11.0658 35.0206 11.1952 34.9653 11.2299C35.0206 11.1952 34.9653 11.2299 34.9653 11.2299ZM37.168 6.64965C36.6952 6.39128 35.9559 6.26065 34.9442 6.26065C34.4439 6.26065 33.9411 6.30002 33.4365 6.37672C33.0663 6.43229 33.0281 6.44152 32.7981 6.49053C32.3248 6.59141 32.2518 7.05567 32.2518 7.05567L32.0997 7.66798C32.0135 8.05966 32.2413 8.04346 32.3428 8.01308C32.5494 7.95202 32.6614 7.89125 33.083 7.7978C33.486 7.70816 33.9117 7.64112 34.2515 7.64379C34.7497 7.64379 35.1286 7.69728 35.3805 7.80024C35.6325 7.90788 35.7572 8.0912 35.7572 8.35349C35.758 8.41584 35.7597 8.47467 35.7367 8.52615C35.716 8.5741 35.6762 8.62047 35.5571 8.63623C34.846 8.67771 34.3357 8.74128 33.7211 8.82905C33.1146 8.91271 32.584 9.056 32.1404 9.2545C31.6675 9.45999 31.3138 9.73495 31.0698 10.0834C30.8325 10.4334 30.7132 10.8573 30.7125 11.3566C30.7125 11.8284 30.8856 12.2133 31.2205 12.5121C31.5595 12.807 32.0003 12.953 32.5337 12.953C32.867 12.9507 33.1278 12.9271 33.3147 12.8814C33.4998 12.8357 33.7016 12.7707 33.9147 12.6803C34.074 12.615 34.2458 12.5207 34.4273 12.4024C34.6091 12.2837 34.7348 12.1994 34.8962 12.0958L34.9021 12.1057L34.8567 12.3019C34.8565 12.3038 34.8538 12.3048 34.8538 12.3067L34.8552 12.3103C34.8033 12.5468 34.9484 12.7434 35.1874 12.7666L35.1904 12.7707H35.2115L35.2124 12.7717C35.371 12.7717 35.9157 12.7715 36.1703 12.7707H36.3479C36.3597 12.7707 36.3609 12.7672 36.3655 12.7645C36.6097 12.7352 36.8437 12.5404 36.8987 12.3067L37.8079 8.46279C37.8288 8.37235 37.8453 8.26795 37.8552 8.14779C37.8665 8.02639 37.8799 7.92653 37.8759 7.85439C37.878 7.31036 37.6393 6.90823 37.168 6.64965ZM31.6934 5.77411C31.5383 5.47841 31.3041 5.24033 31.0078 5.05496C30.7041 4.87 30.3432 4.74101 29.9254 4.66576C29.5122 4.59481 29.0208 4.55421 28.4611 4.55298L25.8566 4.55421C25.5884 4.55872 25.3253 4.76501 25.2633 5.01908L23.5123 12.4836C23.4484 12.7373 23.6226 12.9487 23.8859 12.9473L25.1356 12.9451C25.4007 12.9473 25.6707 12.7373 25.7332 12.4836L26.1557 10.6722C26.215 10.4183 26.4844 10.2056 26.7537 10.2094H27.109C28.6333 10.2094 29.8153 9.90257 30.6616 9.29194C31.5058 8.67814 31.9308 7.87311 31.9308 6.87179C31.9281 6.4346 31.8521 6.06632 31.6934 5.77411ZM29.0064 8.21554C28.6333 8.48129 28.1098 8.61456 27.4362 8.61456H27.1263C26.8585 8.61766 26.6853 8.4054 26.749 8.15095L27.1224 6.56666C27.1781 6.31608 27.45 6.10281 27.7142 6.10487L28.1235 6.10281C28.6012 6.10487 28.9584 6.1832 29.2053 6.33884C29.4479 6.49633 29.5656 6.74055 29.5674 7.06598C29.5685 7.562 29.3811 7.94367 29.0064 8.21554Z"
          fill="#2B2C31"
        />
        <Path
          d="M22.8645 6.25787C22.6276 6.25787 22.3169 6.4467 22.1698 6.6749C22.1698 6.6749 20.5855 9.35076 20.4299 9.6181C20.3454 9.76188 20.2597 9.67052 20.2454 9.61702C20.2338 9.552 19.7544 6.69249 19.7544 6.69249C19.7005 6.46227 19.4564 6.26465 19.1511 6.26556L18.1632 6.26703C17.925 6.26703 17.7765 6.45495 17.8295 6.68205C17.8295 6.68205 18.5846 10.8989 18.7319 11.8906C18.8053 12.4392 18.7243 12.5365 18.7243 12.5365L17.7453 14.2181C17.6019 14.4461 17.6804 14.633 17.9174 14.633L19.0623 14.632C19.2993 14.632 19.6133 14.4461 19.7544 14.2177L24.1585 6.87949C24.1585 6.87949 24.5798 6.25256 24.1913 6.25787C23.9263 6.26154 22.8645 6.25787 22.8645 6.25787ZM14.5958 11.2189C14.4415 11.3141 14.2787 11.3951 14.1079 11.4648C13.8783 11.555 13.6597 11.6029 13.459 11.6029C13.1508 11.6029 12.9127 11.5599 12.7519 11.4689C12.5914 11.3818 12.5067 11.231 12.5094 11.0148C12.5094 10.766 12.5688 10.572 12.6903 10.4205C12.813 10.2743 12.9942 10.1566 13.22 10.0692C13.4452 9.99423 13.7222 9.9336 14.04 9.88961C14.3235 9.85462 14.8845 9.79155 14.956 9.79054C15.0272 9.79032 15.075 9.75123 15.043 9.93836C15.0292 10.0196 14.8672 10.6706 14.793 10.9662C14.7707 11.0553 14.6502 11.1845 14.5958 11.2189C14.6502 11.1845 14.5958 11.2189 14.5958 11.2189ZM16.7956 6.64599C16.3235 6.38804 15.5853 6.25784 14.5749 6.25784C14.0751 6.25784 13.5731 6.29674 13.0691 6.37351C12.6986 6.42858 12.6614 6.438 12.4315 6.48692C11.9585 6.58806 11.8858 7.05113 11.8858 7.05113L11.7341 7.66287C11.6481 8.05368 11.8757 8.03748 11.9767 8.00717C12.1826 7.94619 12.2951 7.88578 12.7162 7.79204C13.118 7.70297 13.5439 7.63623 13.8827 7.63846C14.3807 7.63846 14.7587 7.69174 15.0102 7.79448C15.2621 7.90198 15.3861 8.08536 15.3861 8.34701C15.3878 8.40929 15.389 8.46819 15.3666 8.51916C15.3455 8.56755 15.3054 8.61356 15.1865 8.62911C14.4771 8.67108 13.9677 8.73437 13.3528 8.822C12.7472 8.90552 12.2174 9.04858 11.7742 9.24658C11.3019 9.45171 10.949 9.72668 10.7059 10.0743C10.468 10.4235 10.349 10.8467 10.3486 11.3454C10.3486 11.8163 10.5217 12.2007 10.8558 12.4988C11.1945 12.7932 11.6343 12.9392 12.167 12.9392C12.5 12.9369 12.7603 12.913 12.9476 12.8677C13.1322 12.8217 13.334 12.7572 13.546 12.6669C13.7057 12.6018 13.8769 12.5072 14.0584 12.3892C14.2394 12.2709 14.3657 12.1868 14.5275 12.0834L14.5325 12.093L14.4871 12.2887C14.4867 12.2906 14.4842 12.2918 14.4842 12.2941L14.4861 12.2971C14.4343 12.5338 14.5787 12.7299 14.8177 12.7526L14.8206 12.7572H14.8415L14.8422 12.7586C15.001 12.7586 15.5452 12.7577 15.7988 12.7572H15.9765C15.9884 12.7572 15.99 12.7533 15.9939 12.7508C16.2382 12.7207 16.4711 12.5266 16.5267 12.2941L17.4347 8.45616C17.4552 8.36609 17.4719 8.26184 17.4811 8.1421C17.4932 8.02028 17.5064 7.92099 17.5028 7.84913C17.5049 7.3056 17.2662 6.90415 16.7956 6.64599ZM11.1163 5.7721C10.9614 5.47689 10.7274 5.2392 10.4317 5.05413C10.1283 4.86948 9.76785 4.7407 9.35059 4.66557C8.93787 4.59474 8.44727 4.5542 7.88825 4.55298L5.28709 4.5542C5.01929 4.55871 4.7565 4.76466 4.69462 5.01831L2.94583 12.4706C2.88207 12.7238 3.056 12.9349 3.319 12.9335L4.56709 12.9313C4.83176 12.9335 5.10145 12.7238 5.16396 12.4706L5.58584 10.6621C5.645 10.4087 5.91406 10.1963 6.18312 10.2H6.53789C8.06029 10.2 9.24059 9.89379 10.0858 9.28409C10.929 8.67137 11.3534 7.86764 11.3534 6.86797C11.3507 6.4315 11.2748 6.06383 11.1163 5.7721ZM8.43282 8.20949C8.06029 8.47481 7.53742 8.60787 6.86465 8.60787H6.55524C6.28765 8.61096 6.11476 8.39907 6.17831 8.14505L6.55128 6.56335C6.60689 6.31318 6.87845 6.10027 7.14229 6.10231L7.55099 6.10027C8.02809 6.10231 8.38493 6.18052 8.63141 6.3359C8.8737 6.49313 8.99118 6.73695 8.99309 7.06184C8.99411 7.5571 8.80704 7.93805 8.43282 8.20949Z"
          fill="#2B2C31"
        />
      </Svg>
    </>
  );
};

export default PayPalSVG;