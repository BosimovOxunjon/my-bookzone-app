import styled from "styled-components";

const StyledBookDetails = styled.section`
  min-height: 100vh;
  padding-top: 70px;
  background: #191919;
  .container {
    padding: 0 50px;
  }
  .row {
    display: flex;
    margin-top: 20px;
    .col:first-child {
      width: 40%;
      .img_wrapper {
        img {
          width: 100%;
        }
      }
    }
    .col:last-child {
      padding-left: 20px;
      width: 60%;
      .title {
        font-family: cursive;
        font-style: normal;
        font-weight: 400;
        font-size: 35px;
        line-height: 53px;
        color: #c9ac8c;
      }
      .author {
        color: #c9ac8c;
      }
      .book_info {
        color: #fff;
        font-weight: 400;
        font-size: 14px;
        span {
          color: rgba(255, 255, 255, 0.6);
        }
      }
      .description {
        display: flex;
        align-items: center;
        color: #c9ac8c;
        font-size: 12px;
        hr {
          margin-top: 10px;
          width: 70%;
          border: 1px solid;
          background: rgba(201, 172, 140, 0.6);
        }
      }
      .book_types-title {
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
        color: #c9ac8c;
      }
      .book_types {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .book_types-wrapper {
          display: flex;
        }
        .book_types-item {
          width: 90px;
          font-size: 14px;
          .book_icon,
          p {
            color: white;
          }
          span {
            color: rgba(255, 255, 255, 0.6);
          }
        }
        .book_types-btn {
          display: inline-block;
          // margin-left: auto/;
          width: 200px;
          height: 50px;
          font-size: 16px;
          font-weight: 400;
          border: none;
          color: #3c2710;
          background: #c9ac8c;
        }
      }
      .book_description {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 144.4%;
        color: rgba(255, 255, 255, 0.8);
      }
    }
  }
  .quotes {
    .quotes_link {
      display: flex;
      width: 50%;
      list-style: none;
      padding-left: 0;
      justify-content: space-between;
      .quotes_link-item {
        text-decoration: none;
        color: rgba(255, 255, 255, 0.6);
        margin-right: 15px;
      }
    }
    .quotes_info {
      display: flex;
      justify-content: space-between;
      .quotes_info-link {
        position: relative;
        width: 49.5%;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #fff;
        padding: 40px;
        background: linear-gradient(263.94deg, #7b7474 0%, #848080 98.06%);
        border-radius: 15px;
        .quotes_icon {
          position: absolute;
          top: -12px;
          font-size: 30px;
          color: #c9ac8c;
        }
      }
      .quotes_link:first-child {
        margin-right: 10px;
      }
    }
  }
  @media screen and (max-width: 769px) {
    .row {
      flex-wrap: wrap;
      .col {
        width: 100% !important;
      }
      .col:first-child {
        margin-top: 30px;
      }
      .book_types-btn {
        width: 160px !important;
        height: 40px !important;
        font-size: 14px !important;
      }
    }
    .quotes_info-link,
    .quotes_link {
      width: 100% !important;
    }
    .quotes_info-link {
      margin-bottom: 30px;
    }
  }
  @media screen and (max-width: 576px) {
    .book_types {
      flex-wrap: wrap;
    }
    .book_types-btn {
      margin-top: 15px;
    }
  }
`;

export { StyledBookDetails };
