import {
  Footer as CommonFooter,
} from '@autonolas/frontend-library';
import Link from 'next/link';
import { Typography } from 'antd';

import { OPERATOR_NAME } from 'util/constants';
import { PoweredByOlas } from 'components/Branding/PoweredByOlas';
import { FooterContainer } from './styles';

const FooterContent = () => (
  <div style={{ textAlign: 'center' }}>
    <Typography.Text>
      ©
      {' '}
      {OPERATOR_NAME}
      {' '}
      {new Date().getFullYear()}
      {' '}
      ·
      {' '}
      <Link href="/disclaimer">Disclaimer</Link>
    </Typography.Text>
    <br />
    <br />
    <PoweredByOlas />
  </div>
);

const Footer = () => (
  <FooterContainer>
    <CommonFooter className="custom-footer" centerContent={<FooterContent />} />
  </FooterContainer>
);

export default Footer;
