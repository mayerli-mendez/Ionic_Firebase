import { IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonImg, IonContent, IonButton, IonHeader, IonPage, IonTitle, IonToolbar, IonApp, IonInfiniteScrollContent } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';



const Home: React.FC = () => {
    return (
        
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonInfiniteScrollContent>
                        <IonImg src='https://censo2022.ine.gov.py/wp-content/themes/censo2022/images/censotransparente.png'></IonImg>

                        <IonCard>
                            <IonCardHeader>

                                <IonCardTitle>Censo en línea</IonCardTitle>
                            </IonCardHeader>

                            <IonCardContent>

                                El Censo en Linea es una herramienta que nos permite llenar el cuestionario censal de manera virtual y desde cualquier aparato tecnológico con acceso a Internet. Está pensada para facilitar el levantamiento de información,
                                así como ahorrar tiempo a la ciudadanía. La nueva forma innovadora de hacer Censo.
                            </IonCardContent>
                        </IonCard>
                    </IonInfiniteScrollContent>

                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <center>
                <IonButton routerLink='/login'>Empezar</IonButton>
                </center>
                
            </IonContent>
        </IonPage>
    );
};

export default Home;


