import React from 'react';
import { ImLinkedin } from 'react-icons/im';
import { ImTwitter } from 'react-icons/im';
import { BsGithub } from 'react-icons/bs';

const HeaderSocial = () => {
    return (
        <div className='header__social'>
            <a href="https://www.linkedin.com/in/cl%C3%A9ment-lidar-48081192/" target="_blank"><ImLinkedin /></a>
            <a href="https://github.com/xiaoduh" target="_blank"><BsGithub /></a>
            <a href="https://twitter.com/clement_ldr" target="_blank"><ImTwitter /></a>
        </div>
    );
};

export default HeaderSocial;