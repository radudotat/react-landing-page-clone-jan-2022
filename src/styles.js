import { css } from '@emotion/react';

export const blueButton = css`
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
    font-size: 14px;
    padding: 0;
  }

  & div > strong {
    font-size: 20px;
  }
`;

export const navigationStyle = css`
  position: sticky;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-content: center;
  /* line-height: 2rem; */
  width: auto;
  padding: 16px 0;
  max-width: 1272px;
  /* margin-right: auto;
  margin-left: auto; */
  padding-right: 36px;
  padding-left: 36px;
  text-align: center;

  a {
    padding: 10px;
    font-family: Helvetica, sans-serif;
    color: #353e44;
    font-size: 12px;
    font-weight: 700;
    text-decoration: none;
  }
`;

export const logoStyle = css`
  width: 200px;
  height: 2.3rem;
  display: inline-block;
`;

export const bodyStyle = css`
  max-width: 1272px;
  margin-right: auto;
  margin-left: auto;
  margin: 60px auto 0 auto;
  padding-top: 60px 36px 0 36px;

  /* div + div:last-child {
    margin-top: 30px;
  } */

  & h6 {
    text-align: center;
    color: #4f5c65;
    font-size: 14px;
    margin: 0 0 10px 0;
  }
`;

export const heroStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1272px;
  padding-right: 36px;
  padding-left: 36px;
  max-width: 690px;
  margin: auto;

  img {
    width: 100%;
    max-width: 1226px;
  }

  & h1 {
    margin-top: 70px;
    margin-bottom: 8px;
    color: #353e44;
    font-size: 54px;
    line-height: 62px;
    font-weight: 700;
    letter-spacing: -0.04em;
    text-align: center;
  }
`;

export const heroScreenshot = css`
  text-align: center;

  img {
    width: 100%;
    max-width: 1226px;
  }
`;
