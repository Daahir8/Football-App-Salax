import { View, Text } from 'react-native'
import React from 'react'
import { Svg, Rect, Defs, Pattern, Use, Image, Path } from 'react-native-svg';

const EventsScreenIconActive = () => {
  return (
    <Svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path fill="#04764E" fill-rule="evenodd" clip-rule="evenodd" d="M11.1105 23.5649C11.7746 23.5652 12.4386 23.5655 13.1025 23.5655C13.1904 23.5655 13.2782 23.5654 13.3659 23.5652C13.5412 23.5649 13.7162 23.5645 13.8919 23.5655C14.8913 23.5713 15.8903 23.5704 16.8894 23.5695C18.288 23.5682 19.6866 23.567 21.0857 23.584C23.4269 23.6132 25.3409 21.7399 25.3012 19.4744C25.274 17.9282 25.2776 16.382 25.2812 14.8358C25.2825 14.3057 25.2837 13.7756 25.2837 13.2454C25.2842 12.5517 25.283 11.8581 25.2818 11.1646C25.2787 9.40407 25.2757 7.64389 25.2996 5.88293C25.3282 3.70817 23.5746 1.91484 21.3271 1.80256C20.7854 1.7756 20.2407 1.79063 19.6969 1.80563C19.5583 1.80945 19.4197 1.81328 19.2813 1.8164C19.0922 1.82102 19.0176 1.77026 19.0319 1.58108C19.0446 1.41613 19.041 1.2492 19.0375 1.08266C19.0366 1.04113 19.0357 0.999629 19.0351 0.958187C19.0255 0.398347 18.638 0 18.1059 0C17.5738 0 17.183 0.393733 17.1671 0.959725C17.1592 1.17659 17.156 1.39345 17.1671 1.61031C17.1751 1.76719 17.1227 1.81948 16.9543 1.81948C14.3907 1.81486 11.827 1.81333 9.26339 1.81948C9.08232 1.81948 9.06008 1.74411 9.06008 1.59954C9.05916 1.51511 9.06169 1.43054 9.06422 1.346C9.07044 1.13794 9.07666 0.930009 9.03149 0.724408C8.93301 0.275306 8.51844 -0.0261463 8.05146 0.00615208C7.58766 0.0384505 7.22074 0.398347 7.19692 0.858215C7.1858 1.10276 7.18262 1.34884 7.19533 1.59339C7.20327 1.76565 7.14609 1.82255 6.96501 1.81794C6.72747 1.81125 6.48992 1.81038 6.25251 1.80951C5.94382 1.80837 5.63536 1.80724 5.3274 1.79333C3.35305 1.70566 1.56454 2.97761 1.05785 4.82938C0.929201 5.29844 0.935088 5.77065 0.941005 6.24515C0.942247 6.34476 0.94349 6.44447 0.94349 6.54428C0.946894 9.45004 0.946245 12.3558 0.945597 15.2616C0.945338 16.4239 0.945078 17.5862 0.945078 18.7485C0.945078 18.9269 0.938725 19.1068 0.927606 19.2852C0.814832 21.2247 2.13477 22.9657 4.08053 23.461C4.55768 23.5826 5.03709 23.5769 5.51969 23.5711C5.61061 23.57 5.70164 23.5689 5.79279 23.5686C7.56492 23.563 9.33788 23.5639 11.1105 23.5649ZM11.1376 9.0638C11.8063 9.06368 12.475 9.06355 13.1438 9.06355L13.1422 9.06201C13.8053 9.06201 14.4684 9.06214 15.1314 9.06226C17.7827 9.06275 20.4333 9.06324 23.0838 9.05586C23.3554 9.05586 23.4142 9.12815 23.4142 9.38192C23.408 11.8544 23.4086 14.3279 23.4091 16.8015C23.4093 17.5084 23.4094 18.2153 23.4094 18.9223C23.4094 19.2822 23.3936 19.639 23.3126 19.9912C23.0822 21.0063 22.4628 21.5538 21.397 21.6953C21.1063 21.7338 20.8156 21.7522 20.5234 21.7522H5.69908C5.33852 21.7522 4.97955 21.7338 4.62534 21.6569C3.5929 21.4338 3.02267 20.8356 2.87654 19.8235C2.83683 19.5436 2.81618 19.2622 2.81618 18.9776L2.81618 18.9769C2.81777 15.7673 2.81936 12.5592 2.81142 9.35116C2.80983 9.11585 2.87178 9.0574 3.1148 9.0574C5.78954 9.06478 8.46326 9.06429 11.1376 9.0638ZM21.7639 7.25023H13.1073C12.3684 7.25023 11.6296 7.25008 10.8908 7.24992C8.30515 7.24939 5.7195 7.24886 3.13386 7.25484C2.88766 7.25484 2.79394 7.21485 2.80824 6.95185C2.81641 6.79266 2.81789 6.63304 2.81937 6.47339C2.82278 6.10551 2.82619 5.73743 2.91148 5.37384C3.1418 4.39412 3.7295 3.8512 4.75082 3.69125C5.26179 3.61121 5.77566 3.61758 6.2895 3.62395C6.53596 3.627 6.78242 3.63006 7.02855 3.62358C7.16515 3.6205 7.19056 3.6851 7.19056 3.79737C7.19027 3.82061 7.18997 3.84385 7.18967 3.86708C7.18665 4.09914 7.18363 4.33109 7.19374 4.56177C7.2128 5.03394 7.58607 5.40614 8.0594 5.43536C8.5375 5.46459 8.96478 5.14929 9.03308 4.67866C9.06993 4.4302 9.06504 4.17562 9.06017 3.92256C9.05959 3.89208 9.059 3.86163 9.05849 3.83121C9.05531 3.67433 9.10455 3.62204 9.27292 3.62204C11.8381 3.62665 14.4018 3.62511 16.9654 3.62204C17.1163 3.62204 17.1751 3.66203 17.1687 3.81275C17.1576 4.04807 17.1576 4.28492 17.1687 4.52024C17.1941 5.05547 17.6008 5.44305 18.1202 5.43536C18.6396 5.42921 19.0239 5.03548 19.0366 4.49409C19.0406 4.2978 19.0391 4.10043 19.0375 3.90378C19.0372 3.86469 19.0369 3.82563 19.0366 3.78661C19.0351 3.68971 19.0557 3.62204 19.178 3.62511C19.4298 3.63231 19.6821 3.62783 19.9345 3.62335C20.491 3.61347 21.0474 3.60359 21.5971 3.71893C22.6327 3.93733 23.195 4.53716 23.3491 5.55071C23.4033 5.90446 23.4043 6.25896 23.4053 6.61368C23.4058 6.7679 23.4062 6.92216 23.411 7.07643C23.4174 7.24561 23.3284 7.25177 23.1966 7.25177C22.8552 7.24847 22.5145 7.2491 22.1735 7.24972C22.0371 7.24998 21.9005 7.25023 21.7639 7.25023ZM16.8824 14.0437C17.0682 13.8638 17.1715 13.6438 17.1619 13.4131H17.1635C17.1603 12.9409 16.8522 12.5857 16.4059 12.5057C16.0342 12.438 15.7483 12.5795 15.491 12.8302C15.1053 13.2065 14.7177 13.5809 14.3301 13.9553C13.6626 14.6 12.9952 15.2447 12.338 15.8986C12.1157 16.12 12.0029 16.0954 11.8059 15.8878C11.4454 15.5064 11.061 15.1434 10.6718 14.7866C10.2875 14.4328 9.71246 14.4451 9.35507 14.7927C8.99134 15.1465 8.98022 15.6925 9.35507 16.0647C10.0349 16.7383 10.7243 17.4058 11.4215 18.0641C11.8091 18.4317 12.3507 18.4348 12.732 18.0672C13.8437 16.998 14.9484 15.924 16.0532 14.8497C16.3296 14.581 16.6059 14.3123 16.8824 14.0437Z" />
    <Path fill="#04764E" d="M16.8824 14.0437C17.0682 13.8638 17.1715 13.6438 17.1619 13.4131H17.1635C17.1603 12.9409 16.8522 12.5857 16.4059 12.5057C16.0342 12.438 15.7483 12.5795 15.491 12.8302C15.1053 13.2065 14.7177 13.5809 14.3301 13.9553C13.6626 14.6 12.9952 15.2447 12.338 15.8986C12.1157 16.12 12.0029 16.0954 11.8059 15.8878C11.4454 15.5064 11.061 15.1434 10.6718 14.7866C10.2875 14.4328 9.71246 14.4451 9.35507 14.7927C8.99134 15.1465 8.98022 15.6925 9.35507 16.0647C10.0349 16.7383 10.7243 17.4058 11.4215 18.0641C11.8091 18.4317 12.3507 18.4348 12.732 18.0672C13.8437 16.998 14.9484 15.924 16.0532 14.8497C16.3296 14.581 16.6059 14.3123 16.8824 14.0437Z" />
  </Svg>
  
  )
}

export default EventsScreenIconActive