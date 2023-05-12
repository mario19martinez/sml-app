import Nav from '../../Nav/Nav'
const AnalyticsSealer = () => {
  const data = [
    {
      id: '876364',
      client: 'Social Media Lab',
      profesion: 'Abogado',
      nivel: 1,
      telefono: '+492563627',
      Email: 'arroragaur@gmail.com',
      status: true
    },
    {
      id: '2',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: false
    },
    {
      id: '2',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: false
    },
    {
      id: '2',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: false
    },
    {
      id: '2',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: false
    },
    {
      id: '2',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: false
    },
    {
      id: '2',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: false
    },
    {
      id: '2',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: false
    },
    {
      id: '2',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: false
    },
    {
      id: '2',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: false
    },
    {
      id: '2',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: false
    },
    {
      id: '2',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: false
    },
    {
      id: '2',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: false
    },
  ]

  return (
    <div className="flex w-screen">
      <Nav />
      <div className="flex flex-col w-screen">
        <div className="flex justify-between m-8">
          <h1 className="text-2xl font-bold text-white">Analytics Sealers</h1>
          <select className="w-32 h-12 rounded-lg bg-purple-500 text-white text-center">2023</select>
        </div>
        <div className='h-3/5'>
          <div className='flex flex-col' >
            {
              data.map((item) => (
                <div className="w-full flex justify-center mb-10 h-3/5" key={item.id}>
                  <div className="flex flex-row rounded bg-[#39394B] w-[1500px] h-16 items-center mt-80px justify-center space-x-28">
                    <div className=" w-1/7 text-center ">{item.id}</div>
                    <div className="w-1/7 text-center ">{item.client}</div>
                    <div className="w-1/7 text-center ">{item.profesion}</div>
                    <div className="w-1/7 text-center ">{item.nivel}</div>
                    <div className="w-1/7 text-center ">{item.telefono}</div>
                    <div className="w-1/7 text-center ">{item.Email}</div>
                    <div className="w-1/7 text-center ">{item.status === true ? <div className='bg-emerald-400 w-44 h-11 flex justify-center items-center text-white rounded-3xl'>Contactado</div> : <div className='bg-pink-500 w-44 h-11 flex justify-center items-center text-white rounded-3xl '>Sin contacto</div>}</div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsSealer;