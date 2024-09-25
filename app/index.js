import React,{useState } from 'react';
import {View, Text, StyleSheet, FlatList, Image, lightgray, Pressable} from 'react-native';
import { Stack } from 'expo-router';
import { NavigationContainer,StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Avatar, Badge, Searchbar, Divider, Button, Card, IconButton,List, MD3Colors ,Appbar, TextInput } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import datas from '../assets/datas.json';
import dataservices from '../assets/dataservices.json';
import datacompte from '../assets/datacompte.json';
import { TouchableOpacity } from 'react-native';
import { TimePickerModal, enGB, registerTranslation, fr,DatePickerModal, DatePickerInput} from 'react-native-paper-dates';
import { SafeAreaProvider } from "react-native-safe-area-context";
//import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
//import { Icon } from 'react-native-elements';
//import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

/*
function monBadge(){
  return(
    <View>
      <Badge>3</Badge>
    </View>
  );
}*/
/*<TextInput placeholder='Recherche sur MasterDjossi' style={style.input}/> */
//<Image source={require('../assets/images/react-logo_.png')} style={{height:25, width:25}}/>
//<Ionicons name="person-outline" color={lightgray} size={40} />















function Banniere(){
  return(
    <View>
    <FlatList 
      data={datas}
      horizontal
      
      renderItem={({item}) => 
      <Image source={{
        uri: item.cover_image_url,}} 
        style={{height:150, width:250, borderRadius:10, marginHorizontal:5}}/>
      }
    />    
    </View>
    
  );
}

function ListButtonServices(){
  return(
    <View>
      <FlatList
        data={dataservices}
        horizontal
        renderItem={({item})=>
          <Button mode="elevated" type="elevated" style={{marginHorizontal:2, marginBottom:10}} buttonColor='coral' textColor='white' height='15' fontSize='12'>
            {item.title}
          </Button>
          }
      />
    </View>
  );
}

function EnteteProfil(){
  const [searchQuery, setSearchQuery] = React.useState('');
    return (
        <View>
          <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            
            <Avatar.Image size={60} source={require('../assets/images/avatar.png')} />
            <Text style={{ fontSize:20, fontWeight:'bold', color:'coral'}}>MasterDjossi</Text>
            <Ionicons name="notifications" color={lightgray} size={20}>
              
            </Ionicons>
          </View>
        </View>
    );
}

function EnteteSearch(){
  const [searchQuery, setSearchQuery] = React.useState('');
    return (
        <View>         
          <Searchbar 
            placeholder="Recherche"
            onChangeText={setSearchQuery}
            value={searchQuery}
            style={{height:50, color:'green', marginTop:10}}
          />
        </View>
    );
}















/********************* ACCUEIL ***************************/

