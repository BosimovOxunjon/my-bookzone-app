import styled from "styled-components";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: 0.5px solid #ffffff10;
  background: #191919;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    padding: 0 50px;
  }
  .navbar_list {
    display: flex;
    list-style: none;
    padding-left: 0;
    .nav_item {
      margin-right: 15px;
      .nav_link {
        text-decoration: none;
        color: #ffffff;
        line-height: 23.1px;
      }
    }
  }
  .btn {
    display: none;
  }
  .logo,
  .header_profile {
    position: static;
    z-index: 100;
  }
  .img_wrapper {
    display: inline-block;
    margin-left: auto;
    width: 50px;
    border-radius: 50%;
    overflow: hidden;
    .img {
      width: 100%;
    }
  }
  @media screen and (max-width: 769px) {
    nav {
      position: fixed;
      align-self: center;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #191919;
      opacity: 0;
      visibility: hidden;
    }
    .navbar_list {
      position: absolute;
      left: 40%;
      top: 30%;
      flex-direction: column;
    }
    .btn {
      position: fixed;
      display: inline-block;
      right: 10px;
      cursor: pointer;
    }
  }
  z-index: 1000;
`;

export { StyledHeader };
