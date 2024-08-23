import React from 'react';
import { Divider, Flex, Tag } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';

const preventDefault = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    console.log('Clicked! But prevent default.');
};
const App: React.FC = () => (
  <>
      <Flex gap="4px 0" wrap>
          <Tag bordered={false}>Tag 1</Tag>
          <Tag bordered={false}>Tag 2</Tag>
          <Tag bordered={false} closable>
              Tag 3
          </Tag>
          <Tag bordered={false} closable>
              Tag 4
          </Tag>
      </Flex>
      <Divider />
      <Flex gap="4px 0" wrap>
          <Tag bordered={false} color="processing">
              processing
          </Tag>
          <Tag bordered={false} color="success">
              success
          </Tag>
          <Tag bordered={false} color="error">
              error
          </Tag>
          <Tag bordered={false} color="warning">
              warning
          </Tag>
          <Tag bordered={false} color="magenta">
              magenta
          </Tag>
          <Tag bordered={false} color="red">
              red
          </Tag>
          <Tag bordered={false} color="volcano">
              volcano
          </Tag>
          <Tag bordered={false} color="orange">
              orange
          </Tag>
          <Tag bordered={false} color="gold">
              gold
          </Tag>
          <Tag bordered={false} color="lime">
              lime
          </Tag>
          <Tag bordered={false} color="green">
              green
          </Tag>
          <Tag bordered={false} color="cyan">
              cyan
          </Tag>
          <Tag bordered={false} color="blue">
              blue
          </Tag>
          <Tag bordered={false} color="geekblue">
              geekblue
          </Tag>
          <Tag bordered={false} color="purple">
              purple
          </Tag>

          <Tag>Tag 1</Tag>
          <Tag>
              <a href="https://github.com/ant-design/ant-design/issues/1862">Link</a>
          </Tag>
          <Tag closeIcon onClose={preventDefault}>
              Prevent Default
          </Tag>
          <Tag closeIcon={<CloseCircleOutlined />} onClose={console.log}>
              Tag 2
          </Tag>
      </Flex>
  </>
);

export default App;
