import { Card, Col, Row } from "antd";
import React from "react";
import { shoppingCart } from "../../dummydata";

const BookCard = () => {
  return (
    <div style={{display:'flex',flexWrap:'wrap'}}>
      {Array.isArray(shoppingCart) &&
        shoppingCart.length !== 0 &&
        shoppingCart.map((item, index) => (
          <div style={{ margin: 12 }}>
            <Row gutter={1}>
              <div>
                <Col span={7} style={{maxWidth:'100%'}}>
                  <Card title="Card title">
                    <div style={{ backgroundImage: item.imageUrl }} />
                    <div style={{ display: "flex" }}>
                      Name: &nbsp; <p>{item.name}</p>
                    </div>
                    <div style={{ display: "flex" }}>
                      Price: &nbsp; <p>{item.price}</p>
                    </div>
                    <div style={{ display: "flex",width:'290px' }}>
                      <div>Description: </div>&nbsp;
                      <p>{item.description}</p>
                    </div>
                  </Card>
                </Col>
              </div>
            </Row>
          </div>
        ))}
    </div>
  );
};

export default BookCard;
