// import MenuScreen from './MenuScreen';
import React from 'react';
import 'react-native-gesture-handler';

export const ProfileScreen=({navigation}) => <Screen navigation={navigation} name="Profile" />
export const CommentScreen=({navigation}) => <Screen navigation={navigation} name="Comment" />
export const ActivityScreen=({navigation}) => <Screen navigation={navigation} name="Activity" />
export const ReportScreen=({navigation}) => <Screen navigation={navigation} name="Report" />
export const SignoutScreen=({navigation}) => <Screen navigation={navigation} name="Signout" />
