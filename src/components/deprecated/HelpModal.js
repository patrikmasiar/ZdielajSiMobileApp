import React from 'react';
import {
  Modal,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Text,
  StyleSheet,
} from 'react-native';

const HelpModal = ({onHide, isVisible}) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={isVisible}
      onRequestClose={onHide}>
      <SafeAreaView style={style.safeArea}>
        <TouchableOpacity
          onPress={onHide}
          style={{
            height: 45,
            alignItems: 'flex-end',
            justifyContent: 'center',
            paddingHorizontal: 20,
          }}>
          <Text style={{fontSize: 15, fontWeight: '600', color: '#fff'}}>
            Zatvoriť
          </Text>
        </TouchableOpacity>
        <ScrollView style={style.wrapper}>
          <Text style={style.title}>Zdieľaj si fotky v plnej kvalite</Text>
          <Text style={style.subtitle}>
            Tiež máš problém, že ti Messenger zníži kvalitu fotiek? Tu ich môžeš
            zdielať bez problémov v plnej kvalite!
          </Text>
          <Text style={style.text}>1. Vyber fotky</Text>
          <Text style={style.text}>2. Nahraj</Text>
          <Text style={style.text}>3. Zdieľaj album</Text>
          <Text style={[style.title, {marginTop: 30}]}>Náš príbeh</Text>
          <Text style={style.text}>
            Bola streda, 21. október a my sme sa ako každú stredu boli otužovať
            ráno pred prácou v jazere. Hanka, náša hlavná fotografka, spravila
            pár fotiek ešte kým sme boli vo vode aby nám kamaráti verili.
          </Text>
          <Text style={style.text}>
            Samozrejme, neskôr chcel každý z nás zdielať tieto fotky či už v
            aktivite na Strave, alebo v storieske na Instagrame. Dostupné boli v
            spoločnom chate v Slacku, ale kvalita fotky už bola značne znížená.
            Poslať si fotky medzi sebou, keď sme o miestnosť vedľa nie je
            problém v prípade, že všetci majú buď iPhone alebo Android. Ale
            nemajú... A niekto už sedel pekne doma pod perinkou na home office.
          </Text>
          <Text style={style.text}>
            A tu, v týchto zlých, závislákom a zdielačom neprajných časoch sme
            si povedali, že prídeme s riešením.
          </Text>
          <Text style={style.subtitle}>
            Čo keby spravíme nejakú appku, kde sa budú dať zdielať fotky bez
            znižovania kvality?
          </Text>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const style = StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: '#232b43'},
  wrapper: {
    padding: 20,
    color: '#fff',
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 15,
  },
  subtitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 25,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '300',
    marginBottom: 15,
  },
});

export default HelpModal;
