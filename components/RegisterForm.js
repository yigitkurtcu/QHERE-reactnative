import React from 'react';
import {
  View,
} from 'react-native';

import { Button, Card, CardSection, Input } from './common';

const RegisterForm = ({onSuccess}) => {
    return (
    <View>
        <Card>
            <CardSection>
              <Input label="Ad Soyad" placeholder="Name Surname" />
          </CardSection>

          <CardSection>
              <Input label="Okul No" placeholder="142804012" />
          </CardSection>

          <CardSection>
              <Input label="Bölüm" placeholder="Yazılım" />
          </CardSection>

          <CardSection>
              <Input label="Email" placeholder="user@gmail.com" />
          </CardSection>

          <CardSection>
            <Input label="Şifre" placeholder="password" />
          </CardSection>

          <CardSection>
            <Button 
                onPress={onSuccess}
            >Giriş Yap</Button>
          </CardSection>
        </Card>
    </View>

    );
  }

 export default RegisterForm;