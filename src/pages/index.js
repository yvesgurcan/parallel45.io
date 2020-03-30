import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
    <Layout>
        <SEO title="Web Studio" />
        <h1>Digital solutions</h1>
        <p>We work with you to make your digital projects a reality.</p>
        <p>
            Thanks to our experience and expertise, we provide a solution
            tailored to your project needs.
        </p>
        <p>
            You can count on us to involve you every step of the way, so that
            the result is exactly what you expect. No surprises!
        </p>
        <br />
        <br />
        <h1>About</h1>
        <p>
            <a href="https://www.yvesgurcan.com/" target="_blank" noopener>
                Yves Gurcan
            </a>{' '}
            is the founder of{' '}
            <a
                href="https:/en.wikipedia.org/wiki/45th_parallel_north"
                target="_blank"
                noopener
            >
                Parallel45
            </a>
            . Born in France, he currently lives in Portland, Oregon where he
            settled in 2014.
        </p>
        <p>
            Have a question? Send us an email at{' '}
            <a href="mailto:yves@parallel45.io" target="_blank" noopener>
                yves@parallel45.io
            </a>
            . Want to chat? Yves is on{' '}
            <a
                href="https://www.linkedin.com/in/yvesgurcan/"
                target="_blank"
                noopener
            >
                LinkedIn
            </a>
            .
        </p>
    </Layout>
);

export default IndexPage;
