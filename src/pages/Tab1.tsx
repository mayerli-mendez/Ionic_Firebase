import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonFab,
  IonFabButton,
  IonToolbar,
  IonInput,
  useIonViewWillEnter,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonList,
  IonLabel,
  IonItem,
  IonIcon,
  IonBackButton,

} from '@ionic/react';
import { useEffect } from 'react';
import { isPlatform } from '@ionic/react';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Capacitor } from '@capacitor/core';
import { camera, trash, close } from 'ionicons/icons';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { IonButton, IonLoading, IonToast } from '@ionic/react';
import React, { useState } from 'react';
import { firebaseConfig } from '../database/Config'
import { registro } from '../modelo/registro';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


interface LocationError {
  showError: boolean;
  message?: string;
}


const Tab1: React.FC = () => {

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<LocationError>({ showError: false });
  const [position, setPosition] = useState<Geoposition>();

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [cedula, setCedula] = useState('');
  const [nfamilia, setNfamilia] = useState('');
  const [direcion, setDirecion] = useState('');

  const getLocation = async () => {
    setLoading(true);

    try {
      const position = await Geolocation.getCurrentPosition();
      setPosition(position);
      setDirecion(`${position.coords.latitude} ${position.coords.longitude}`);
      setLoading(false);
      setError({ showError: false });
    } catch (error) {
      const message = "Cannot";
      setError({ showError: true, message });
      setLoading(false);
    }
  }

  //funcion para guardar los datos
  const crear = async () => {
    try {
      await firebase.firestore().collection('registro').add(
        { nombre, apellido, cedula, nfamilia, direcion });
    } catch (error) { }
    console.log(error);
  }

  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
  }
  return (
    <>
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

          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Registro</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>

              <IonItem>
                <IonLabel position="floating">Nombre</IonLabel>
                <IonInput
                  value={nombre}
                  placeholder="Ingresa Nombre"
                  onIonChange={e => setNombre(e.detail.value!)}></IonInput>
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Apellido</IonLabel>
                <IonInput
                  value={apellido}
                  placeholder="Ingresa Apellido"
                  onIonChange={e => setApellido(e.detail.value!)}></IonInput>
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Cedula</IonLabel>
                <IonInput
                  value={cedula}
                  type="number"
                  placeholder="0"
                  onIonChange={e => setCedula(e.detail.value!)}></IonInput>
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Numero de miembros de la familia</IonLabel>
                <IonInput
                  value={nfamilia}
                  type="number"
                  placeholder="0"
                  onIonChange={e => setNfamilia(e.detail.value!)}></IonInput>
              </IonItem>
              <IonLoading
                isOpen={loading}
                onDidDismiss={() => setLoading(false)}
                message={'Getting Location...'}
              />
              <IonToast
                isOpen={error.showError}
                onDidDismiss={() => setError({ message: "", showError: false })}
                message={error.message}
                duration={3000}
              />
              <IonButton color="light" expand="block" onClick={getLocation}>{position ? `${position.coords.latitude} ${position.coords.longitude}` : "Get Location"}</IonButton>


              <IonButton color="primary"  expand="block" onClick={() => takePhoto()}>
              <IonIcon icon={camera}></IonIcon>  Imagen de la casa
              </IonButton>


              <IonButton color="success" expand="block"
                onClick={() => crear()}>
                Guardar</IonButton>

            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Tab1;
