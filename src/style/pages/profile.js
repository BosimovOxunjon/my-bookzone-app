import styled from "styled-components";

const StyledProfile = styled.section`
  padding-top: 90px;
  background: #191919;
  min-height: 100vh;
  border-radius: 8px;
  .profile {
    display: flex;
    margin: auto;
    width: 95%;
    padding: 30px 50px;
    background: radial-gradient(
      85.43% 1678.66% at 98.07% 50%,
      #373737 0%,
      #2a2828 100%
    );
    box-shadow: 0px 4px 73px rgba(0, 0, 0, 0.25);
    .profile_img {
      display: inline-block;
      width: 180px;
      height: 180px;
      border: 2px solid #ffffff;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: left;
      }
    }
    .profile_info {
      .profile_title {
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        text-transform: capitalize;
        line-height: 144.4%;
        color: #c9ac8c;
      }
      .profile_text {
        color: rgba(255, 255, 255, 0.1);
        font-size: 18px;
        font-weight: 400;
        span {
          line-height: 144.4%;
          color: #ffffff;
        }
      }
    }
  }
`;

export { StyledProfile };
