import React, { Component, Fragment } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { ContentWithRightBar } from '../Styled';
import RightbarShared from '../../shared/Rightbar';
import DemoShared from '../../shared/Demo';
import PropsShared from '../../shared/Props';
import CodeShared from '../../shared/Code';
import { Margin, Avatar, Radio } from '../../../lib';

class AvatarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handleAvatarShape: 'circle'
    };
  }

  render() {
    const { handleAvatarShape } = this.state;
    const codeString = `import { Avatar } from '@danacita/mentari';\n<Avatar profile={{ firstName: 'Arnold', lastName: 'Sebastian' }} ${
      handleAvatarShape === 'square' ? 'square ' : ''
    }/>`;
    return (
      <Fragment>
        <ContentWithRightBar>
          <h1>Avatar</h1>
          <p>
            Avatars are used to represent a unique entity, be it a person, a group, or a project.
          </p>
          <Margin top={24}>
            <PropsShared>
              <li>
                <span>profile</span>
                <span>Apply firstname and lastname with object</span>
              </li>
              <li>
                <span>square</span>
                <span>Set the shape of Avatar</span>
              </li>
            </PropsShared>
          </Margin>
          <DemoShared>
            <h4>Demo</h4>
            <p>You can change the props via the component builder on your right</p>
            <Margin top={16}>
              <Avatar
                profile={{ firstName: 'Arnold', lastName: 'Sebastian' }}
                square={handleAvatarShape === 'square'}
              />
            </Margin>
          </DemoShared>
          <h4>Code</h4>
          <Margin top={16}>
            <CodeShared copyCode={codeString}>
              <SyntaxHighlighter language="jsx" style={atomOneDarkReasonable} showLineNumbers>
                {codeString}
              </SyntaxHighlighter>
            </CodeShared>
          </Margin>
          <RightbarShared title="Avatar">
            <Margin bottom={16}>
              <h4>Shape of Avatar</h4>
            </Margin>
            <Margin bottom={24}>
              <Radio
                name="gender"
                fieldData={[{ id: 'circle', name: 'Circle' }, { id: 'square', name: 'Square' }]}
                withRedux={false}
                block
                defaultValue={handleAvatarShape}
                onChange={e => this.setState({ handleAvatarShape: e.target.id })}
              />
            </Margin>
          </RightbarShared>
        </ContentWithRightBar>
      </Fragment>
    );
  }
}

export default AvatarPage;
