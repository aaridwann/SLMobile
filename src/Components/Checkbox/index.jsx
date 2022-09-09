import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const CheckBoxComponent = ({data,value}) => {
  return (
    <BouncyCheckbox
      style={{marginHorizontal: 10, marginVertical:5}}
      size={25}
      fillColor="#B7B7A4"
      unfillColor="#FFFFFF"
      text={data}
      iconStyle={{borderColor: 'red'}}
      innerIconStyle={{borderWidth: 2}}
      textStyle={{fontFamily: 'JosefinSans-Regular'}}
      onPress={e => value(e, data)}
    />
  );
};

export default CheckBoxComponent;
