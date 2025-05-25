import { lazy } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import { useHistory } from "react-router-dom";

const ThankYouContainer = lazy(() => import("./styles"));

const ThankYou = ({ t }: { t: any }) => {
  const history = useHistory();

  const goHome = () => {
    history.push("/");
  };

  return (
    <Container>
      <ThankYouContainer>
        <Row justify="center" align="middle" style={{ height: "100%" }}>
          <Col lg={12} md={12} sm={24} xs={24}>
            <Slide direction="up">
              <div className="thank-you-content">
                <SvgIcon src="CHECK_MARK.svg" width="80px" height="80px" />
                <h1>{t("Thank You!")}</h1>
                <p>
                  {t("Your form has been successfully submitted. We will get back to you shortly.")}
                </p>
                <Button name="home" onClick={goHome}>
                  {t("Back to Home")}
                </Button>
              </div>
            </Slide>
          </Col>
        </Row>
      </ThankYouContainer>
    </Container>
  );
};

export default withTranslation()(ThankYou);
