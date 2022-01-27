/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
// import Deco7 from './img/deco-7.svg';
// import Deco9 from './img/deco-9.svg';
// import DividerSharpBottom from './img/divider-sharp-bottom.svg';
import { ReactComponent as FullLogoDark } from './img/full_logo_dark.svg';

// import ProductPreview from './img/product-preview.png';
// import { heroScreenshot, logoStyle } from './styles.js';

function App() {
  const navbar = css`
    background-color: #f7fafc;
    position: sticky;
    top: 0;
    z-index: 99;

    & :before,
    & :after {
      content: '';
      display: table;
      grid-column-start: 1;
      grid-row-start: 1;
      grid-column-end: 2;
      grid-row-end: 2;
    }
  `;

  const logo = css`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: normal;
    justify-content: center;
    align-items: center;

    & img {
      width: 191px;
    }
  `;

  const banner = css`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: normal;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;

    & button {
      display: flex;
      margin-left: 5px;
      flex: 0 auto;
      border-radius: 4px;
      box-shadow: 0 1px 2px 0 #0087ee;
      border-style: solid;
      border-width: 2px;
      border-color: #0087ee;
      background-color: #0087ee;
      font-family: Helvetica, sans-serif;
      color: #fff;
      font-weight: 700;
      text-align: center;
    }

    & navigation {
      flex: 1;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-content: normal;
      justify-content: flex-end;
      align-items: center;
      float: right;

      & a {
        padding: 15px;
      }

      & wrapper {
        width: 100%;
        max-width: 1272px;
        margin: auto;
        padding: 0 36px;
      }
    }

    @media screen and (max-width: 991px) {
      .navigation {
        display: none;
      }
    }
  `;

  const spaceLeft = css`
    margin-left: 40px;
  `;

  const button = css`
    a {
      padding: 8px 9px;
      color: white;
      font-weight: bold;
    }
  `;

  const container = css`
     {
      width: 100%;
      max-width: 1272px;
      margin: 0 auto;
      padding: 0 36px;
    }
  `;

  const topNoBottomSpace = css`
    padding-top: 60px;
    padding-bottom: 0px;
    position: relative;
    background-color: #f7fafc;
  `;

  const heroContainer = css`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: normal;
    justify-content: normal;
    align-items: center;
    text-align: center;

    & h1 {
      margin-bottom: 8px;
      color: #353e44;
      font-size: 64px;
      line-height: 72px;
      font-weight: 700;
      letter-spacing: -0.04em;
    }

    & subtitle {
      color: #4f5c65;
      font-size: 20px;
      font-weight: 400;
      max-width: 690px;
    }

    & button-box {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      align-content: normal;
      justify-content: normal;
      align-items: normal;
      text-align: center;
    }

    & button-block {
      display: block;

      & a.button {
        display: block;
        margin: 5px 0;
        padding: 10px 24px;
        border: solid 2px #0087ee;
        border-radius: 5px;
        background-color: #0087ee;
        color: #fff;
        font-weight: 700;
        font-size: 20px;
        text-align: center;
      }
    }

    & h6 {
      display: flex;
      justify-content: center;
      color: #4f5c65;
      font-size: 16px;
      margin: 0px;
      font-weight: 700;
      letter-spacing: -0.02em;
    }
  `;

  const imgDivider = css`
    position: relative;
    z-index: 1;
    width: 100vw;
    height: 4vw;
    margin-bottom: -1em;
  `;

  const heroScreenshot = css`
    position: relative;
    z-index: 2;
    margin-top: 0px;
    margin-bottom: 72px;
    text-align: center;

    & img {
      max-width: 1226px;
      width: 100%;
    }
  `;

  const decorationContainer = css`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: normal;
    justify-content: flex-start;
    align-items: flex-start;
    position: absolute;
    left: 0%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    z-index: 2;
    overflow: hidden;
    /*border: dotted 1px lime;*/
  `;

  const sectionIcons = css`
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      flex-basis: 24px;
      padding-top: 60px;
      padding-bottom: 0px;

      & img {
        min-width: 24px;
        max-width: 40px;
        width: 100%;
        margin: 6px 40px 12px;
        opacity: 0.5;
      }

      @media screen and (max-width: 479px) {
        .sectionIcons img {
          max-width: 24px;
        }
    `;

  const flexed = css`
    display: flex;
    order: initial;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    flex-grow: 1;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: auto;
    text-align: center;

    & text {
      min-width: 480px;
    }

    & image > img {
      width: 100%;
      min-width: 430px;
    }

    @media screen and (min-width: 990px) {
      .reverse > .text {
        order: 1;
        text-align: center;
      }
    }

    & > div {
      margin: 0.2em;
      border: dotted 1px lime;
      flex: 1;
    }

    & image > img {
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-width: 100px;
      max-width: 300px;
      margin: auto;
    }

    @media screen and (max-width: 991px) {
      .flexed .image > img {
        width: 100%;
        max-width: 340px;
      }
    }
  `;

  const sectionHowItWorks = css`
    & wrapper {
      text-align: center;
      margin-top: 40px;
      padding: 0 24px;
    }

    & grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
      gap: 20px;
      align-items: center;
    }

    & h6 {
      color: #4f5c65;
      font-size: 16px;
      line-height: 24px;
      font-weight: 700;
      letter-spacing: -0.02em;
    }
  `;

  const textBlock = css`
    padding: 0 24px;
  `;
  return (
    <>
      <div css={{ navbar }}>
        <div css={{ wrapper }}>
          <div css={banner}>
            <div css={logo}>
              <a href="#logo">
                <img src="src/img/full_logo_dark.svg" alt="logo" />
              </a>
              <a href="#powered">- By MicroAcquire</a>
            </div>
            <nav css={navigation}>
              <div>
                <a href="#">How it works</a>
                <a href="#">FAQs</a>
                <a href="#">Pricing</a>
                <a href="#" css={spaceLeft}>
                  Log In
                </a>
              </div>
            </nav>
            <div css={button}>
              <a>
                <strong>Try it for free</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
      <section css={{ topNoBottomSpace }}>
        <div css={{ heroContainer }}>
          <h1>
            Super simple invoicing,
            <br />
            made for freelancers.
          </h1>
          <div css={{ subtitle }}>
            The all-in-one tool to bill, manage, and automate your payments - so
            you can get paid fast, from anywhere!
          </div>
          <div css={{ buttonBox }}>
            <h6 css={{ heading }}>Get setup in minutes.</h6>
            <div css={{ buttonBlock }}>
              <a href="#signup" css={{ button }}>
                <div>
                  <strong>Sign Up Free Forever</strong>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div css={{ heroScreenshot }}>
          <img src="src/img/product-preview.png" alt="" css={productPreview} />
        </div>
        <img src="src/img/divider-sharp-bottom.svg" alt="" css={imgDivider} />
        <div css={{ decorationContainer, leftBottom }}>
          <div css={{ decorationContainer, leftBottom }}>
            <div css={decorationsWrapper}>
              <img src="src/img/deco-7.svg" alt="" css={{ decorationLeft }} />
              <div css={{ decorationCircle, leftTop }}></div>
            </div>
          </div>
        </div>
        <div css={{ decorationContainer, rightTop }}>
          <div css={{ decorationContainer, rightTop }}>
            <div css={{ decorationsWrapper }}>
              <div css={{ decorationDiamond, bottomRight }}></div>
              <img src="src/img/deco-9.svg" alt="" css={{ decorationRight }} />
            </div>
          </div>
        </div>
      </section>
      <section css={{ sectionIcons }}>
        <img src="src/img/slack.svg" alt="" />
        <img src="src/img/twitter.svg" alt="" />
        <img src="src/img/instagram.svg" alt="" />
        <img src="src/img/facebook.svg" alt="" />
        <img src="src/img/google.svg" alt="" />
        <img src="src/img/skype.svg" alt="" />
      </section>
      <section css={{ learnFlex, flexed }}>
        <div css={{ text }}>
          <h2>Simplify your payments</h2>
          <p css={(paragraphLarge, textLarge)}>
            ChimpCharge replaces all those apps and complicated invoicing tools
            that made it challenging to keep track of all your customers, and
            was a nightmare to manage your payments.
            <br />
            <br />
            Easily bill, manage, and automate all of your payments in one simple
            tool, so that you can focus on growing your business.
          </p>
        </div>
        <div css={{ image }}>
          <img src="src/img/before-after-tiny.png" alt="" />
        </div>
      </section>
      <section css={{ sectionCreateOnce, flexedReverse }}>
        <div css={{ text }}>
          <h2>Create once, share everywhere</h2>
          <p css={{ paragraphLarge, textLarge }}>
            Easily create reusable payment links that you can share with your
            customers through email, text message, social media, or anywhere
            your customers are.
          </p>
          <p>Yep, it's that easy!</p>
        </div>
        <div css={{ image }}>
          <img src="src/img/share-anywhere-tiny.png" alt="" />
        </div>
      </section>
      <section css={{ sectionRecurringPayments, flexed }}>
        <div css={{ text }}>
          <h2>Recurring payments</h2>
          <p css={{ paragraphLarge, textLarge }}>
            Remove the complexity of creating a subscription-based business and
            automatically charge customers on your own set schedule.
          </p>
          <p>
            Manage all of your subscriptions with our comprehensive real-time
            dashboard, so you can track how payments are flowing in your
            company.
          </p>
        </div>
        <div css={{ image }}>
          <img src="src/img/dashboard-features-tiny.png" alt="" />
        </div>
      </section>
      <section css={{ sectionSecuredByStripe, flexedReverse }}>
        <div css={{ text }}>
          <h2>Secured by Stripe</h2>
          <p css={{ paragraphLarge, textLarge }}>
            We partner with Stripe to offer the fastest and safest way for your
            customers to pay you, from anywhere in the world.
          </p>
          <p>
            Payments are sent directly to your bank account, so you can sit back
            and relax.
          </p>
        </div>
        <div css={{ image }}>
          <img css={{ cc }} src="src/img/Checkout-mobile.gif" alt="" />
          <img src="src/img/credit-cards.png" alt="" />
        </div>
      </section>
      <section css={{ sectionHowItWorks }}>
        <div css={{ wrapper }}>
          <h2 css={{ heading }}>How it works</h2>
          <div css={{ grid }}>
            <div>
              <img src="src/img/how-it-works-1.png" width="114" alt="" />
              <h6 css={{ heading2 }}>Create a payment link</h6>
              <div css={{ textBlock }}>
                Set the amount you want to charge, and whether it should be a
                one-time or recurring payment. <br />
                <br />
                All<strong> </strong>under<strong> 15 seconds</strong>, yep,
                that's fast.
              </div>
            </div>
            <div>
              <img src="src/img/how-it-works-2.png" width="114" alt="" />
              <h6 css={{ heading2 }}>Share your payment link</h6>
              <div css={{ textBlock }}>
                Add it to your website, share it through email, text-message,
                social media, or
                <strong>anywhere</strong> your customers are... even on the
                other side of the world.
                <br />‍
              </div>
            </div>
            <div>
              <img src="src/img/how-it-works-3.png" width="114" alt="" />
              <h6 css={{ heading2 }}>Get paid</h6>
              <div css={{ textBlock }}>
                Accept all major credit &amp; debit cards. Deposited directly
                into your bank account.
                <br />‍<br />
                Now you can <strong>sit back and relax</strong>, while we take
                care of the rest.
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section css={{ sectionReadyToStart }}></section>
      <footer></footer>
    </>
  );
}

export default App;
