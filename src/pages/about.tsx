import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

const About: React.FunctionComponent = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header css={[outer, SiteHeader]}>
        <div css={inner}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull, NoImage]}>
          <PostFullHeader>
            <PostFullTitle>About</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <p>
                We are building an underwater virtual world that shares environmental insights that are often obscure.
                We are on a mission to create open access oceans and awareness about the environment through art and virtual reality.
                Our goal is to share the information to people who cannot access the experience of going to see the condition of the planet.
             </p>
             
              <p> We are inspired by the art of underwater sculpturing and we seek to recreate those forms in Virtual Reality.
               This work is inspired by the work of Jason deCaires Taylor <br></br>
Jason deCaires Taylor is a sculptor, environmentalist and professional underwater photographer.

The inspiration spwans from the artist who is doing the sculptures and also submerging them in various places in the ocean. A snorkeling tour through the marine area allows travellers to get a fish’s-eye view of the works. In a virtual world we recreate this scene in humble efforts to match the perfect caustics of natural light
    
               </p>
   
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
