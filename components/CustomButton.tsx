import React from "react";
import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  ViewStyle,
  StyleProp,
} from "react-native";

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
  isLoading?: boolean;
  additionalButtonClassName?: StyleProp<ViewStyle>;
  additionalButtonTextClassName?: StyleProp<ViewStyle>;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  ...rest
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={rest?.isLoading || false}
      style={[
        {
          backgroundColor: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
        },
        rest?.additionalButtonClassName,
      ]}
    >
      <Text
        style={[
          { fontSize: 16, fontWeight: "500", color: "white" },
          rest?.additionalButtonTextClassName,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
