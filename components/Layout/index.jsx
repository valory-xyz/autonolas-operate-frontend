import { useRouter } from 'next/router';
import {
  Layout,
} from 'antd';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { COLOR, MEDIA_QUERY } from '@autonolas/frontend-library';
import Link from 'next/link';
import { Logo } from 'components/Branding/Logo';
import Login from './Login';
import Footer from './Footer';
import { CustomLayout } from './styles';

const { Header, Content } = Layout;

const StyledHeader = styled(Header)`
  border-bottom: 1px solid ${COLOR.BORDER_GREY};
  padding: 20px !important;
`;

const Banner = styled.div`
  background-color: ${COLOR.BLACK};
  color: ${COLOR.WHITE};
  padding: 15px;
  text-align: center;
  margin-top: 64px;
  margin-bottom: 24px;
  ${MEDIA_QUERY.tablet} {
    margin-top: 0;
  }
`;

const NavigationBar = ({ children }) => {
  const router = useRouter();

  return (
    <CustomLayout pathname={router.pathname}>
      <StyledHeader>
        <Link href="/">
          <div className="column-1">
            <Logo />
          </div>
        </Link>

        <div className="column-2">
          <Login />
        </div>
      </StyledHeader>
      <Banner>This product is in alpha</Banner>

      <Content className="site-layout">
        <div className="site-layout-background">{children}</div>
      </Content>

      <Footer />
    </CustomLayout>
  );
};

NavigationBar.propTypes = {
  children: PropTypes.element,
};

NavigationBar.defaultProps = {
  children: null,
};

export default NavigationBar;
