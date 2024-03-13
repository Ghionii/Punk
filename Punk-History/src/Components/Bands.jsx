import React from 'react';

const Bands = () => {
  return (
    <section>
      <div>
        <img
          src='https://www.rollingstone.com/wp-content/uploads/2018/06/sex-pistols-never-mind-the-bollocks-track-by-track-e7224f50-77f0-496e-963e-8ae7ee48daf9.jpg?w=1581&h=1054&crop=1'
          width={300}
        />
        <h3>Sex Pistols</h3>
        <ul>
          <li>Origin: London, England</li>
          <li>Active: 1975–1978, 1996, 2002, 2007</li>
          <li>
            Notable Albums: "Never Mind the Bollocks, Here's the Sex Pistols"
            (1977)
          </li>
          <li>
            Infamous for their confrontational lyrics and anti-establishment
            attitude, the Sex Pistols were central figures in the punk movement
            in the UK during the late 1970s.
          </li>
        </ul>
      </div>
      <div>
        <img
          src='https://guitar.com/wp-content/uploads/2021/12/The-Clash-Credit-Michael-Putland-Getty-ImagesHERO@2560x1625-800x508.jpg'
          width={300}
        />{' '}
        <h3>The Clash</h3>
        <ul>
          <li>Origin: London, England</li>
          <li>Active: 1976–1986</li>
          <li>
            Notable Albums: "The Clash" (1977), "London Calling" (1979), "Combat
            Rock" (1982)
          </li>
          <li>
            Known for blending punk with reggae, ska, and rockabilly, The Clash
            explored political and social themes in their music, becoming one of
            the most influential punk bands.
          </li>
        </ul>
      </div>

      <div>
        <img
          src='https://cdn.mos.cms.futurecdn.net/2oJsh75kFyRXEnr7xh6ZX8-970-80.jpg.webp'
          width={300}
        />
        <h3>Refused</h3>
        <ul>
          <li>Origin: Umeå, Sweden</li>
          <li>Active: 1991–1998, 2012–present</li>
          <li>
            Notable Albums: "The Shape of Punk to Come" (1998), "Freedom" (2015)
          </li>
          <li>
            Refused is known for their innovative blend of punk, hardcore, and
            electronic elements, as well as their politically charged lyrics.
          </li>
        </ul>
      </div>

      <div>
        <img
          src='https://www.eastbaytimes.com/wp-content/uploads/2016/08/20080215_081542_hives-1.jpg?w=500'
          width={300}
        />
        <h3>The Hives</h3>
        <ul>
          <li>Origin: Fagersta, Sweden</li>
          <li>Active: 1993–present</li>
          <li>
            Notable Albums: "Veni Vidi Vicious" (2000), "Tyrannosaurus Hives"
            (2004)
          </li>
          <li>
            The Hives are known for their energetic live performances, catchy
            melodies, and garage punk sound.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Bands;
