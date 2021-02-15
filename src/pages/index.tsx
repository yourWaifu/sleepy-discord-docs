import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import LazyLoad from 'react-lazyload';

const features = [
  {
    title: 'Discord with C++',
    description: (
      <>
        Use the Discord API with software already written in C++.
      </>
    ),
  },
  {
    title: 'Modular',
    description: (
      <>
        Can be optionality customized by using different objects for WebScokets,
        HTTPS, I/O, etc.
      </>
    ),
  },
  {
    title: 'Portable',
    description: (
      <>
        As long as your platform or environment can use the internet and run
        C++11 code, then Sleepy Discord can run on it.
      </>
    ),
  },
];

function Feature({imageUrl = "", title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      description="C++ library for Discord.">
      <div className="vertical-flex">
        <header className={clsx(styles.heroBanner, "front-header")}>
          <div className="back-header">
            <img
              className="header-image"
              src='img/360-degree_Panorama_of_the_Southern_Sky_edit1high.jpg'
            ></img>
          </div>
          <div className="container">
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className={clsx(
                  'button button--outline button--secondary button--lg',
                  styles.getStarted,
                )}
                to={useBaseUrl('docs/')}>
                Get Started
              </Link>
            </div>
          </div>
        </header>
        <main className="front-page-content">
          {features && features.length > 0 && (
            <section className={styles.features}>
              <div className="container">
                <div className="row">
                  {features.map((props, idx) => (
                    <Feature key={idx} {...props} />
                  ))}
                </div>
              </div>
            </section>
          )}
        </main>
      </div>
    </Layout>
  );
}



export default Home;
