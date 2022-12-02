import styled from "styled-components";

const StyledHome = styled.section`
  padding-top: 70px;
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
      flex-wrap: wrap;
      gap: 15px;
    }
    .text {
      font-family: "rotterburg";
    }
  }
`;
export { StyledHome };
