import TabsComponent from '../../components/ProfileTaps/TabsComponent';

import InfoProfile from './InfoProfile';

import whatsappIcon from '../../assets/images/Profile/whatsapp.svg';
import infoPhoto from '../../assets/images/Profile/Biury_Fotos-05.png';
import CurrentProductItem from '../../components/CurrentProductItem/CurrentProductItem';

import item1 from '../../assets/images/Home/ProductSeccion/item1.png';
import item2 from '../../assets/images/Home/ProductSeccion/item2.png';
import item3 from '../../assets/images/Home/ProductSeccion/item3.png';
import item4 from '../../assets/images/Home/ProductSeccion/item4.png';

const tabsData = {
  tabsName: 'tabs1',
  data: [
    {
      title: 'PERFIL BIURYCLUB',
      type: 'component',
      content: <InfoProfile />,
    },
    {
      title: 'MEMBRESÍAS',
      type: 'component',
      content: <InfoProfile />,
    },
    {
      title: 'BIURY TEST',
      type: 'text',
      content:
        'It’s great to have someone that understands you. We develop the best solution for your budget, schedule, and needs.',
    },
  ],
};

const products = [
  {
    image: item1,
    name: 'Baltic Birch Face Daily Mask',
  },
  {
    image: item2,
    name: 'Baltic Birch Face Daily Mask',
  },
  {
    image: item3,
    name: 'Baltic Birch Face Daily Mask',
  },
  {
    image: item4,
    name: 'Baltic Birch Face Daily Mask',
  },
];

function UserProfile() {
  return (
    <>
      <h1 className='title'>
        PERFIL BIURY <span>CLUB</span>
      </h1>
      <TabsComponent data={tabsData} />
      <div className='message-input'>
        <label>ESCRÍBENOS UN MENSAJE</label>
        <textarea></textarea>

        <button>ENVIAR</button>
        <button>
          {' '}
          <img src={whatsappIcon} /> WHATSAPP
        </button>
      </div>

      <div className='account-info'>
        <h1 className='seccion-title'> INFORMACIÓN DE LA CUENTA</h1>
        <div className='wrapper'>
          <div className='info'>
            <div className='mid'>
              <label>Nombre</label>
              <input type='text'></input>
            </div>

            <div className='mid'>
              <label>Apellido</label>
              <input type='text'></input>
            </div>

            <div className='big'>
              <label>Correo electrónico</label>
              <input type='text'></input>
            </div>

            <div className='mid'>
              <label>País</label>
              <input type='text'></input>
            </div>

            <div className='mid'>
              <label>Ciudad</label>
              <input type='text'></input>
            </div>

            <div className='big'>
              <label>Dirección ¿dónde quieres que llegue tu BIURYBOX?</label>
              <input type='text'></input>
            </div>

            <div className='small'>
              <label>Ciudad</label>
              <div>
                <div className='inputs'>
                  <input type='text'></input>
                  <input type='text'></input>
                  <input type='text'></input>
                </div>
              </div>
            </div>

            <div className='mid'>
              <label>Teléfono/Celular</label>
              <input type='text'></input>
            </div>

            <div className='checkout'>
              <label>
                He leído y acepto términos y condiciones
                <input type='checkbox'></input>
              </label>
              <label>
                Quiero recibir información
                <input type='checkbox'></input>
              </label>
            </div>
          </div>
          <div className='photo-container'>
            <div className='photo-wrapper'>
              <img src={infoPhoto} className='photo' />
            </div>
          </div>
        </div>
      </div>

      <h1 className='seccion-title'>HISTORIAL DE PEDIDOS </h1>
      <div className='currentProducts-container'>
        {products.map((data) => {
          return <CurrentProductItem data={data} />;
        })}
      </div>
    </>
  );
}

export default UserProfile;
