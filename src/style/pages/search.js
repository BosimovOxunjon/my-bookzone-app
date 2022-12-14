import styled from "styled-components";

const StyledSearch = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #191919;
  height: 100vh;
  .row {
    width: 70vw;
    margin: auto;
    padding: 40px;
    background: #191919;
    min-height: 150px;
    text-align: center;
    box-shadow: 0px 4px 77px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    .content_search {
      padding-bottom: 35x;
    }
    .title {
      font-style: normal;
      font-weight: 400;
      margin-top: 0;
      font-size: 25px;
      line-height: 34px;
      text-transfrom: uppercase;
      color: #c9ac8c;
    }
    form {
      display: flex;
      justify-content: space-around;
    }
    .form_input {
      border-radius: 15px;
      font-size: 16px;
      padding: 15px 25px;
      width: 150%;
      background: #404040;
      border: none;
    }
    .form_btn {
      display: flex;
      background: #c9ac8c;
      margin-left: 10px;
      height: 100%;
      text-transform: capitalize;
      border-radius: 15px;
      padding: 14px 40px;
      font-weight: 400;
      font-size: 16px;
      line-height: 16px;
      border: none;
    }
  }
  @media screen and (max-width: 769px) {
    .row {
      min-width: 95vw;
      max-width: 100%;
    }
    .title {
      font-size: 20px;
    }
    form {
      flex-wrap: wrap;
      .form_btn {
        margin: 15px 0;
        padding: 10px 30px !important;
      }
      .form_input {
        padding: 10px 15px !important;
      }
    }
  }
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;
export { StyledSearch };
