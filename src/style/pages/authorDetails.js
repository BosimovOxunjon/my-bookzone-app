import styled from "styled-components";

const StyledAuthorDetails = styled.section`
  min-height: 100vh;
  padding-top: 70px;
  background: #191919;
  .container {
    padding: 0 50px;
  }
  .row {
    display: flex;
    margin-top: 20px;
    .col {
      width: 50%;
    }
    .col:first-child {
      width: 50%;
      .img_wrapper {
        img {
          width: 100%;
        }
      }
    }
    .col:last-child {
      padding-left: 20px;
      width: 50%;
    }
    .author_date {
      margin-top: 30px;
      margin-left: 20px;
      p {
        margin: 0;
      }
      .author_date-text {
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 144.4%;
        color: rgba(255, 255, 255, 0.6);
      }
      .author_date-of-birth {
        font-weight: 400;
        font-size: 39px;
        line-height: 144.4%;
        color: #c9ac8c;
      }
    }
    .author_title {
      font-weight: 400;
      font-size: 48px;
      line-height: 53px;
      color: #c9ac8c;
    }
    .author {
      color: #c9ac8c;
    }
    .author_text {
      margin-top: 0;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 144.4%;
      color: rgba(255, 255, 255, 0.8);
    }
    .author_creativy {
      .author_creativity-title {
        font-weight: 400;
        font-size: 20px;
        line-height: 22px;
        color: #c9ac8c;
        .author_creativy-icon {
          margin-right: 5px;
        }
      }
      .author_creativy-text {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 154.9%;
        color: #ffffff;
        padding-left: 25px;
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
    .author_creativy-text {
      padding-left: 0 !important;
    }
  }
`;

export { StyledAuthorDetails };
