import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

type Props = {
  children?: React.ReactNode,
  onChangeEngine: Function,
  defaultEngine?: string
}

const EngineToggle = (props: Props) => {
  const [alignment, setAlignment] = React.useState(props.defaultEngine || 'deepl');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
    props.onChangeEngine(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="deepl">Deepl</ToggleButton>
      <ToggleButton value="google">Google</ToggleButton>
    </ToggleButtonGroup>
  );

}
export default EngineToggle