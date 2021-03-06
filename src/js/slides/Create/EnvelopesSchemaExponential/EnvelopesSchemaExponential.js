import { h, render, cloneElement } from 'preact';
import Slide from '../../../components/Slide';
import Subtitle from '../../../components/Subtitle';
import Icon from '../../../components/Icon';
import Schema from '../../../../images/envelope-schema-exponential.svg';

const EnvelopesSchemaExponential = () => {
    return (
        <Slide>
            <Subtitle>Exponential envelopes</Subtitle>
            <Icon src={Schema} style={{ width: '50vw' }} />
        </Slide>
    );
};

export default EnvelopesSchemaExponential;
