import React from 'react';

function useToggle(initialValue = false) {
 const [value, setValue] = React.useState(initialValue);
 const toggle = React.useCallback(() => {
  setValue(v => !v);
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [value]);
 return [value, toggle];
}

export default useToggle;