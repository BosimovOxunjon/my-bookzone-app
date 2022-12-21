import styled from "styled-components";

const StyledHome = styled.section`
  padding: 70px 0;
  background: #191919;
  .container {
    padding: 0 50px;
    .row {
      display: flex;
      flex-direction: column;
    }
    .title {
      font-family: cursive;
      font-style: normal;
      font-weight: 400;
      text-align: center;
      font-size: 31px;
      line-height: 34px;
      color: #c9ac8c;
      text-transform: uppercase;
    }
    .links_list {
      list-style: none;
      display: flex;
      justify-content: space-evenly;
      text-transform: capitalize;
      padding-left: 0;
      margin-bottom: 35px;
      .links_item {
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
        color: rgba(255, 255, 255, 0.6);
        text-decoration: none;
      }
    }
    .card_wrapper {
      display: flex;
      justify-content: center;
      text-align: center;
      flex-wrap: wrap;
      gap: 15px;
      .card {
        width: 170px;
        margin-bottom: 25px;
        .card_text-wrapper {
          min-height: 70px;
        }
        .card_title {
          font-weight: 400;
          font-size: 20px;
          line-height: 20px;
          text-align: center;
          color: #c9ac8c;
          text-decoration: none;
          margin-bottom: 0;
        }
        .card_text {
          font-weight: 400;
          font-size: 12px;
          margin-top: 5px;
          line-height: 12px;
          text-align: center;
          color: rgba(255, 255, 255, 0.6);
        }
        .card_icon-wrapper {
          display: flex;
          justify-content: space-evenly;
          color: #fff;
          font-weight: 400;
          font-size: 16px;
          line-height: 16px;
        }
      }
    }
    .text {
      font-family: "rotterburg";
    }
  }
  @media screen and (max-width: 769px) {
    .title {
      font-size: large !important;
    }
    .links_item {
      font-size: 14px !important;
    }
  }
  @media screen and (max-width: 576px) {
    .links_list {
      flex-wrap: wrap;
      .links_item {
        margin-right: 15px;
      }
    }
  }
`;
export { StyledHome };
