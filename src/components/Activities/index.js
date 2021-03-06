import React from 'react';

import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import {
    Container,
    Header,
    Title,
    Card,
    CardHeader,
    Bold,
    Avatar,
    Description,
    CardBody,
    UserName,
    CardFooter,
    Details,
    Value,
    Divider,
    Date,
    Actions,
    Option,
    OptionLabel
}
    from './styles';
import avatar from '../../images/avatar.png';

export default function Acitivies() {
    return (
        <Container>
            <Header>
                <Title>Atividades</Title>
            </Header>
            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>Matheus Silva</Bold>
                    </Description>
                </CardHeader>
                <CardBody>
                    <UserName>Daniel</UserName>
                </CardBody>
                <CardFooter>
                    <Details>
                        <Value>R$ 18,00</Value>
                        <Divider />
                        <Feather name="lock" color="#fff" size={14} />
                        <Date>há 2 anos</Date>
                    </Details>
                    <Actions>
                        <Option>
                            <MaterialCommunityIcons name="comment-outline" size={14} color="#fff" />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                        <Option>
                            <AntDesign name="hearto" size={14} color="#fff" />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>
            </Card>
        </Container>
    );
}