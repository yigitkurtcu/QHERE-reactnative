import React from 'react';
import { Text, View, Modal} from 'react-native';
import { CardSection } from './common/CardSection';
import { Button } from './common/Button';

export default Confirm = ({ children, visible, accept, decline }) => {
    const { cardSectionStyle, textStyle, containerStyle } = styles;
    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={() => {}}
        >
            <View style={containerStyle}>
                <CardSection style={cardSectionStyle}>
                    <Text style={textStyle}>{children}</Text>
                </CardSection>

                <CardSection>
                    <Button color={'#000'} onPress={accept}>Evet</Button>
                    <Button color={'#000'} onPress={decline}>Hayır</Button>
                </CardSection>
            </View>
            
        </Modal>
    );
};

const styles = {
    cardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 20,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
}

