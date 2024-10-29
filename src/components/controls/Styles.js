import React from 'react';
import { useInfoValue } from '../contexts/InfoContext';
import { ColorPicker } from '../common/ColorPicker';
import classNames from 'classnames';

export const Styles = () => {
  const { updateAccentColor, updateSocialColor, data } = useInfoValue();

  return (
    <form className={classNames("animate-flipdown", "ease-out", "duration-200")}>
      <p>Use the color pickers to match your branding</p>
      <ColorPicker
        title="Accent Color"
        onChange={updateAccentColor}
        currentColor={data.accentColor}
      />
      <ColorPicker
        title="Social Icons Color"
        onChange={updateSocialColor}
        currentColor={data.socialColor}
      />
    </form>
  );
};
