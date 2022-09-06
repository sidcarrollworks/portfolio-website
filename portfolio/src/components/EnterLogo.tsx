import React from "react";
import { useSpring, animated } from "@react-spring/web";
interface Props {
  className?: string;
  logoProps: any;
  setEnter: any;
}

const EnterLogo = ({ className, logoProps, setEnter }: Props) => {
  const bg = useSpring({
    from: { opacity: 1, y: 500 },
    to: { opacity: 1, y: 0 },
    delay: 1000,
    config: { mass: 2, tension: 500, friction: 40 },
  });
  const s1Spring = useSpring({
    from: { opacity: 0, y: -100 },
    to: { opacity: 1, y: 0 },

    delay: 1200,
    config: { mass: 1, tension: 800, friction: 40 },
  });
  const s2Spring = useSpring({
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 },

    delay: 1300,
    config: { mass: 1, tension: 800, friction: 40 },
  });
  const cSpring = useSpring({
    from: { opacity: 0, y: -100 },
    to: { opacity: 1, y: 0 },

    delay: 1400,
    config: { mass: 1, tension: 800, friction: 40 },
  });
  const wSpring = useSpring({
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 },
    delay: 1500,
    config: { mass: 1, tension: 800, friction: 40 },
  });
  const titleSpring = useSpring({
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 40 },
    delay: 1500,
    config: { mass: 1, tension: 800, friction: 200 },
  });
  const enterSpring = useSpring({
    from: { opacity: 0, y: 500 },
    to: { opacity: 1, y: 70 },
    delay: 1100,
    config: { mass: 1, tension: 200, friction: 20 },
  });

  return (
    <animated.div className="w-full h-full relative flex items-center justify-center flex-col z-0">
      <animated.div
        style={{
          transform: logoProps.xy.to(
            (x: number, y: number) => `translate3d(${x / 15}px,${y / 15}px,0)`
          ),
          ...bg,
        }}
        className="bg-zinc-900 items-center justify-center flex gap-4 p-3 md:p-5 rounded-2xl shadow-lg z-10 w-fit h-24 md:h-56"
      >
        <animated.div
          style={{
            transform: logoProps.xy.to(
              (x: number, y: number) => `translate3d(${x / 18}px,${y / 20}px,0)`
            ),
          }}
          className="flex flex-col gap-1 h-full drop-shadow-lg w-min"
        >
          <animated.svg
            className="h-[46%] w-min"
            style={s1Spring}
            viewBox="0 0 28 17"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_ii_340_4365)">
              <path
                d="M26.959 6.17602L18.6748 14.5979C17.8323 15.44 16.5686 16.0015 15.3049 16.0015H3.65075C1.68499 16.0015 0 14.3171 0 12.352V3.64946C0 1.68437 1.68499 0 3.65075 0H24.2912C27.5207 0 29.2056 3.78983 26.959 6.17602Z"
                fill="#F9F9F9"
              />
            </g>
            <defs>
              <filter
                id="filter0_ii_340_4365"
                x="0"
                y="-2"
                width="27.9863"
                height="19.0015"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="-2" />
                <feGaussianBlur stdDeviation="1" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.34 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_340_4365"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_innerShadow_340_4365"
                  result="effect2_innerShadow_340_4365"
                />
              </filter>
            </defs>
          </animated.svg>

          <animated.svg
            style={s2Spring}
            viewBox="0 0 34 22"
            className="h-[54%] w-min"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_ii_340_4364)">
              <path
                d="M33.2263 4.8796V16.8105C33.2263 19.1967 31.2605 21.0215 29.0139 21.0215H5.00354C1.21243 21.0215 -0.612938 16.5298 1.91447 13.8629L13.2878 2.21268C14.2707 1.23014 15.6748 0.52832 17.2193 0.52832H29.0139C31.4009 0.668684 33.2263 2.49341 33.2263 4.8796Z"
                fill="#F9F9F9"
              />
            </g>
            <defs>
              <filter
                id="filter0_ii_340_4364"
                x="0.74707"
                y="-1.47168"
                width="32.479"
                height="23.4932"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="-2" />
                <feGaussianBlur stdDeviation="1" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.34 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_340_4364"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_innerShadow_340_4364"
                  result="effect2_innerShadow_340_4364"
                />
              </filter>
            </defs>
          </animated.svg>
        </animated.div>

        <animated.svg
          style={{
            transform: logoProps.xy.to(
              (x: number, y: number) => `translate3d(${x / 20}px,${y / 20}px,0)`
            ),
            ...cSpring,
          }}
          className="h-full"
          viewBox="0 0 31 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_ii_340_4366)">
            <path
              d="M25.5001 0H5.00001C2.33219 0 0.226074 2.10546 0.226074 4.77238V34.2488C0.226074 36.9157 2.33219 39.0212 5.00001 39.0212H25.5001C29.9933 39.0212 32.0994 33.4066 28.5891 30.459L19.7432 23.0197C17.4966 21.0546 17.4966 17.5455 19.7432 15.7208L28.5891 8.28147C32.0994 5.61456 29.9933 0 25.5001 0Z"
              fill="#F9F9F9"
            />
          </g>
          <defs>
            <filter
              id="filter0_ii_340_4366"
              x="0.226074"
              y="-2"
              width="30.1235"
              height="42.021"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="-2" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.34 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_340_4366"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="0.5" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_innerShadow_340_4366"
                result="effect2_innerShadow_340_4366"
              />
            </filter>
          </defs>
        </animated.svg>

        <animated.svg
          style={{
            ...wSpring,
            transform: logoProps.xy.to(
              (x: number, y: number) => `translate3d(${x / 18}px,${y / 20}px,0)`
            ),
          }}
          className="h-full"
          viewBox="0 0 39 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_ii_340_4367)">
            <path
              d="M38.1203 34.6699V4.35128C38.1203 1.96509 36.1546 0 33.7676 0H4.70242C2.31542 0 0.349609 1.96509 0.349609 4.35128V34.6699C0.349609 38.7405 5.54483 40.7055 8.07224 37.4772L15.7949 28.3535C17.6202 26.2481 20.7093 26.2481 22.5347 28.3535L30.2573 37.4772C32.9251 40.7055 38.1203 38.7405 38.1203 34.6699Z"
              fill="#F9F9F9"
            />
          </g>
          <defs>
            <filter
              id="filter0_ii_340_4367"
              x="0.349609"
              y="-2"
              width="37.7705"
              height="42.0908"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="-2" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.34 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_340_4367"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="0.5" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_innerShadow_340_4367"
                result="effect2_innerShadow_340_4367"
              />
            </filter>
          </defs>
        </animated.svg>
      </animated.div>
      <animated.h2
        style={titleSpring}
        className="inter text-md md:text-2xl font-black tracking-[0.5rem] text-center ml-2 text-shadow-inner z-20"
      >
        SIDCARROLLWORKS
      </animated.h2>
      <animated.svg
        className="transition h-9 bg-black rounded-2xl px-4 py-3 cursor-pointer shadow-lg hover:shadow-md"
        onClick={() => {
          setEnter(true);
        }}
        style={enterSpring}
        viewBox="0 0 52 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.55336 13.7979C1.69549 13.7979 0.284304 12.1264 0.595834 10.2948L1.92218 2.49695C2.16745 1.05492 3.41696 0 4.8797 0H10.4451C11.1909 0 11.7568 0.671739 11.6303 1.40667V1.40667C11.5309 1.98362 11.0305 2.4052 10.4451 2.4052H6.31237C5.50955 2.4052 4.82416 2.98507 4.69119 3.7768V3.7768C4.52279 4.77941 5.29571 5.69297 6.31237 5.69297H8.98865C9.7344 5.69297 10.3004 6.36471 10.1738 7.09965V7.09965C10.0745 7.67659 9.57409 8.09817 8.98865 8.09817H5.34932C4.54466 8.09817 3.85775 8.67952 3.72473 9.47312V9.47312C3.55636 10.4776 4.3308 11.3927 5.34932 11.3927H8.53998C9.28574 11.3927 9.85169 12.0644 9.72514 12.7994V12.7994C9.6258 13.3763 9.12542 13.7979 8.53998 13.7979H3.55336Z"
          fill="#ECECEC"
        />
        <path
          d="M16.0169 7.81521L15.2006 12.5954C15.082 13.29 14.48 13.7979 13.7754 13.7979V13.7979C12.8796 13.7979 12.1993 12.9916 12.3501 12.1086L13.6326 4.5983C13.7459 3.93473 14.321 3.44947 14.9942 3.44947H15.6989C16.1834 3.44947 16.5519 3.88444 16.4724 4.36237L16.3334 5.19806C16.3267 5.23848 16.3579 5.27527 16.3989 5.27527V5.27527C16.423 5.27527 16.4452 5.26213 16.4571 5.24115C16.7918 4.65094 17.2594 4.18397 17.8599 3.84023C18.4765 3.48989 19.1783 3.31473 19.9652 3.31473C20.7014 3.31473 21.3158 3.47193 21.8082 3.78633C22.3051 4.10074 22.6549 4.54764 22.8573 5.12705C23.0644 5.70645 23.0989 6.40038 22.9609 7.20885L22.0357 12.594C21.9162 13.2895 21.3131 13.7979 20.6074 13.7979V13.7979C19.709 13.7979 19.0271 12.989 19.1789 12.1036L19.9306 7.72089C20.0365 7.08758 19.9537 6.59352 19.6822 6.23869C19.4153 5.87937 18.985 5.69971 18.3914 5.69971C17.9956 5.69971 17.6321 5.7828 17.3008 5.94899C16.9694 6.11517 16.691 6.35772 16.4655 6.67661C16.2447 6.99102 16.0951 7.37055 16.0169 7.81521Z"
          fill="#ECECEC"
        />
        <path
          d="M30.4572 3.44947C31.1246 3.44947 31.6316 4.04978 31.52 4.70777V4.70777C31.432 5.22611 30.9829 5.60539 30.4572 5.60539H26.2561C25.5874 5.60539 25.08 5.00277 25.1939 4.34378V4.34378C25.2833 3.82697 25.7317 3.44947 26.2561 3.44947H30.4572ZM27.0078 2.17706C27.1259 1.48017 27.7295 0.970164 28.4364 0.970164V0.970164C29.3337 0.970164 30.0153 1.7776 29.8647 2.66223L28.51 10.6179C28.4639 10.8829 28.4708 11.0895 28.5307 11.2377C28.5905 11.3815 28.6894 11.4825 28.8275 11.5409C28.9701 11.5993 29.1404 11.6285 29.3383 11.6285C29.4763 11.6285 29.6167 11.6173 29.7593 11.5948V11.5948C29.9312 11.5623 30.0918 11.6891 30.1008 11.8638L30.1586 12.9818C30.1795 13.3856 29.9205 13.7492 29.5246 13.8316V13.8316C29.2485 13.89 28.9218 13.9259 28.5445 13.9394C27.8266 13.9663 27.2192 13.8742 26.7222 13.6631C26.2252 13.4475 25.8686 13.1174 25.6523 12.6728C25.436 12.2281 25.39 11.6689 25.5142 10.9952L27.0078 2.17706Z"
          fill="#ECECEC"
        />
        <path
          d="M36.7666 14C35.6806 14 34.7809 13.7844 34.0677 13.3532C33.3544 12.9175 32.8528 12.3022 32.5629 11.5072C32.2776 10.7077 32.2293 9.76227 32.4179 8.67084C32.602 7.60635 32.9724 6.67212 33.5293 5.86814C34.0907 5.06416 34.7947 4.4376 35.6415 3.98845C36.4882 3.5393 37.4315 3.31473 38.4715 3.31473C39.171 3.31473 39.8037 3.42477 40.3697 3.64485C40.9404 3.86044 41.4143 4.18832 41.7917 4.62849C42.169 5.06416 42.4267 5.60988 42.5648 6.26564C42.7074 6.9214 42.7051 7.68944 42.5579 8.56978V8.56978C42.4822 9.02462 42.0887 9.35804 41.6276 9.35804H34.5229C33.976 9.35804 33.5587 8.86908 33.6447 8.32897V8.32897C33.7134 7.8972 34.0857 7.5794 34.5229 7.5794H38.8339C39.4772 7.5794 40.0994 7.08071 39.8658 6.48123V6.48123C39.7416 6.16234 39.5345 5.91306 39.2446 5.7334C38.9547 5.54925 38.5981 5.45717 38.1747 5.45717C37.7421 5.45717 37.3372 5.56048 36.9599 5.76708C36.5825 5.97369 36.265 6.24543 36.0073 6.58229C35.7542 6.91466 35.5908 7.27623 35.5172 7.66699L35.1928 9.43215C35.1008 9.97562 35.1192 10.427 35.248 10.7863C35.3815 11.1457 35.6115 11.4151 35.9383 11.5948C36.265 11.77 36.6791 11.8576 37.1807 11.8576C37.5075 11.8576 37.8135 11.8126 38.0988 11.7228C38.3887 11.633 38.6464 11.5005 38.8719 11.3253C38.8747 11.3231 38.8775 11.3208 38.8803 11.3185C39.2889 10.9895 39.7599 10.6802 40.2833 10.7144V10.7144C41.1876 10.7734 41.757 11.7121 41.1239 12.3604C41.0762 12.4092 41.0273 12.4572 40.9772 12.5043C40.471 12.9759 39.8612 13.3442 39.148 13.6092C38.4393 13.8697 37.6455 14 36.7666 14Z"
          fill="#ECECEC"
        />
        <path
          d="M45.509 13.7979C44.6119 13.7979 43.9307 12.9905 44.0817 12.1062L45.3605 4.61716C45.4757 3.9427 46.0602 3.44947 46.7445 3.44947H47.4946C47.9732 3.44947 48.3365 3.88056 48.2553 4.35226L48.1122 5.18408C48.1059 5.22116 48.1344 5.25505 48.172 5.25505V5.25505C48.1955 5.25505 48.2169 5.24145 48.2271 5.22032C48.529 4.59525 48.9307 4.12175 49.4322 3.79981C49.9476 3.46744 50.5021 3.30125 51.0958 3.30125C51.243 3.30125 51.3972 3.31023 51.5582 3.3282V3.3282C51.8092 3.34862 51.9667 3.58822 51.9237 3.83635L51.6543 5.39356C51.604 5.68442 51.2994 5.87423 51.006 5.84119V5.84119C50.7713 5.80975 50.5482 5.79403 50.3365 5.79403C49.9085 5.79403 49.5105 5.88611 49.1423 6.07026C48.7742 6.24992 48.4636 6.50144 48.2105 6.82483C47.962 7.14822 47.7986 7.52101 47.7204 7.94321L46.9369 12.5906C46.8194 13.2876 46.2158 13.7979 45.509 13.7979V13.7979Z"
          fill="#ECECEC"
        />
      </animated.svg>
    </animated.div>
  );
};

export default EnterLogo;
