import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';

const Caroseal = () => {
  const slides = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFJueBLLqxA3UMA64Y5EdR0jfdgv1E8ljLvL_RKEZu2DfSvg21_qY6Q8Z3-wq7NVPrb94&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFJueBLLqxA3UMA64Y5EdR0jfdgv1E8ljLvL_RKEZu2DfSvg21_qY6Q8Z3-wq7NVPrb94&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFJueBLLqxA3UMA64Y5EdR0jfdgv1E8ljLvL_RKEZu2DfSvg21_qY6Q8Z3-wq7NVPrb94&usqp=CAU',
  ];
  return (
    <View style={styles.Caroseal}>
      <SliderBox
        images={slides}
        dotColor="lightgray"
        inactiveDotColor="gray"
        ImageComponentStyle={{borderRadius: 15, width: '93%', marginTop: 15}}
        autoplay
        cicleLoop
      />
    </View>
  );
};

export default Caroseal;

const styles = StyleSheet.create({});
