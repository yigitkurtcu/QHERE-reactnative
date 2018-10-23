import React from 'react';
import {
    Text,
  View,
  Picker
} from 'react-native';
import { Register } from '../helpers/http';

import { Button, Card, CardSection, Input } from './common';

class RegisterForm extends React.Component {
    state = { fullName: '', schoolNumber: '', gender: 'Erkek', email: '', password: ''}
    doRegister() {
        var user = {
            fullName: this.state.fullName,
            schoolNumber: this.state.schoolNumber,
            gender: this.state.gender,
            email: this.state.email,
            password: this.state.password
        };
        Register(user)
        .then(res => {
            if(this.props.userType == 'student')
              this.props.navigation.navigate('Student')
            else
              this.props.navigation.navigate('Teacher')
        }).catch(err => {
            alert(err.message)
        })
    }

    render () {
        return (
            <View>
                <Card>
                    <CardSection>
                    <Input 
                        label="Ad Soyad" 
                        placeholder="Name Surname" 
                        onChangeText={(fullName, itemIndex) => this.setState({ fullName })}
                        value={this.state.fullName}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label="Okul No" 
                        placeholder="142804012"
                        value= {this.state.schoolNumber}
                        onChangeText={schoolNumber => this.setState({ schoolNumber })} 
                    />
                </CardSection>

                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerTextStyle}>Cinsiyet</Text>
                    <Picker
                        selectedValue={this.state.gender}
                        onValueChange={value => this.setState({gender: value})}
                    >
                        <Picker.Item label="Erkek" value="Erkek" />
                        <Picker.Item label="Kadın" value="Kadın" />
                    </Picker>
                </CardSection>

                <CardSection>
                    <Input 
                        label="Email" 
                        placeholder="user@gmail.com" 
                        value= {this.state.email}
                        onChangeText={email => this.setState({ email })} 
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label="Şifre" 
                        placeholder="password"
                        secureTextEntry
                        value= {this.state.password}
                        onChangeText={password => this.setState({ password })} 
                    />
                </CardSection>

                <CardSection>
                    <Button 
                        onPress={() => {this.doRegister()}}
                    >Giriş Yap</Button>
                </CardSection>
                </Card>
            </View>

        );
    }
  }

  const styles = {
    pickerTextStyle: {
        fontSize: 20,
        paddingLeft: 22,
    }
}

 export default RegisterForm;