import { IonBackButton, IonButtons, IonCardSubtitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
import { firebaseConfig } from '../database/Config'
import { registro } from '../modelo/registro';
import React, { useState, useEffect } from 'react';
import {
  IonButton,
  IonFab,
  IonFabButton,
  IonInput,
  useIonViewWillEnter,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonList,
  IonLabel,
  IonItem,
  IonIcon,

} from '@ionic/react';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


interface LocationError {
  showError: boolean;
  message?: string;
}


const Tab2: React.FC = () => {
  const [listaRegistro, setListaRegistro] = useState<registro[]>([]);

  const listar = async () => {
    try {
      let lista: registro[] = []
      const res = await firebase.firestore().collection('registro').get();
      res.forEach((doc) => {
        let obj = {
          id: doc.id,
          nombre: doc.data().nombre,
          apellido: doc.data().apellido,
          cedula: doc.data().cedula,
          nfamilia: doc.data().nfamilia,
          direcion: doc.data().direcion
        };
        lista.push(obj)

      });
      setListaRegistro(lista)
    } catch (error) { }
  }

  useEffect(() => {
    listar();
  }, [])



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="home" />
          </IonButtons>
          <IonTitle>Salir</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonList> {
          listaRegistro.map(registro => (
            <IonCard key={registro.id} >
              <IonCardHeader>

                <IonCardTitle>Datos personales</IonCardTitle>
                <IonCardSubtitle>Nombre: {registro.nombre}</IonCardSubtitle>
                <IonCardSubtitle>Apellido: {registro.apellido}</IonCardSubtitle>
                <IonCardSubtitle>Cedula: {registro.cedula}</IonCardSubtitle>
                <IonCardSubtitle>Numero de mienbros de la familia: {registro.nfamilia}</IonCardSubtitle>
                <IonCardSubtitle>Direccion: {registro.direcion}</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>

              </IonCardContent>

            </IonCard>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
