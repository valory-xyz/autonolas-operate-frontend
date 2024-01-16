import styled from 'styled-components';
import React from 'react';
import {
  Row, Col, Card, Button, Typography,
} from 'antd';
import PropTypes from 'prop-types';
import {
  PlayCircleOutlined, GithubOutlined, BulbFilled, RobotOutlined,
} from '@ant-design/icons';
import Image from 'next/image';

import { COLOR } from '@autonolas/frontend-library';
import agents from './data.json';

const StyledCard = styled(Card)`
  border-color: ${COLOR.BORDER_GREY};
  width: 100%; /* Make the card fill its container */
  .ant-card-body {
    padding: 0; /* Apply padding 0 to card body */
  }
`;

const StyledImage = styled(Image)`
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-right: 1px solid ${COLOR.BORDER_GREY};
  aspect-ratio: 1 / 1;
`;

const AgentCard = ({ agent }) => {
  const {
    id, name, description, imageFilename, urls, comingSoon,
  } = agent;

  const { run, learnMore, gpt } = urls;

  return (
    <Col md={24} lg={12} key={id} style={{ width: '100%' }}>
      <StyledCard>
        <Row>
          <Col span={7} className="p-0">
            <StyledImage alt={name} src={`/images/${imageFilename}`} layout="fill" objectFit="cover" />
          </Col>
          <Col span={17} className="p-16">
            <Typography.Title className="mt-0" level={4}>{name}</Typography.Title>
            <div className="mb-12">
              <Typography.Paragraph ellipsis={{ rows: 2, expandable: true }}>
                {description}
              </Typography.Paragraph>
            </div>
            {comingSoon ? (
              <div style={{ height: '92px' }}>
                <Button disabled>Coming soon</Button>
              </div>
            ) : (
              <>
                {run && (
                  <Button type="primary" icon={<PlayCircleOutlined />} href={run} target="_blank" className="mb-8">
                    Run Agent
                  </Button>
                )}
                <br />
                {learnMore && (
                  <Button type="default" icon={<GithubOutlined />} href={learnMore} target="_blank" style={{ marginRight: '8px' }}>
                    Learn More
                  </Button>
                )}
                {gpt && (
                  <Button type="default" icon={<RobotOutlined />} href={gpt} target="_blank">
                    GPT Guide
                  </Button>
                )}
              </>
            )}
          </Col>
        </Row>
      </StyledCard>
    </Col>
  );
};

AgentCard.propTypes = {
  agent: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageFilename: PropTypes.string.isRequired,
    urls: PropTypes.shape({
      run: PropTypes.string,
      learnMore: PropTypes.string,
      gpt: PropTypes.string,
    }),
    comingSoon: PropTypes.bool,
  }),
};

AgentCard.defaultProps = {
  agent: {
    urls: {
      run: '',
      learnMore: '',
      gpt: '',
    },
    comingSoon: false,
  },
};

export const Agents = () => (
  <Row gutter={[24, 24]} className="mb-128">
    {agents.map((agent) => (
      <AgentCard
        key={agent.id}
        agent={agent}
      />
    ))}
    {/* TODO DRY with AgentCard code */}
    <Col md={24} lg={12} style={{ width: '100%' }}>
      <StyledCard bodyStyle={{ padding: 0 }}>
        <Row>
          <Col span={7} className="p-0">
            <StyledImage alt="baby robot surfing a wave, having an idea" src="/images/add-your-own.png" layout="fill" objectFit="cover" />
          </Col>
          <Col span={17} className="p-16">
            <Typography.Title className="mt-0" level={4}>
              Want people to run
              {' '}
              <b>your</b>
              {' '}
              agent?
            </Typography.Title>
            <Typography.Paragraph>
              Simply submit a pull request.
            </Typography.Paragraph>
            <Button
              type="default"
              icon={<BulbFilled />}
              href="https://github.com/valory-xyz/autonolas-operate-frontend/blob/main/components/Agents/agents.json"
              target="_blank"
              rel="noopener noreferrer"
            >
              Add your own
            </Button>
          </Col>
        </Row>
      </StyledCard>
    </Col>
  </Row>
);