function AccueilPage(){
    return(
      <ScrollView  style={{padding:5}}>
        <EnteteProfil />
        <EnteteSearch />
        <Divider style={{margin:5}} />
        <Banniere />
        <Divider style={{margin:5}} />
        <ListButtonServices />
        <Text style={{marginTop:5}}>Bienvenu sur l'application MasterDjossi</Text>
        
        <View>
          {Array.from({ length: 5 }).map((_, index) => (
            <Card title="Loren Ipsum 1" style={{marginTop:5}} >
            <Card.Content>
              <Text variant="titleLarge">Loren Ipsum</Text>
              <Text variant="bodyMedium">Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum </Text>
              <Ionicons name="list" color={lightgray} size={20}></Ionicons>
            </Card.Content>
          </Card>
          ))}
        </View>

      </ScrollView>
    );
  }

  function CategoriePage(){
    return(
      <View>
        <Text>La liste des Catégories de service</Text>
      </View>
    );
  }














  /*****************************SERVICE*************** */
  function ServicePage({navigation}){
    return(
      <ScrollView style={{padding:5}}>
        <EnteteProfil />
        <Divider style={{margin:5}} />
          <View>
            <List.Section>
              <List.Subheader style={{fontSize:16, fontWeight:'bold', color:'coral'}}>Nos Services</List.Subheader>
              {
                dataservices.map((item,i) =>(
                  <TouchableOpacity
                    //onPress={() => console.log(item.libelleCategorie)}
                    onPress={() => navigation.navigate('ServicesForm') }
                    activeOpacity={0.5}  // Réduit l'opacité à 60% lors du clic
                  >
                    <List.Item key={i} title={item.libelleCategorie} left={() => <List.Icon style={{backgroundColor:'coral'}} icon={item.iconCategorie} />} />
                    <Divider style={{margin:5}} />
                  </TouchableOpacity>
                ))
              }
              
            </List.Section>
        </View>
      </ScrollView>
    );
  }

  function ServiceFormPage({navigation}){
    const [date, setDate] = React.useState(undefined);
  const [open, setOpen] = React.useState(false);

  const onDismissSingle = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = React.useCallback(
    (params) => {
      setOpen(false);
      setDate(params.date);
    },
    [setOpen, setDate]
  );

  const [visible, setVisible] = React.useState(false)
  const onDismiss = React.useCallback(() => {
    setVisible(false)
  }, [setVisible])

  const onConfirm = React.useCallback(
    ({ hours, minutes }) => {
      setVisible(false);
      console.log({ hours, minutes });
    },
    [setVisible]
  );

    return(
      <ScrollView style={{padding:5}}>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.navigate('TabMaterial')} />
            <Text>Renseignez votre formulaire de demande de prestation</Text>
        </Appbar.Header>
        <View>          
          <DatePickerInput
            locale="fr"
            mode="outlined"
            label="Date Début Souhaitée"
            placeholder="Date"
            visible={open}
            onDismiss={onDismissSingle}
            date={date}
            //onConfirm={onConfirmSingle}
            onChange={onConfirmSingle}
            style={{height:50, color:'black', marginTop:10}}
            right={<TextInput.Icon icon="calendar" />}
          />
          <DatePickerInput
            locale="fr"
            mode="outlined"
            label="Date Fin Souhaitée"
            placeholder="Date"
            visible={open}
            onDismiss={onDismissSingle}
            date={date}
            //onConfirm={onConfirmSingle}
            onChange={onConfirmSingle}
            style={{height:50, color:'black', marginTop:10}}
            right={<TextInput.Icon icon="calendar" />}
          />
          <TextInput
          mode="outlined"
          label="Position GPS où se fera la prestation"
          placeholder="Position"
          style={{height:50, color:'black', marginTop:10}}
          right={<TextInput.Icon icon="image" />}
          />
          <TextInput
          mode="outlined"
          label="Autres détails importants"
          placeholder="Commentaire"
          multiline={true}
          style={{height:150, color:'black', marginTop:10}}
          />
          
          <View style={{justifyContent: 'center', flex: 1, alignItems: 'left'}}>
            <Button onPress={() => setVisible(true)} uppercase={false} mode="outlined" Ionicons="clock" >
              Heure qui vous convient
            </Button>
            <TimePickerModal
              visible={visible}
              onDismiss={onDismiss}
              onConfirm={onConfirm}
              hours={12}
              minutes={14}
            />
          </View>

          <Button icon="" mode="elevated" style={{marginTop:20, marginBottom:20}} onPress={() => console.log('Pressed')}>
            Soumettre la demande
          </Button>
        </View>
        
      </ScrollView>
    );
  }






















  /*************************HISTORIQUE ********************* */
  function HistoriquePage(){
    return(
      <View>
        <Text>Votre Historique </Text>
      </View>
    );
  }
















  /********************** RECHERCHE************************* */
  
  function RecherchePage(){
    return(
      <View>
        <Text>Effectuer des Recherches</Text>
      </View>
    );
  }













  /******************** PANIER ******************************** */
  
  function PanierPage(){
    return(
      <View>
        <Text>Mon panier MasterDjossi</Text>
      </View>
    );
  }















  /*********************COMPTE ************************ */
  
  function ComptePage(){
    return(
      <ScrollView style={{padding:5}}>
        <EnteteProfil />
        <Divider style={{margin:5}} />
        <View style={{backgroundColor:'black'}}>
          <Text style={{color:'white'}}>Bienvenu ADJA Noel</Text>
          <Text style={{color:'white'}}>+225 0101110102</Text>
          <Text style={{color:'white'}}>adja@noel.com</Text>
        </View>
        <View>
            <List.Section>
              <List.Subheader style={{fontSize:14, fontWeight:'bold', color:'coral', backgroundColor:'gray'}}>Mon Compte</List.Subheader>
              {
                datacompte.map((item,i) =>(
                  <TouchableOpacity
                    //onPress={() => console.log(item.libelleCategorie)}
                    onPress={() => /*navigation.navigate('ServicesForm') */{}}
                    activeOpacity={0.5}  // Réduit l'opacité à 60% lors du clic
                  >
                    <List.Item key={i} title={item.libelle} left={() => <List.Icon style={{backgroundColor:'coral'}} icon={item.icone} />} />
                    <Divider style={{margin:5}} />
                  </TouchableOpacity>
                ))
              }
              
            </List.Section>
        </View>
      </ScrollView>
    );
  }


















  /******************** BOTTOM NAVIGATION ***********************************/

const Tab = createMaterialBottomTabNavigator();
function TabMaterial(){
  const size = 24;
    return (
      <Tab.Navigator
         screenOptions={({ route }) => ({
          tabBarStyle: ((route) => {
            const routeName = route.name;

            if (routeName === 'ServicesForm') {
              // Masquer la barre de navigation pour l'écran Details
              return { display: 'none' };
            }
            return { display: 'flex' };  // Afficher la barre pour tous les autres écrans
          })(route)
        })}
      >
        <Tab.Screen name="Accueil" component={AccueilPage} options={{tabBarLabel: 'Accueil',
            tabBarIcon: ({ color, size }) => (<Ionicons name="home" color={color} size={20} />),
          }}
        />
        <Tab.Screen name="Services" component={ServicePage} options={{tabBarLabel: 'Services',
            tabBarIcon: ({ color, size }) => (<Ionicons name="list" color={color} size={20} />),
          }}
        />
        <Tab.Screen name="Historique" component={HistoriquePage} options={{tabBarLabel: 'Historique',
            tabBarIcon: ({ color, size }) => (<Ionicons name="cube" color={color} size={20} />),
          }} 
        />
        <Tab.Screen name="Compte" component={ComptePage} options={{tabBarLabel: 'Compte',
            tabBarIcon: ({ color, size }) => (<Ionicons name="person" color={color} size={20} />),
          }} />
      </Tab.Navigator>
    );
}


const stack  = createStackNavigator();
export default function index(){
  return (    
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer   independent={true}>
      <stack.Navigator  initialRouteName="TabMaterial">
        <stack.Screen name="TabMaterial" component={TabMaterial} options={{ headerShown: false }}  />
        <stack.Screen name="ServicesForm" component={ServiceFormPage} options={{ headerShown: false }}   />
      </stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  );
}










const style = StyleSheet.create({
    input: {
        height: 30,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:20,
        borderColor:lightgray,
        color:lightgray,
      },
      container: {
        flex: 1,
        paddingTop: 22,
      },
      item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
});