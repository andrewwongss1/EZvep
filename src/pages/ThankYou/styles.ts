import styled from "styled-components";

const ThankYouContainer = styled.div`
  padding: 5rem 0;
  text-align: center;
  min-height: calc(100vh - 300px);
  display: flex;
  align-items: center;
  justify-content: center;

  .thank-you-content {
    background: #fff;
    padding: 3rem;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.5rem;
    margin: 1.5rem 0;
    color: #2e186a;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #18216d;
  }
`;

export default ThankYouContainer;
