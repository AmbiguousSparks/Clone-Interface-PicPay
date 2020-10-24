import React, { useState } from 'react';
import { Switch } from 'react-native';
import { Feather, MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import creditCard from '../../images/credit-card.png';

import {
    Wrapper,
    Header,
    HeaderContainer,
    Title,
    BalanceContainer,
    Bold,
    Value,
    EyeButton,
    Info,
    Actions,
    Action,
    ActionLabel,
    UseBalanceTitle,
    UseBalance,
    PaymentMethodsTitle,
    PaymentMethods,
    Card,
    CardDetails,
    CardTitle,
    CardInfo,
    Img,
    CardBody,
    CardFooter,
    FooterLabel,
    UseTicketButton,
    UseTicketLabel,
    UseTicketContainer
} from './styles';

export default function Wallet() {
    const [isVisible, setIsVisible] = useState(true);
    const [useBalance, setUseBalance] = useState(true);

    return (
        <Wrapper>
            <Header
                colors={
                    useBalance
                    ? ['#52E78C', '#1AB563']
                    : ['#D3D3D3', '#868686']
                }
            >
                <HeaderContainer>
                    <Title>Saldo PicPay</Title>
                    <BalanceContainer>
                        <Value>
                            R$ <Bold>{isVisible ? '0,00' : '----'}</Bold>
                        </Value>
                        <EyeButton onPress={() => setIsVisible((prevState) => !prevState)}>
                            <Feather name={isVisible ? 'eye' : 'eye-off'} size={28} color="#fff" />
                        </EyeButton>
                    </BalanceContainer>
                    <Info>
                        Seu saldo está rendendo 100% do CDI.
                    </Info>
                    <Actions>
                        <Action>
                            <MaterialCommunityIcons name="cash" size={30} color="#fff" />
                            <ActionLabel>Adicionar</ActionLabel>
                        </Action>
                        <Action>
                            <FontAwesome name="bank" size={20} color="#fff" />
                            <ActionLabel>Retirar</ActionLabel>
                        </Action>
                    </Actions>
                </HeaderContainer>
            </Header>
            <UseBalance>
                <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>
                <Switch
                    value={useBalance}
                    onValueChange={() => setUseBalance((prevState) => !prevState)}
                />
            </UseBalance>
            <PaymentMethods>
                <PaymentMethodsTitle>Formas de pagamento</PaymentMethodsTitle>
                <Card>
                    <CardBody>
                        <CardDetails>
                            <CardTitle>Cadastre seu cartão de crédito</CardTitle>
                            <CardInfo>
                                Cadastre seu cartão de crédito para poder fazer pagamentos mesmo quando não tiver saldo no seu PicPay
                        </CardInfo>
                        </CardDetails>
                        <Img source={creditCard} resizeMode="contain" />
                    </CardBody>
                    <CardFooter>
                        <AntDesign name="pluscircleo" size={30} color="#0DB060" />
                        <FooterLabel>Adicionar cartão de crédito</FooterLabel>
                    </CardFooter>
                </Card>
                <UseTicketContainer>
                    <UseTicketButton>
                        <MaterialCommunityIcons name="ticket-outline" size={20} color="#0DB060" />
                        <UseTicketLabel>User código promocional</UseTicketLabel>
                    </UseTicketButton>
                </UseTicketContainer>
            </PaymentMethods>
        </Wrapper>
    )
}
