var React = require('react');
var PropTypes = require('prop-types');

function PlayerPreview (props) {
  console.log(props, 'pp');
  return (
    <div>
      <div className="column">
        <img src={props.avatar} alt={'Avatar for ' + props.username} className="avatar"/>
        <h2 className="username">@{props.username}</h2>
      </div>
      {props.children}
    </div>
  )
}

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}

module.exports = PlayerPreview;
