import React from 'react';
import { ToggleSwitch } from '../UI';
import './ControlBar.scss';

const ControlBar = ({ toggleSorting, filmsCount }) => {
  return (
    <div className="control-wrapper">
      <p className="filmsCount">
        {`${filmsCount} movie${filmsCount === 1 ? '' : 's'} found`}
      </p>
      <ToggleSwitch
        toggleHandler={toggleSorting}
        title="SORT BY"
        leftLabel="YEAR"
        rightLabel="TITLE"
       />
    </div>
  )
}

export default ControlBar;