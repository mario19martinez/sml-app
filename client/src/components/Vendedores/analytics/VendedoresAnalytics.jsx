const AnalyticsSealer = () => {
  const data=
    [
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
      }
    ]
  
  return(
    <div>
      {
        data.map((item)=>(
         <div className="w-full flex justify-center mb-10">
          <div className='flex flex-row rounded bg-[#39394B] w-[1500px] h-10 items-center mt-80px'>
            <h1>{item.id}</h1>
            <h1>{item.client}</h1>
            <h1>{item.profesion}</h1>
            <h1>{item.nivel}</h1>
            <h1>{item.telefono}</h1>
            <h1>{item.email}</h1>
            <h1>{item.status===true ? 'contactado': 'sin contactar'}</h1>
          </div>
         </div>
        ))
      }
    </div>
  )
}
export default AnalyticsSealer