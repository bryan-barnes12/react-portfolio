import React from 'react';
import bioPhoto from './images/bio-photo.jpeg'

// const styles = {
//   bioImage: {
//     width: '100%',
//     objectFit: 'contain',
//     borderRadius: '10px'
//   }
// }

export default function Bio() {
  return (
    <section id="bio" className="row">
      <figure id="bio-image" className="column col-sm-7">
        <img
          id="bio-photo"
          src={bioPhoto}
          alt="Man standing by tree."
          // style={styles.bioImage}
        />
      </figure>
      <figure id="bio-info" className="column col-sm-5">
        <h2>bio</h2>
        <p>
          The most important part of designing beautiful things is always
          working from your inspiration. As a craftsman I'm devoted to
          creating thoughtful, functional designs that are as easy to use as
          they are to admire.
        </p>
      </figure>
    </section>
);
}
