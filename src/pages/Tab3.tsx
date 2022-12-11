import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

import React from 'react';
import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';

import './Tab3.css';


const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="home" />
          </IonButtons>
          <IonTitle>Salir</IonTitle>
        </IonToolbar>
        <IonTitle>Preguntas Frecuentes</IonTitle>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Preguntas Frecuentes</IonTitle>
          </IonToolbar>
        </IonHeader>

        <center>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>¿Cuál es el objetivo de realizar un Censo?</IonCardTitle>

            </IonCardHeader>

            <IonCardContent>
              El objetivo del Censo es contar –sin omitir ni duplicar– a todas y a cada una de las personas, hogares y viviendas en el lugar correcto, para conocer, cuantificar y analizar la estructura demográfica y socioeconómica y la distribución espacial de la población.
            </IonCardContent>
          </IonCard>

          {/* ///// */}

          <IonCard>
            <IonCardHeader>
              <IonCardTitle>¿Cuánto tiempo dura el censo?</IonCardTitle>

            </IonCardHeader>

            <IonCardContent>
              Esta etapa de presentación de información durará dos meses, hasta el 16 de mayo.
            </IonCardContent>
          </IonCard>


          {/*  //// */}
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>¿Cuál es la importancia de un censo?</IonCardTitle>

            </IonCardHeader>

            <IonCardContent>
              Constituye la única fuente de información que proporciona datos actualizados de la realidad y al menor nivel de desagregación geográfica del país
            </IonCardContent>
          </IonCard>

          {/*  //// */}
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>¿Qué pasa si no lleno el censo?</IonCardTitle>

            </IonCardHeader>

            <IonCardContent>
              "Incurrirán en infracción y serán pasibles de multas, quienes no suministren en término, falseen o produzcan con omisión maliciosa las informaciones necesarias para las estadísticas y los censos a cargo del Sistema Estadístico Nacional", estipula la normativa.
            </IonCardContent>
          </IonCard>

        </center>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
