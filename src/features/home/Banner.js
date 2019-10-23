import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Image } from 'semantic-ui-react';

const Banner = () => (
    <Parallax className="Banner" y={[-50, 50]} tagOuter="figure">
        <Image src="https://images.unsplash.com/flagged/photo-1567934150921-7632371abb32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />
    </Parallax>
)

export default Banner;
