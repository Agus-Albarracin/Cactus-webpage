import React from 'react';
import Image from 'next/image';

const documentationContent = [
  {
    titulo: 'First step',
    subtitulos: [
      {
        titulo: 'Inicio',
        contenido: (
          <div className='space'>

            <p>Al montar el componente como se explica en la documentación de la librería: <a href='https://www.npmjs.com/package/@react-oauth/google'>react-oauth/google</a>, el componente se monta de manera exitosa.</p><br/>
            <p>Puedes ver incluso en la consola la respuesta, la cual contiene las credenciales del usuario.</p>

            <p>A diferencia de hace unos años, cuando se usaba la librería <a href='https://www.npmjs.com/package/react-google-login'><strong>@react-google-login</strong> </a>, <strong>(esta librería se encuentra obsoleta)</strong>, la librería <strong>@react-oauth/google</strong> no devuelve el objeto profileObj, el cual obtenías con la información del usuario.</p>

            <p>Es importante aclarar que esta librería no pertenece directamente al equipo de React y recomiendo usar las librerías que empiecen con @react que son de la organización.</p>

            <br/><br/>
            <Image src='https://res.cloudinary.com/do1hcqjpe/image/upload/v1713482672/nussxjqhujvyqikhypno.jpg'  alt={'profile object'} width={1600} height={800} />
            <br/><br/>

            <strong>Peticiones</strong><br/><br/>

            <p>Normalmente, cuando instalamos este componente, estamos queriendo verificar usuarios a través de las cuentas de Google. No obstante, también podemos utilizar los datos para cargar nuestra base de datos.</p>

            <br/><br/><strong>Ejemplo:</strong><br/><br/>

            <p>Supongamos que se trata de una tienda en la nube y queremos registrar usuarios de manera segura. Esta sería una buena idea para registrar usuarios y, a través de la propiedad googleId que proporciona Google, podemos tener un registro de usuarios con un ID único para cada uno, además de los atributos que queramos agregar a nuestro esquema.
            <br/><br/>
            Necesitaremos un backend donde se procesen nuestras peticiones y podamos comunicar el frontend con nuestro servidor.<br/> Por lo tanto, vamos a requerir hacer peticiones, en este caso POST, para crear usuarios.
            <br/><br/>
            Y es aquí donde propongo soluciones, pero para entender de qué se trata primero quiero mostrarte algunos posibles errores al utilizar este componente que nos brinda React/Google.</p>
            <br/><br/>

            <Image src='https://res.cloudinary.com/do1hcqjpe/image/upload/v1713481447/k8lnyqsbq66mgyk5kah8.jpg'  alt={'Error al post'} width={1600} height={800}/>
            <br/><br/>
            <strong>Este error es común a la hora de programar...</strong><br/>
            <p>Estamos intentando hacer una petición POST de las credenciales que obtenemos a través de nuestra función onSuccess que brinda la librería. Pero al momento de desencriptarlas, obtenemos errores como este.<br/><br/>
            Necesitamos librerías externas sobre JWT e incluso así, aseguro que podrían llegar a tener errores en la consola y requerir un profundo entendimiento sobre la librería y cómo funciona todo este sistema para llegar a la obtención del controlador bien hecho para registrar al usuario.<br/><br/>
            Otra de las opciones que también he utilizado y es común observar, siguiendo con la línea de Google, es la librería <strong>google-auth-library</strong>, que no ofrece el método <strong>OAuth2Client</strong>, el cual utilizamos para hacer una nueva instancia de nuestro <strong>ID de cliente</strong> que nos brinda Google Cloud al utilizar APIs y servicios para poner nuestra App en producción.<br/><br/>
            En esta instancia deberían conocer la librería para poder decodificar las credenciales que devuelve el inicio de sesión. Por lo que afirmo que podrían pasar horas o días, según el entendimiento que deseen tener sobre la misma.<br/><br/>
            Acá les dejo algunos de los métodos que les podrían interesar: <strong>verifyIdToken</strong>, <strong>getPayload</strong>.<br/><br/>
            Incluso utilizando esta librería en nuestro controlador, podríamos tener errores comunes como:</p>
            <br/><br/>
            <Image src='https://res.cloudinary.com/do1hcqjpe/image/upload/v1713479183/arix4qegjipu1svmqnko.png' alt={'error al post ll'}  width={1600} height={800} />
            <br/><br/>
          </div>
        )
      },
      {
        titulo: 'Soluciones',
        contenido: (
          <div className='space'>
            <strong>Soluciones</strong>
            <p>Obviamente no quería dejarlos solos en esto. Por lo que actualmente dediqué a pensar en los métodos y la manera en la que pueda facilitarles a aquellos que recién comienzan en este mundo de la programación y están intentando llevar a cabo:
            <br/><br/>
            <ul>
              <li>  • Proyectos individuales.</li>
              <li>  • Proyectos de estudios.</li>
              <li>  • Trabajos freelance.</li>
              <li>  • Trabajos competitivos.</li>
            </ul>
            <br/><br/>
            No crean que solo es para principiantes... también me voy a ocupar de que pueda ser utilizado en el ámbito competitivo ya que es una manera muy práctica de consumir los datos del cliente directamente a través de un objeto que nos envía el frontend.
            <br/><br/><strong>Tranquilo</strong><br/><br/>
            Esta manera de enviar datos no desprotege nuestros datos sensibles, es una manera de poder acceder más allá de lo que nos propone React/Google. Haciendo mucho más fácil la utilidad de propiedades de las credenciales a través del token que nos proporciona, otra vez Google.
            <br/><br/><strong>¿Qué quiero decir con esto?</strong><br/><br/>
            Que esta información no es infalible, de manera que si no estuviera proporcionando esta habilidad, no la estaría mencionando. Creo que un programador con el suficiente conocimiento en la especialidad debería saber de qué manera solucionarlo, no es algo imposible, pero tampoco es algo que se vea mucho.</p>
            <br/><br/><br/><br/></div>
        
        )
      }
    ]
  },
  {
    titulo: 'Client side',
    subtitulos: [
      {
        titulo: 'XPICKER',
        contenido: (
          <div className='space'>
            <p>El método <strong>xpicker()</strong> es nuestro operario estrella, trabaja en seleccionar, organizar, preparar y enviar. Recibe 2 argumentos:
            <br/><br/>
            <ul>
              <li> • El endpoint, que debe ser un string.</li>
              <li> • El objeto <em>credentialResponse</em> que nos brinda el componente de React / Google.</li>
            </ul>
            <br/><br/>
            Y con esta simple línea de código reduzco la cantidad de líneas de código y tiempo que necesitas para crear los usuarios en tu base de datos, a través de la Autenticación que nos brinda React / Google.
            <br/><br/>
            Recuerda que siempre que se trate de peticiones, usa una función async. Este es uno de los ejemplos de control básico de cómo debes configurar el componente:</p>
            <br/>
            <pre><code>
              {`
import { GoogleLogin } from '@react-oauth/google';
import xpicker from 'google-cactus/cli';

const GoogleLoginComponent: React.FC = () => {
  return (
    <GoogleLogin
      onSuccess={async (credentialResponse) => {
        console.log(credentialResponse);
        const decodedToken = await xpicker('/api/signin', credentialResponse);
        console.log('Decoded token:', decodedToken);
      }}
      onError={() => { console.log('Login Failed'); }}
      useOneTap
    />
  );
};

export default GoogleLoginComponent;

`}
            </code></pre>

            <br/><br/>
            <p>Si deseas manejar las funciones en el cuerpo del componente y agregar estilos al componente que brinda la librería <strong>@react-oauth/google</strong>, puedes optar por algo como esto:</p>
            <br/>
            <pre><code>
              {`
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import xpicker from 'google-cactus/cli';

const GoogleLoginComponent: React.FC = () => {
  const onSuccess = async (credentialResponse: CredentialResponse) => {
    console.log(credentialResponse);
    const decodedToken = await xpicker('http://localhost:3001/yourEndPoint', credentialResponse);
    console.log('Decoded token:', decodedToken);
  };

  const onError = () => {
    console.log('Login Failed');
  };

  return (
    <>
      <GoogleLogin
        onSuccess={onSuccess}
        onError={onError}
        useOneTap={true}
        theme='filled_black'
        text='continue_with'
        shape='pill'
        width='200px'
      />
    </>
  );
};

export default GoogleLoginComponent;

`}

            </code></pre>
            <br/><br/><br/><br/>
          </div>
        )
      }
    ]
  },
  {
    titulo: 'Server side',
    subtitulos: [
      {
        titulo: 'XOPS',
        contenido: (
          <div>
  <p>El <strong>método xops</strong> hace referencia a una fábrica. Este método se encarga de recibir los productos como: el cliente, el ID de la API, la request, la response y el modelo que creaste en la base de datos para tu usuario, como la materia prima, para crear y depositar los usuarios en tu base de datos.</p>
  <p>La fábrica le facilita al desarrollador las líneas de código en su controlador, las ventajas que contiene usar esta pequeña pyme son:</p>
  <br/>
  <ul className='space'>
    <li>•  Prolijidad del código.</li>
    <li>•  Reducción de líneas y tiempo.</li>
    <li>•  Recibe todos los parámetros necesarios para crear el usuario en tu base de datos</li>
      <ul>
        <li> &nbsp; ◦ ( Más tarde puedes seguir agregando o puedes modificarlo en el momento que quieras... )</li>
      </ul>
    <li>•  Es capaz de procesar cualquier ORM que estés utilizando en tu backend.</li>
  </ul>
  <br/><br/>
  <p>Este operario cuenta con sus herramientas de try y catch de manera que captura los errores y hace posible la comunicación entre él y el método (nuestro operario de fábrica <strong>xpicker</strong>) de manera que recibe la captura de error y es capaz de mostrar en consola cuando se produce un error.</p>
  <br/>
  En cuanto a los errores, el único error que puede llegar a generar es el de <em>'El usuario ya existe en la base de datos'</em>, ya que el método solo se utiliza para la utilización del componente <em>login</em> que proporciona <strong>@react-oauth/google.</strong><br/><br/>
  <p>Este flujo de información fue creado con el único propósito de la creación de usuarios. Cuenta con los métodos de cualquier ORM en donde busca o crea el usuario para el registro.
  <br/>
  <strong>En cuanto a su configuración...</strong> podríamos simular un controlador de tu código.</p>
  <br/>
            <pre><code>
               {`
import { Request, Response } from 'express';
import { OAuth2Client } from 'google-auth-library';
import xops from 'google-cactus/srv';
import userModel from '../../models/user.model';
import dotenv from 'dotenv';
dotenv.config();

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID || ';

const client = new OAuth2Client(CLIENT_ID);

export async function signIn(req: Request, res: Response) {
  await xops(client, CLIENT_ID, req, res, userModel);
}

`}

            </code></pre>
            <br/><br/><br/><br/>
          </div>
        )
      }
    ]
  }
];

export default documentationContent;


