import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import DividerSharpBottom from './img/divider-sharp-bottom.svg';
import { ReactComponent as FullLogoDark } from './img/full_logo_dark.svg';
// /divider-sharp-bottom.svg
import ProductPreview from './img/product preview.png';

const spaceLeft = css`
  margin-left: 40px;
`;

const blueButton = css`
  padding: 0;
  border-radius: 6px;
  font-weight: 400;
  display: inline-block;
  box-shadow: 0 1px 2px 0 #0087ee;
  border-style: solid;
  border-width: 2px;
  border-color: #0087ee;
  border-radius: 5px;
  background-color: #0087ee;
  text-decoration: none;
  padding: 6px 35px;

  & strong {
    /* line-height: 0; */
    color: white;
    font-weight: bold;
    font-size: 16px;
    padding: 0;
  }

  & div > strong {
    font-size: 20px;
  }
`;

const navigationStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* line-height: 2rem; */
  width: auto;
  padding: 16px 0;
  max-width: 1272px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 36px;
  padding-left: 36px;

  a {
    padding: 12px;
    font-family: Helvetica, sans-serif;
    color: #353e44;
    font-size: 12px;
    font-weight: 700;
    text-decoration: none;
  }
`;

const logoStyle = css`
  width: 200px;
  height: 2rem;
  display: inline-block;
`;

const bodyStyle = css`
  max-width: 1272px;
  margin-right: auto;
  margin-left: auto;
  margin: 60px auto 0 auto;
  padding-top: 60px 36px 0 36px;

  div + div:last-child {
    margin-top: 30px;
  }

  & h6 {
    text-align: center;
    color: #4f5c65;
    font-size: 16px;
    margin: 0;
  }
`;

const heroStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1272px;
  padding-right: 36px;
  padding-left: 36px;
  max-width: 690px;
  margin: auto;

  img {
    width: 1226px;
  }

  & h1 {
    margin-bottom: 8px;
    color: #353e44;
    font-size: 64px;
    line-height: 72px;
    font-weight: 700;
    letter-spacing: -0.04em;
    text-align: center;
  }
`;

const textLarge = css`
  color: #4f5c65;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

const heroScreenshot = css`
  text-align: center;

  img {
    width: 1226px;
  }
`;

function App() {
  return (
    <div>
      <div css={navigationStyle}>
        <FullLogoDark css={logoStyle} />
        <nav>
          <div>
            <a href="/#how-it-works">
              <strong>How it works</strong>
            </a>
            <a href="/pricing#faq">
              <strong>FAQs</strong>
            </a>
            <a href="/pricing">
              <strong>Pricing</strong>
            </a>
            <a css={spaceLeft} href="/#">
              Log In
            </a>
            <a css={blueButton} href="/#">
              <strong>Try it for free</strong>
            </a>
          </div>
        </nav>
      </div>
      <div css={bodyStyle}>
        <div css={heroStyle}>
          <h1>
            Super simple invoicing, <br />
            made for freelancers.
          </h1>
          <div css={textLarge}>
            The all-in-one tool to bill, manage, and automate your payments - so
            you can get paid fast, from anywhere!{' '}
          </div>
          <div style={{ marginTop: '30px' }}>
            <h6>Get setup in minutes.</h6>
            <div>
              <a css={blueButton} href="/#app.chimpcharge.com/signup">
                <div>
                  <strong>Sign Up Free Forever</strong>
                </div>
              </a>
            </div>
          </div>
          <img src={ProductPreview} alt="Product Preview" />
        </div>
      </div>
      <div css={heroScreenshot}></div>
    </div>
  );
}

export default App;
