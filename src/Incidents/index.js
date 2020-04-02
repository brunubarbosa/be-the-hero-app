import React from 'react';
import { Image, Text, View, TouchableOpacity, FlatList } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Feather} from '@expo/vector-icons';
import logoImg from '../assets/logo.png';
import styles from './styles'
export default function Incidents() {
  const navigation = useNavigation();

  function navigationToDetail() {
    navigation.navigate('Detail');
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>0 casos</Text>
        </Text>
      </View>
      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia
      </Text>
      <FlatList data={[1,2,3,4,5,6,7,8]}
      scrollToOverflowEnabled={true}
      style={styles.incidentsList}
      keyExtractor={incident => String(incident)}
      showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View style={styles.incident}>
          <Text style={styles.incidentProperty}>ONG:</Text>
          <Text style={styles.incidentValue}>APAD</Text>
          <Text style={styles.incidentProperty}>caso:</Text>
          <Text style={styles.incidentValue}>atropelado</Text>
          <Text style={styles.incidentProperty}>valor:</Text>
          <Text style={styles.incidentValue}>120</Text>
          <TouchableOpacity style={styles.detailsButton} onPress={navigationToDetail}>
            <Text  style={styles.detailsButtonText}>
              Ver mais detalhes
            </Text>
            <Feather name="arrow-right" size={16} color="#e02041" />
          </TouchableOpacity>
        </View>
        )}
      />
    </View>
  )
}