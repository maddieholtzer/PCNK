import React from 'react';
import { PickerIOS, View, Text } from 'react-native';

const Picker = () => {
  const { containerStyle, textStyle, pickerStyle, fieldTextStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={textStyle}>Country Code</Text>
      <PickerIOS selectedValue="United States" style={pickerStyle}
                 itemStyle={fieldTextStyle}/>
    </View>
  );
};

const styles = {
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    paddingTop: 20,
    paddingBottom: 20,
  },

  textStyle: {
    fontWeight: '700',
    fontSize: 16,
    flex: 1,
    paddingLeft: 5,
    
  },

  pickerStyle: {
    flex: 2,
    height: 30,
  },

  fieldTextStyle: {
    color: '#ccc',
    fontSize: 16,
  },
};

export default Picker;
