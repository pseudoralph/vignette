import React from 'react';
import PropTypes from 'prop-types';
import { parseHTML } from './parseHTML';
import { STYLES } from './styles';

function Main(props) {
  const { title, body } = props.content[0].content;

  return (
    <div>
      <h3>{title}</h3>
      <div dangerouslySetInnerHTML={parseHTML(body)} style={STYLES.main.body} />
    </div>
  );
}

Main.propTypes = {
  content: PropTypes.array.isRequired
};

export default Main;
