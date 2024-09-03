import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
  isLoading?: boolean;
  additionalButtonClassName?: string;
  additionalButtonTextClassName?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  ...rest
}) => {
  return (
    <TouchableOpacity
      {...rest}
      onPress={onPress}
      disabled={rest?.isLoading || false}
      className={`p-2 bg-green-800 flex items-center justify-center rounded-xl ${rest?.additionalButtonClassName}`}
    >
      <Text
        className={`p-1 text-base font-medium text-white ${rest?.additionalButtonTextClassName}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
