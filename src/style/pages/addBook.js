import styled from "styled-components";

const StyledAddBook = styled.section`
  .row {
    display: flex;
    .col:first-child {
      background: rgba(243, 243, 243, 0.93);
    }
    .col {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 30px 0;
      min-height: 100vh;
      width: 50%;
      .addbook_title {
        font-weight: 900;
        font-size: 24px;
        line-height: 34px;
        border: none;
      }
      .addbook_btn {
        padding: 10px 60px;
        background: #152540;
        border-radius: 99px;
        color: #fff;
        border: none;
        font-weight: 500;
        font-size: 18px;
        line-height: 36px;
      }
      .title {
        margin-top: 0;
        width: 80%;
      }
      .addbook_form {
        width: 80%;
        .addbook_form-input {
          display: inline-block;
          padding: 15px 25px;
          width: 100% !important;
          background: #ffffff;
          border: 1px solid #b4b4bb;
          border-radius: 10px;
          margin-bottom: 17px;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .row {
      flex-wrap: wrap;
      justify-content: center;
      .col {
        width: 100%;
        .addbook_btn {
          padding: 3px 35px;
        }
      }
    }
  }
  @media screen and (max-width: 576px) {
    .col:last-child {
      .title {
        width: 95%;
      }
      .addbook_form {
        width: 95%;
      }
    }
  }
`;

export { StyledAddBook };
