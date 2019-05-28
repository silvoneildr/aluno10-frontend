import React from 'react';

import StyleButton from './styles';

const Button = React.memo(props => <StyleButton {...props} />);

export default Button;
