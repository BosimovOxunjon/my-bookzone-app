import styled from "styled-components";

const StyledBookDetails = styled.section`
  background: #191919;
  padding-top: 70px;
  .container {
    padding: 0 50px;
  }
  .row {
    display: flex;
    .col:first-child {
      width: 40%;
      .img_wrapper {
        img {
          width: 100%;
        }
      }
    }
    .col:last-child {
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
      .book_description {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 144.4%;
        color: rgba(255, 255, 255, 0.8);
      }
    }
  }
`;

export { StyledBookDetails };
