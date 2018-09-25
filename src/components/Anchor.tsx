import * as React from 'react';
import { Linking, Text, TextProps, TouchableOpacity } from 'react-native';
import isObject from '../helpers/isObject';

export interface AnchorProps extends TextProps {
  to?: string | { uri: string; };
}

/**
 * Anchor component is a textual component which opens `to` prop on press.
 * @param props - Anchor's props.
 */
const Anchor: React.SFC<AnchorProps> = ({ to, children, ...props }) => {
  const url = isObject(to) ? to.uri : to;

  const onPress = async (): Promise<void> => {
    const isAllowedToOpen = await Linking.canOpenURL(url);
    if (isAllowedToOpen)
      return Linking.openURL(url);
  };

  return (
    <TouchableOpacity onPress={ onPress }>
      <Text { ...props }>{ children }</Text>
    </TouchableOpacity>
  );
};

export default Anchor;
