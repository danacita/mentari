import styled from 'styled-components';
import { MaxWidth } from '../../../lib';

const RightbarWrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 320px;
  top: 0;
  right: 0;
  padding: 24px;
  border-left: 1px solid #e1e1e1;
  ${MaxWidth.md`
    display: none;
  `}
`;

// eslint-disable-next-line import/prefer-default-export
export { RightbarWrapper };
