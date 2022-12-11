import { IonInput, IonBackButton, IonButtons, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonImg, IonContent, IonButton, IonHeader, IonPage, IonTitle, IonToolbar, IonApp, IonInfiniteScrollContent, IonAlert } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useState } from 'react';
import { useHistory } from 'react-router'; 
import { useIonAlert } from '@ionic/react';

const Login: React.FC = () => {
    const [correo, setCorreo] = useState('')
    const [contra, setContra] = useState('')
    const history = useHistory();
    const [presentAlert] = useIonAlert();

    function loginUser() {
        console.log(correo, contra)
        if (correo == 'luis@gmail.com' && contra == '12345') {
            console.log('Ingreso al sistema')
              history.push('/tab1');
        } else {
            presentAlert({
                header: 'Alerta',
                subHeader: 'Usuario Incorrecto',
                message: 'Intente de nuevo',
                buttons: ['Listo'],
              })
        }
    }

    return (

        <IonApp>

            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="home" />
                    </IonButtons>
                </IonToolbar>
                <IonToolbar>
                    <IonTitle>Iniciar sesion</IonTitle>
                </IonToolbar>

                <IonCardContent>

                    <p>Ingrese su correo Electronico</p>
                    <IonInput placeholder='Correo Electronico'
                        type='email'
                        onIonChange={(e: any) => setCorreo(e.target.value)}>

                    </IonInput>

                    <p>Ingrese su Contraseña</p>
                    <IonInput placeholder='Contraseña'
                        type='password'
                        onIonChange={(e: any) => setContra(e.target.value)}></IonInput>
                </IonCardContent>
            </IonHeader>
            <IonContent fullscreen>
                <center>
                    <IonButton onClick={loginUser}>Iniciar sesión</IonButton>
                </center>
            </IonContent>



        </IonApp>
    );
};

export default Login;


