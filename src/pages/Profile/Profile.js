import axios from "axios";
import React, { useState, useEffect } from "react";
import { AiFillStar, AiFillAppstore } from "react-icons/ai";
import { MdRefresh } from "react-icons/md";
import ProfilePhoto from "../../assets/images/profile/man.jpeg";
import { Layout, Col, Row, Space, Typography, Divider } from "antd";
import Card from "../../components/Card";
import HomeImg from "../../assets/images/home/home.png";
import { StyledProfile } from "../../style/pages/profile";
import keys from "../../configs";
import Header from "../Header/Header";

const Profile = () => {
  const [books, setBooks] = useState({ payload: { docs: [{}] } });
  const fetchBooks = async () => {
    const urlBooks = `${keys.BACKEND_API}/api/books`;
    const { data } = await axios.get(urlBooks);
    return data;
  };
  useEffect(() => {
    fetchBooks().then((data) => {
      setBooks(data);
    });
  }, []);
  console.log(books);
  return (
    <>
      <Layout>
        <Header />
        <StyledProfile>
          <div className="container">
            <div className="profile">
              <div className="profile_img-wrapper">
                <div className="profile_img">
                  <img src={ProfilePhoto} alt="profile_photo" />
                  <span className="profile_img-icon">
                    <AiFillStar className="profile_img-icon-item" />
                  </span>
                </div>
                <p className="profile_img-title">Oltin kitobxon</p>
                <p className="profile_img-text">186 ta kitob o'qigan</p>
              </div>
              <div className="profile_info">
                <h2 className="profile_title">farrux abdullayev</h2>
                <p className="profile_text">
                  <span>Tavallud :</span> February
                </p>
                <p className="profile_text">
                  {" "}
                  <span>Manzili : </span> Jizzax
                </p>
                <p className="profile_text">
                  <span>Bio :</span> Graphic designer and Developer
                </p>
              </div>
            </div>
            <Row className="profile_books">
              <Col span={24} sm={16} lg={8} style={{ marginRight: "auto" }}>
                <div className="books_reading-wrapper">
                  <p className="books_reading-title">
                    Hozir o'qilmoqda...{" "}
                    <span className="books_reading-icon">
                      <AiFillAppstore />
                    </span>
                  </p>
                  <div className="books_reading-card">
                    <div className="books_reading-card-img">
                      <img src={ProfilePhoto} alt="ikki eshik orasi" />
                    </div>
                    <div className="books_reading-text">
                      <p>Ikki eshik orasi</p>
                      <span></span>
                    </div>
                    <div className="books_reading-percentage">
                      <p>96%</p>
                      <button>
                        <span>
                          Yangilash
                          <MdRefresh className="books_reading-percentage-icon" />
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="books_reading-card">
                    <div className="books_reading-card-img">
                      <img src={ProfilePhoto} alt="ikki eshik orasi" />
                    </div>
                    <div className="books_reading-text">
                      <p>Ikki eshik orasi</p>
                      <span></span>
                    </div>
                    <div className="books_reading-percentage">
                      <p>96%</p>
                      <button>
                        <span>
                          Yangilash
                          <MdRefresh className="books_reading-percentage-icon" />
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="books_reading-card">
                    <div className="books_reading-card-img">
                      <img src={ProfilePhoto} alt="ikki eshik orasi" />
                    </div>
                    <div className="books_reading-text">
                      <p>Ikki eshik orasi</p>
                      <span></span>
                    </div>
                    <div className="books_reading-percentage">
                      <p>96%</p>
                      <button>
                        <span>
                          Yangilash
                          <MdRefresh className="books_reading-percentage-icon" />
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="books_reading-card">
                    <div className="books_reading-card-img">
                      <img src={ProfilePhoto} alt="ikki eshik orasi" />
                    </div>
                    <div className="books_reading-text">
                      <p>Ikki eshik orasi</p>
                      <span></span>
                    </div>
                    <div className="books_reading-percentage">
                      <p>96%</p>
                      <button>
                        <span>
                          Yangilash
                          <MdRefresh className="books_reading-percentage-icon" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={24} lg={15}>
                <Space
                  split={<Divider type="vertical" />}
                  style={{ margin: "25px 0 25px 5%" }}
                >
                  <Typography.Link>O'qilganlar</Typography.Link>
                  <Typography.Link>O'qishni xohlayman</Typography.Link>
                  <Typography.Link>O'qilmoqda</Typography.Link>
                  <Typography.Link>Adiblar</Typography.Link>
                </Space>
                <Row style={{ gap: "15px" }}>
                  {books.payload.docs.map((item) => {
                    return (
                      <>
                        <Col>
                          <Card
                            key={item?._id}
                            id={item?._id}
                            img={item?.imageLink || HomeImg}
                            title={item?.title}
                            // text={item?.author.firstName}
                            view={item?.views}
                          />
                        </Col>
                      </>
                    );
                  })}
                  <Col></Col>
                </Row>
              </Col>
            </Row>
          </div>
        </StyledProfile>
      </Layout>
    </>
  );
};

export default Profile;
