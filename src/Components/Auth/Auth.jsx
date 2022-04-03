import "./Auth.css";
import Header from "../header/Header";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

export default function Auth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [first, setfirst] = useState(true);
  const [message, setMsg] = useState(false);
  const [sec, setSec] = useState("");
  const logIn = async () => {
    setfirst(false);
    setSec(inputValue);
    try {
      const res = await axios.post("https://ackobackend.herokuapp.com/email", {
        email: inputValue,
      });
      const Data = await res.data;
      setMsg(Data.message);
    } catch (error) {
      console.log(error);
    }
  };
  const logInOtp = async () => {
    try {
      const res = await axios.post("https://ackobackend.herokuapp.com/otp", {
        email: sec,
        otp: inputValue,
      });
      const Data = await res.data;
      setMsg(Data.message);
      if (Data.message == "signin success") {
        dispatch({ type: "userDetails", payload: true });
        localStorage.setItem("token", Data.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  let inputValue;
  function inputHandler(e) {
    inputValue = e.target.value;
  }
  return (
    <>
      <Header />
      <div className="d-flex flex-column align-items-center">
        <div className="center-image">
          <svg
            width={150}
            height={150}
            viewBox="0 0 150 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M75 148.846C115.784 148.846 148.846 115.784 148.846 75C148.846 34.2159 115.784 1.15381 75 1.15381C34.2159 1.15381 1.15381 34.2159 1.15381 75C1.15381 115.784 34.2159 148.846 75 148.846Z"
              fill="#F6F7FB"
            />
            <path
              d="M125.123 82.1884V96.923H58.5347V52.073H39.7847V94.5345H19.2808V79.8345H1.31543C2.53427 98.3396 10.6712 115.709 24.1089 128.49C37.5466 141.271 55.3013 148.528 73.8442 148.818C92.3872 149.109 110.361 142.412 124.192 130.059C138.024 117.705 146.702 100.6 148.5 82.1422L125.123 82.1884Z"
              fill="#ECE4F9"
            />
            <path
              d="M110.688 128.077H72.9115C70.5531 128.074 68.2921 127.136 66.6244 125.468C64.9567 123.8 64.0184 121.539 64.0154 119.181V33.7961C64.0184 31.4376 64.9567 29.1766 66.6244 27.5089C68.2921 25.8412 70.5531 24.903 72.9115 24.8999H110.688C113.047 24.903 115.308 25.8412 116.976 27.5089C118.643 29.1766 119.582 31.4376 119.585 33.7961V119.181C119.582 121.539 118.643 123.8 116.976 125.468C115.308 127.136 113.047 128.074 110.688 128.077Z"
              fill="#7C47E1"
            />
            <path
              d="M99.4385 48.2307H84.1616C82.5385 48.2368 80.9836 48.8843 79.8359 50.032C78.6882 51.1797 78.0407 52.7345 78.0347 54.3576C78.0407 55.9807 78.6882 57.5356 79.8359 58.6833C80.9836 59.831 82.5385 60.4785 84.1616 60.4846H99.4385C101.062 60.4785 102.616 59.831 103.764 58.6833C104.912 57.5356 105.559 55.9807 105.565 54.3576C105.559 52.7345 104.912 51.1797 103.764 50.032C102.616 48.8843 101.062 48.2368 99.4385 48.2307ZM98.5385 58.0038C97.8247 58.0015 97.1276 57.7878 96.5352 57.3895C95.9428 56.9913 95.4817 56.4265 95.2101 55.7664C94.9385 55.1062 94.8687 54.3804 95.0093 53.6806C95.15 52.9808 95.4948 52.3384 96.0004 51.8345C96.5059 51.3305 97.1495 50.9877 97.8497 50.8493C98.55 50.7109 99.2755 50.7831 99.9348 51.0567C100.594 51.3304 101.157 51.7933 101.554 52.387C101.95 52.9807 102.162 53.6785 102.162 54.3923C102.162 54.8675 102.068 55.3381 101.886 55.777C101.703 56.2159 101.436 56.6146 101.1 56.9501C100.763 57.2856 100.364 57.5514 99.9241 57.7322C99.4846 57.913 99.0138 58.0053 98.5385 58.0038Z"
              fill="#A892F7"
            />
            <path
              d="M46.6731 94.1653C46.7571 96.174 47.1462 98.1582 47.827 100.05C47.8628 100.146 47.9275 100.229 48.0122 100.287C48.0969 100.344 48.1975 100.375 48.3001 100.373H51.4616C51.5654 100.374 51.6671 100.343 51.7535 100.286C51.8399 100.228 51.907 100.146 51.9462 100.05C52.6341 98.1602 53.0234 96.1748 53.1001 94.1653C53.1032 94.0967 53.0924 94.0282 53.0682 93.9639C53.0441 93.8996 53.0072 93.8409 52.9598 93.7913C52.9123 93.7417 52.8553 93.7022 52.7921 93.6753C52.729 93.6483 52.661 93.6345 52.5924 93.6345H47.1808C47.1122 93.6345 47.0442 93.6483 46.9811 93.6753C46.9179 93.7022 46.8609 93.7417 46.8134 93.7913C46.766 93.8409 46.7291 93.8996 46.7049 93.9639C46.6808 94.0282 46.67 94.0967 46.6731 94.1653Z"
              fill="#F2AA00"
            />
            <path
              d="M46.0846 99.4962C45.7648 99.4986 45.4543 99.3883 45.2077 99.1847C45.0601 99.0708 44.937 98.9283 44.8458 98.7657C44.7546 98.6032 44.6971 98.4238 44.6769 98.2385L44.4346 96.0693C44.3955 95.6967 44.5041 95.3235 44.7371 95.0301C44.9701 94.7367 45.3089 94.5464 45.6807 94.5001L47.1 94.3501C47.4732 94.3078 47.8479 94.4153 48.1421 94.6489C48.4362 94.8825 48.6258 95.2231 48.6692 95.5962L48.9115 97.7655C48.9324 97.9496 48.9166 98.1361 48.8652 98.3142C48.8138 98.4922 48.7278 98.6584 48.612 98.8031C48.4962 98.9479 48.353 99.0683 48.1905 99.1575C48.0281 99.2468 47.8496 99.3031 47.6654 99.3231L46.2461 99.4847L46.0846 99.4962ZM47.2384 94.8808H47.1346L45.7154 95.0308C45.4798 95.061 45.2649 95.1809 45.1154 95.3655C44.9661 95.5549 44.8958 95.7947 44.9192 96.0347L45.1615 98.2039C45.19 98.4433 45.3099 98.6624 45.4961 98.8155C45.5892 98.8902 45.6966 98.9451 45.8117 98.9768C45.9268 99.0085 46.0471 99.0165 46.1654 99.0001L47.5846 98.8385C47.7021 98.8267 47.816 98.7909 47.9192 98.7333C48.0224 98.6758 48.1127 98.5977 48.1846 98.5039C48.3343 98.3192 48.4048 98.0828 48.3807 97.8462L48.1384 95.677C48.118 95.4636 48.0239 95.264 47.8723 95.1124C47.7207 94.9608 47.5211 94.8667 47.3077 94.8462L47.2384 94.8808Z"
              fill="#F2AA00"
            />
            <path
              d="M68.677 62.3654C68.677 62.3654 75.9116 52.8923 76.5693 52.9616C77.227 53.0308 74.4462 58.6385 74.4462 58.6385C75.6408 59.3034 76.5395 60.3958 76.9616 61.6962C77.3424 63.5885 74.2732 64.1423 74.2732 64.1423L73.2232 65.8269L68.677 62.3654Z"
              fill="#030047"
            />
            <path
              d="M68.6768 62.3076C64.9037 67.0499 60.3806 72.1845 58.1422 72.6922C51.8306 74.1807 32.7576 64.8692 32.7576 64.8692C22.5229 63.9807 12.8537 111.923 16.4191 112.961C23.4114 116.908 34.8114 113.838 39.9345 112.108C40.6895 111.853 41.341 111.359 41.7907 110.702C42.2403 110.044 42.4636 109.257 42.4268 108.461L40.8345 80.5038C40.8345 80.5038 57.8883 86.7922 63.3922 83.0769C66.4153 81.0345 72.1845 74.1922 76.7653 68.4345L68.6768 62.3076Z"
              fill="#F75276"
            />
            <path
              d="M32.8037 64.8691C32.8037 64.8691 24.0922 64.0614 19.396 70.1653C14.6999 76.2691 4.44219 95.4691 9.79603 100.384C15.1499 105.3 40.3845 104.4 40.3845 104.4L40.973 95.0999C40.973 95.0999 23.5268 95.3537 22.1768 93.1268C20.8268 90.8999 28.096 77.8268 28.096 77.8268L32.8037 64.8691Z"
              fill="#F75276"
            />
            <path
              d="M40.9847 95.0999C40.9847 95.0999 45.2309 93.5999 46.477 95.273C47.5501 96.7153 46.3963 99.5076 45.6924 99.5076C44.9886 99.5076 43.3847 101.446 40.5693 101.608L40.9847 95.0999Z"
              fill="#030047"
            />
            <path
              d="M48.8191 91.9846C48.2296 91.6246 47.7909 91.0629 47.5845 90.4038C47.5211 90.1377 47.515 89.8612 47.5668 89.5926C47.6185 89.3241 47.7268 89.0696 47.8845 88.8461C48.1662 88.4743 48.3399 88.0321 48.3867 87.568C48.4336 87.1039 48.3516 86.6359 48.1499 86.2153L48.5883 85.95C48.8408 86.4526 48.9485 87.0154 48.8996 87.5757C48.8507 88.136 48.6471 88.6717 48.3114 89.123C48.194 89.2883 48.1128 89.4765 48.073 89.6753C48.0332 89.8742 48.0358 90.0791 48.0806 90.2769C48.2535 90.803 48.6098 91.2494 49.0845 91.5346L48.8191 91.9846Z"
              fill="#030047"
            />
            <path
              d="M51.6807 91.6269L51.173 91.5346C51.2376 91.2736 51.2176 90.999 51.116 90.7501C51.0144 90.5013 50.8364 90.2911 50.6077 90.1499L50.8384 89.7C51.1644 89.891 51.4214 90.1804 51.5727 90.5265C51.724 90.8727 51.7619 91.2579 51.6807 91.6269Z"
              fill="#030047"
            />
            <path
              d="M33.15 62.1578L33.6808 65.2616C33.7029 65.4524 33.677 65.6457 33.6055 65.824C33.534 66.0022 33.4191 66.1598 33.2712 66.2824C33.1234 66.405 32.9473 66.4888 32.7589 66.5262C32.5705 66.5635 32.3758 66.5532 32.1923 66.4962C31.3568 66.2017 30.5767 65.7687 29.8846 65.2155L29.1923 60.6001C29.1923 60.6001 27.9808 60.7039 27.7385 59.8155C27.6848 59.6145 27.6956 59.4018 27.7693 59.2073C27.8431 59.0129 27.9761 58.8465 28.1495 58.7317C28.323 58.6169 28.5281 58.5595 28.7359 58.5677C28.9437 58.5758 29.1438 58.649 29.3077 58.777L28.8462 56.1232C28.8462 56.1232 31.7885 53.8155 33.3577 54.4732C34.9269 55.1308 37.5346 61.5924 33.15 62.1578Z"
              fill="#030047"
            />
            <path
              d="M34.2 58.6962L34.0731 58.4769L34.5347 58.2115L33.5654 56.8846L33.7731 56.7346L34.9039 58.2923L34.2 58.6962Z"
              fill="white"
            />
            <path
              d="M34.1308 59.9999C33.9851 60.0147 33.8382 60.0147 33.6924 59.9999V59.7576C34.5693 59.9423 34.7539 59.5038 34.7539 59.4807L34.9962 59.573C34.9084 59.72 34.7801 59.8385 34.6265 59.9142C34.473 59.9899 34.3009 60.0197 34.1308 59.9999Z"
              fill="white"
            />
            <path
              d="M34.4537 56.6423C34.5876 56.6423 34.696 56.5338 34.696 56.4C34.696 56.2662 34.5876 56.1577 34.4537 56.1577C34.3199 56.1577 34.2114 56.2662 34.2114 56.4C34.2114 56.5338 34.3199 56.6423 34.4537 56.6423Z"
              fill="white"
            />
            <path
              d="M32.4462 57.5308C32.58 57.5308 32.6885 57.4223 32.6885 57.2885C32.6885 57.1546 32.58 57.0461 32.4462 57.0461C32.3123 57.0461 32.2039 57.1546 32.2039 57.2885C32.2039 57.4223 32.3123 57.5308 32.4462 57.5308Z"
              fill="white"
            />
            <path
              d="M29.2845 58.7768L28.8461 56.123C29.6622 55.5906 30.5936 55.2605 31.5628 55.1602C32.5321 55.0598 33.5113 55.1921 34.4192 55.5461L34.8345 56.3192C34.8345 56.3192 36.6115 53.7576 34.1538 52.7538C33.389 52.4711 32.573 52.3537 31.7595 52.4094C30.9461 52.4651 30.1537 52.6926 29.4345 53.0768L30.3576 52.073C30.3576 52.073 28.4884 52.073 28.3038 53.6999C28.0149 53.6987 27.7361 53.806 27.5225 54.0004C27.3089 54.1948 27.1759 54.4622 27.1499 54.7499C27.0959 55.076 27.12 55.4102 27.2203 55.7251C27.3206 56.0401 27.4942 56.3267 27.7269 56.5615L28.3269 58.6268C28.6535 58.5531 28.9961 58.6067 29.2845 58.7768Z"
              fill="#F2AA00"
            />
            <path
              d="M38.3537 95.2501C33.6345 95.2501 24.0576 95.0193 22.1076 93.2193C21.8307 92.9654 20.9537 92.1924 24.4153 84.8424C26.0884 81.2539 27.9922 77.8039 28.0153 77.7693L28.2345 77.8847C26.1345 81.6924 20.9768 91.8231 22.2922 93.0347C24.7845 95.3424 40.8345 94.9731 40.996 94.9731V95.227C40.8345 95.227 39.8307 95.2501 38.3537 95.2501Z"
              fill="white"
            />
            <path
              d="M40.3846 104.4C40.3846 104.4 25.6039 105 16.2923 102.969L15.9231 105.831C24.1042 106.453 32.3318 105.972 40.3846 104.4Z"
              fill="#030047"
            />
            <path
              d="M40.8345 80.5038L40.3845 75.8076H40.6384L41.0999 80.6307L40.8345 80.5038Z"
              fill="white"
            />
            <path
              d="M41.7923 110.769C39.3231 113.077 17.9308 116.042 15.9462 112.419C15.7731 114.081 15.6577 115.881 15.4846 118.777C19.3678 124.029 23.9263 128.747 29.0423 132.808L29.2385 132.958C33.8184 136.577 38.8109 139.64 44.1115 142.085C43.2115 128.285 42.2308 116.389 41.7923 110.769Z"
              fill="#16C2F8"
            />
            <path
              d="M29.2499 132.969L29.573 125.192C29.573 125.192 32.8269 122.123 34.3038 120.577L34.1192 120.404C32.6307 121.996 31.073 123.531 29.3653 125.088L29.0422 132.738L29.2499 132.969Z"
              fill="white"
            />
            <path
              d="M98.2499 29.2962H85.3846C84.2134 29.2931 83.0912 28.8266 82.2631 27.9985C81.435 27.1703 80.9684 26.0481 80.9653 24.877H81.473C81.4654 25.3955 81.5609 25.9103 81.754 26.3916C81.9472 26.8728 82.2341 27.3108 82.5981 27.6802C82.9621 28.0496 83.3959 28.3428 83.8742 28.543C84.3526 28.7432 84.866 28.8462 85.3846 28.8462H98.2499C99.2874 28.8462 100.282 28.4341 101.016 27.7005C101.749 26.967 102.161 25.9721 102.161 24.9346H102.692C102.674 26.0997 102.198 27.2107 101.366 28.0271C100.535 28.8434 99.4152 29.2994 98.2499 29.2962Z"
              fill="#A892F7"
            />
            <path
              d="M97.3152 124.35H86.2844V124.858H97.3152V124.35Z"
              fill="#A892F7"
            />
            <path
              d="M44.4229 38.0424C49.2533 38.0424 53.1691 34.1266 53.1691 29.2962C53.1691 24.4658 49.2533 20.55 44.4229 20.55C39.5925 20.55 35.6768 24.4658 35.6768 29.2962C35.6768 34.1266 39.5925 38.0424 44.4229 38.0424Z"
              fill="white"
            />
            <path
              d="M77.4807 90.0922C80.4248 90.0922 82.8114 87.7055 82.8114 84.7614C82.8114 81.8173 80.4248 79.4307 77.4807 79.4307C74.5366 79.4307 72.1499 81.8173 72.1499 84.7614C72.1499 87.7055 74.5366 90.0922 77.4807 90.0922Z"
              fill="#5E27C9"
            />
            <path
              d="M78.7962 82.4193C78.5617 82.4324 78.3267 82.4324 78.0923 82.4193C77.8998 82.331 77.6923 82.2801 77.4808 82.2693C77.2621 82.2723 77.0462 82.3194 76.8462 82.4077C76.6156 82.4203 76.3845 82.4203 76.1539 82.4077C76.1362 82.4061 76.1185 82.4082 76.1017 82.4139C76.085 82.4195 76.0696 82.4286 76.0566 82.4406C76.0435 82.4525 76.0331 82.4671 76.026 82.4833C76.0189 82.4995 76.0153 82.517 76.0154 82.5347C76.0149 82.5677 76.0263 82.5998 76.0475 82.6252C76.0686 82.6506 76.0982 82.6676 76.1308 82.6731C76.389 82.7082 76.6413 82.778 76.8808 82.8808C76.9322 83.0365 77.0389 83.1679 77.1808 83.2501C77.1808 83.527 77.0308 83.5385 77.0308 83.5385C76.888 83.5541 76.7522 83.6087 76.6383 83.6962C76.5243 83.7836 76.4366 83.9007 76.3846 84.0347C76.2346 84.5539 76.2692 86.8154 77.1 87.0116V87.5539C77.1 87.6182 77.1255 87.6798 77.171 87.7252C77.2164 87.7707 77.2781 87.7962 77.3423 87.7962H77.5039C77.5351 87.7978 77.5664 87.793 77.5957 87.7821C77.6251 87.7712 77.6519 87.7544 77.6745 87.7328C77.6972 87.7113 77.7152 87.6853 77.7276 87.6565C77.7399 87.6277 77.7462 87.5967 77.7462 87.5654V87.0231C78.5769 86.8501 78.6577 84.5885 78.5192 84.0577C78.4708 83.9248 78.3873 83.8074 78.2776 83.7181C78.168 83.6287 78.0361 83.5706 77.8962 83.5501C77.8962 83.5501 77.7462 83.5501 77.7462 83.2501C77.8887 83.1742 77.9963 83.046 78.0462 82.8924C78.2912 82.7967 78.5469 82.7309 78.8077 82.6962C78.8239 82.6963 78.8399 82.693 78.8547 82.6865C78.8695 82.68 78.8828 82.6704 78.8937 82.6584C78.9045 82.6465 78.9128 82.6324 78.9178 82.617C78.9229 82.6016 78.9247 82.5854 78.9231 82.5693C78.9265 82.5508 78.9258 82.5318 78.9209 82.5136C78.9161 82.4954 78.9073 82.4786 78.8952 82.4642C78.883 82.4499 78.8678 82.4384 78.8507 82.4306C78.8336 82.4228 78.815 82.419 78.7962 82.4193ZM77.9077 86.5385C77.9077 86.5691 77.8955 86.5985 77.8739 86.6201C77.8523 86.6417 77.8229 86.6539 77.7923 86.6539H77.0885C77.0579 86.6539 77.0285 86.6417 77.0069 86.6201C76.9852 86.5985 76.9731 86.5691 76.9731 86.5385C76.9731 86.3308 77.0539 85.9154 77.4462 85.927C77.8385 85.9385 77.9077 86.3077 77.9077 86.5385ZM77.4692 83.1577C77.4177 83.1577 77.3667 83.1476 77.3191 83.1279C77.2715 83.1082 77.2283 83.0793 77.1918 83.0428C77.1554 83.0064 77.1265 82.9632 77.1068 82.9156C77.0871 82.868 77.0769 82.817 77.0769 82.7654C77.0769 82.6614 77.1183 82.5616 77.1918 82.488C77.2654 82.4145 77.3652 82.3731 77.4692 82.3731C77.5733 82.3731 77.6731 82.4145 77.7466 82.488C77.8202 82.5616 77.8616 82.6614 77.8616 82.7654C77.8557 82.8654 77.8117 82.9594 77.7388 83.028C77.6658 83.0967 77.5694 83.1348 77.4692 83.1347V83.1577Z"
              fill="#A892F7"
            />
            <path
              d="M91.8 90.0922C94.7441 90.0922 97.1308 87.7055 97.1308 84.7614C97.1308 81.8173 94.7441 79.4307 91.8 79.4307C88.8559 79.4307 86.4692 81.8173 86.4692 84.7614C86.4692 87.7055 88.8559 90.0922 91.8 90.0922Z"
              fill="#5E27C9"
            />
            <path
              d="M93.8537 83.3422C93.7312 83.2169 93.5849 83.1174 93.4234 83.0495C93.2619 82.9815 93.0885 82.9465 92.9133 82.9465C92.7381 82.9465 92.5647 82.9815 92.4032 83.0495C92.2417 83.1174 92.0954 83.2169 91.9729 83.3422L91.846 83.4576C91.8333 83.4689 91.8169 83.4752 91.7998 83.4752C91.7828 83.4752 91.7664 83.4689 91.7537 83.4576L91.6383 83.3422C91.3873 83.0913 91.047 82.9504 90.6921 82.9504C90.3373 82.9504 89.997 83.0913 89.746 83.3422C89.4951 83.5932 89.3542 83.9335 89.3542 84.2883C89.3542 84.6432 89.4951 84.9835 89.746 85.2345L89.9075 85.396L91.5921 87.0922C91.617 87.1195 91.6473 87.1413 91.6811 87.1562C91.7149 87.1711 91.7514 87.1788 91.7883 87.1788C91.8252 87.1788 91.8617 87.1711 91.8955 87.1562C91.9293 87.1413 91.9596 87.1195 91.9845 87.0922L93.8537 85.246C93.981 85.1223 94.0823 84.9744 94.1514 84.8109C94.2206 84.6474 94.2562 84.4716 94.2562 84.2941C94.2562 84.1166 94.2206 83.9409 94.1514 83.7773C94.0823 83.6138 93.981 83.4659 93.8537 83.3422Z"
              fill="#A892F7"
            />
            <path
              d="M106.119 90.0922C109.063 90.0922 111.45 87.7055 111.45 84.7614C111.45 81.8173 109.063 79.4307 106.119 79.4307C103.175 79.4307 100.788 81.8173 100.788 84.7614C100.788 87.7055 103.175 90.0922 106.119 90.0922Z"
              fill="#5E27C9"
            />
            <path
              d="M108.612 84.7268L108.462 84.4499C108.554 84.4499 108.692 84.1499 108.554 84.0114C108.415 83.873 108.3 84.0114 108.231 84.0114L107.885 83.0768C107.87 83.0238 107.841 82.9761 107.8 82.9393C107.759 82.9025 107.708 82.8781 107.654 82.8691C107.161 82.764 106.658 82.706 106.154 82.696C105.638 82.7012 105.125 82.7553 104.619 82.8576C104.566 82.87 104.518 82.8956 104.477 82.9319C104.437 82.9682 104.406 83.0141 104.389 83.0653L104.089 84.023C104.008 84.023 103.846 83.9422 103.765 84.023C103.685 84.1037 103.765 84.4153 103.858 84.4614L103.662 84.7268C103.64 84.7865 103.64 84.8517 103.662 84.9114C103.659 85.5214 103.729 86.1295 103.869 86.723C103.88 86.7574 103.901 86.7875 103.93 86.8084C103.96 86.8293 103.995 86.8399 104.031 86.8384H104.619C104.652 86.8382 104.684 86.8282 104.71 86.8096C104.737 86.7911 104.758 86.7649 104.769 86.7345L104.873 86.4114H107.539L107.642 86.723C107.654 86.7534 107.675 86.7796 107.701 86.7981C107.728 86.8166 107.76 86.8266 107.792 86.8268H108.392C108.426 86.8258 108.459 86.8141 108.486 86.7934C108.513 86.7727 108.533 86.744 108.542 86.7114C108.69 86.1189 108.763 85.5105 108.762 84.8999C108.735 84.8253 108.682 84.7634 108.612 84.7268ZM104.423 84.0345L104.573 83.1691C104.58 83.1392 104.596 83.1121 104.618 83.0915C104.641 83.0709 104.67 83.0577 104.7 83.0537C105.179 82.9618 105.666 82.9193 106.154 82.9268C106.611 82.9279 107.067 82.9743 107.515 83.0653C107.54 83.0731 107.562 83.0867 107.58 83.1047C107.598 83.1228 107.611 83.1448 107.619 83.1691L107.85 84.0345C107.856 84.0538 107.856 84.0741 107.853 84.0937C107.849 84.1134 107.84 84.1319 107.828 84.1476C107.815 84.1634 107.799 84.176 107.781 84.1844C107.763 84.1928 107.743 84.1968 107.723 84.1961H104.539C104.519 84.1978 104.499 84.1942 104.48 84.1858C104.462 84.1774 104.446 84.1645 104.435 84.1482C104.423 84.1319 104.416 84.1128 104.414 84.0929C104.412 84.073 104.415 84.0528 104.423 84.0345ZM104.792 85.3037C104.768 85.3432 104.734 85.3756 104.694 85.3978C104.653 85.4201 104.608 85.4314 104.562 85.4307H104.158C104.095 85.4316 104.033 85.4101 103.985 85.3699C103.936 85.3297 103.903 85.2736 103.892 85.2114C103.887 85.177 103.887 85.142 103.892 85.1076C103.887 85.0657 103.892 85.0231 103.907 84.9836C103.922 84.9441 103.947 84.909 103.979 84.8815C104.011 84.854 104.049 84.835 104.091 84.8261C104.132 84.8172 104.175 84.8188 104.215 84.8307L104.631 84.923C104.67 84.9317 104.707 84.9498 104.738 84.9756C104.769 85.0015 104.794 85.0344 104.81 85.0717C104.826 85.109 104.832 85.1495 104.829 85.1898C104.826 85.2302 104.814 85.2693 104.792 85.3037ZM106.719 85.6268C106.716 85.6554 106.703 85.6818 106.682 85.701C106.66 85.7202 106.633 85.7308 106.604 85.7307H106.235H106.004H105.623C105.595 85.7286 105.569 85.7172 105.548 85.6984C105.527 85.6796 105.513 85.6545 105.508 85.6268C105.506 85.6082 105.508 85.5894 105.515 85.5718C105.521 85.5542 105.531 85.5382 105.544 85.525C105.558 85.5117 105.574 85.5016 105.591 85.4953C105.609 85.4889 105.628 85.4866 105.646 85.4884H106.592C106.611 85.4861 106.629 85.4883 106.646 85.4946C106.664 85.501 106.679 85.5114 106.691 85.5249C106.704 85.5385 106.713 85.5548 106.718 85.5725C106.723 85.5902 106.723 85.6088 106.719 85.6268ZM108.358 85.1076C108.352 85.142 108.352 85.177 108.358 85.2114C108.345 85.2726 108.311 85.3275 108.263 85.3673C108.215 85.4071 108.155 85.4294 108.092 85.4307H107.689C107.642 85.4314 107.597 85.4201 107.556 85.3978C107.516 85.3756 107.482 85.3432 107.458 85.3037C107.437 85.2685 107.424 85.2286 107.422 85.1875C107.419 85.1464 107.427 85.1053 107.444 85.0679C107.461 85.0304 107.487 84.9976 107.52 84.9724C107.552 84.9471 107.59 84.9302 107.631 84.923L108.046 84.8307C108.086 84.8211 108.128 84.8212 108.167 84.8312C108.207 84.8411 108.244 84.8605 108.274 84.8877C108.305 84.9149 108.329 84.9491 108.343 84.9874C108.358 85.0257 108.363 85.0669 108.358 85.1076Z"
              fill="#A892F7"
            />
          </svg>
        </div>
        <div className="heading-intro">
          <p className="heading">Login with your Email</p>
          <p className="text-small">Claim, edit or renew your policy</p>
        </div>
        <div className="input-container">
          <div className="input-group mb-3">
            <input
              type={first ? "text" : "number"}
              className="form-control"
              placeholder={first ? "Email" : "Otp"}
              aria-label="email"
              aria-describedby="basic-addon1"
              id="big-input"
              onChange={inputHandler}
            />
          </div>
          {message && (
            <div
              className="alert alert-success d-flex align-items-center"
              role="alert"
            >
              <svg
                className="bi flex-shrink-0 me-2"
                width={24}
                height={24}
                role="img"
                aria-label="Success:"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
              <div>{message}</div>
            </div>
          )}
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="agree" name="agree" value="bike" />
          <label htmlFor="agree">Recieve important updates on Whatsapp</label>
        </div>
        <button
          className="btn btn-outline-success button-grey"
          onClick={() => {
            if (first) logIn();
            else logInOtp();
          }}
        >
          {first ? "Get OTP" : "Login"}
        </button>
      </div>
    </>
  );
}