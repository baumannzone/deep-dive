import { h, render, cloneElement } from 'preact';
import Slide from '../../components/Slide';
import Columns from '../../components/Columns';
import Image from '../../components/Image';
import Subtitle from '../../components/Subtitle';
import List from '../../components/List';
import Sam from '../../../images/sam2.jpg';

const About = () => {
    return (
        <Slide>
            <Columns>
                <Image
                    src={Sam}
                    style={{
                        width: window.innerWidth / 2,
                        height: window.innerHeight,
                    }}
                    color="#5FB3B3"
                />
                <div>
                    <Subtitle>Sam Bellen</Subtitle>
                    <List>
                        <li>Developer Evangelist</li>
                        <li>Auth0</li>
                        <li>Google Developer Expert</li>
                        <li>Fronteers</li>
                    </List>
                </div>
            </Columns>
        </Slide>
    );
};

export default About;
