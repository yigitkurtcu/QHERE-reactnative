import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';


export default class StudentHomeScreen extends React.Component {
    state = { hasCameraPermission: null };


    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({hasCameraPermission: status === 'granted'});
    }
    
    render() {
        const { hasCameraPermission } = this.state;

        if (hasCameraPermission === null) {
            return <Text>Kamera izni gerekiyor</Text>;
        }
        if (hasCameraPermission === false) {
            return <Text>Kameraya erişim izni yok</Text>;
        }
        return (
            <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={this.props.onScanned}
                style={StyleSheet.absoluteFill}
            />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
