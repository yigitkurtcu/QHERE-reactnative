import React from 'react';
import {
  View,
} from 'react-native';

import { Button, Card, CardSection, Input } from './common';

const LoginForm = ({onSuccess}) => {
    return (
    <View>
        <Card>
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

export default LoginForm;