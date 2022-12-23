import styled from "styled-components";

const StyledProfile = styled.section`
  padding-top: 90px;
  background: #191919;
  min-height: 100vh;
  border-radius: 8px;
  .container {
    padding: 5%;
    .profile {
      display: flex;
      margin: auto;
      padding: 30px 50px;
      border-radius: 12px;
      background: radial-gradient(
        85.43% 1678.66% at 98.07% 50%,
        #373737 0%,
        #2a2828 100%
      );
      box-shadow: 0px 4px 73px rgba(0, 0, 0, 0.25);
      .profile_img-wrapper {
        position: relative;
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
          .profile_img-icon {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            right: 25px;
            top: 48%;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            font-size: 25px;
            border: 2px solid #c9ac8c;
            color: #c9ac8c;
            background: black;
          }
          .profil_img-title {
            font-weight: 400;
            font-size: 22px;
            line-height: 144.4%;
            color: #c9ac8c;
          }
        }
        .profile_img-title {
          font-style: normal;
          font-weight: 400;
          font-size: 22px;
          margin-bottom: 6px;
          line-height: 144.4%;
          color: #c9ac8c;
        }
        .profile_img-text {
          font-style: normal;
          font-weight: 400;
          font-size: 22px;
          margin-top: 0;
          line-height: 144.4%;
          color: #ffffff;
        }
      }
      .profile_info {
        padding: 3%;
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
    .books_reading-wrapper {
      padding: 5%;
      background-color: #202020;
      border-radius: 14px;
      .books_reading-title {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-weight: 400;
        font-size: 22px;
        line-height: 144.4%;
        color: #c9ac8c;
        .books_reading-icon {
          color: rgba(255, 255, 255, 0.3);
        }
      }
      .books_reading-card {
        display: flex;
        align-items: center;
        justify-content: center;
        .books_reading-card-img {
          width: 35px;
          height: 45px;
          margin-right: 20px;
          img {
            width: 120%;
          }
        }
        .books_reading-text {
          font-weight: 400;
          font-size: 16px;
          line-height: 144.4%;
          color: #ffffff;
          margin-right: 10px;
          p {
            margin-top: 0;
          }
          span {
            position: relative;
            display: inline-block;
            width: 150px;
            height: 20px;
            background: #ffffff;
            border-radius: 5px;
          }
          span::before {
            content: "";
            display: inline-block;
            position: absolute;
            width: 100px;
            height: 20px;
            background-color: #a87f52;
            border-radius: 5px;
          }
        }
        .books_reading-percentage {
          color: rgba(255, 255, 255, 0.6);
          p {
            text-align: end;
            margin-top: 0;
          }
          button {
            padding-top: 2px;
            height: 20px;
            font-weight: 400;
            font-size: 10px;
            line-height: 10px;
            width: 90px;
            color: #3c2710;
            background: #c9ac8c;
            border-radius: 5px;
            border: none;
            span {
              display: flex;
              align-items: center;
              justify-content: center;
              .books_reading-percentage-icon {
                font-size: 16px;
              }
            }
          }
        }
      }
    }
    .profile_books {
      margin-top: 25px;
    }
  }
  @media screen and (max-width: 576px) {
    .profile {
      justify-content: center;
      flex-wrap: wrap;
    }
  }
`;

export { StyledProfile };
