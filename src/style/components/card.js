import styled from "styled-components";

const StyledCard = styled.div`
  width: 170px;
  overflow: hidden;
  .card_link {
    text-decoration: none;
  }
  .card_title {
    color: #c9ac8c;
    font-weight: 100;
    font-size: 20px;
    font-family: cursive;
    margin: 5px 0px;
  }
  .card_text {
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 144.4%;
    margin: 0;
    color: rgba(255, 255, 255, 0.6);
  }
  .card_view {
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 144.4%;
    margin: 0;
    color: rgba(255, 255, 255, 0.6);
  }
  @media screen and (max-width: 576px) {
    width: 80%;
    .card_img-item {
      width: 100%;
    }
  }
`;

export { StyledCard };
