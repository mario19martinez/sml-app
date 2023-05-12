import Nav from '../../Nav/Nav'
import { useState, useEffect } from 'react';
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
      id: '131231',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: false
    },
    {
      id: '223456',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: false
    },
    {
      id: '242562',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: false
    },
    {
      id: '295267',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: false
    },
    {
      id: '211111',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: false
    },
    {
      id: '222222',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: false
    },
    {
      id: '244444',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: false
    },
    {
      id: '255555',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: false
    },
    {
      id: '266666',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: false
    },
    {
      id: '277777',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: false
    },
    {
      id: '288888',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: false
    },
    {
      id: '299999',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: false
    },
  ]
 
  const cardsPerPage = 8;
  const totalPages = Math.ceil(data.length / cardsPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const [currentCards, setCurrentCards] = useState([]);

  useEffect(() => {
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const cardsToDisplay = data.slice(indexOfFirstCard, indexOfLastCard);
    setCurrentCards(cardsToDisplay);
  }, [currentPage]);


  const handlePageChange = (page) => {
    setCurrentPage(page);
  }
  return (
    <div className="flex w-screen">
      <Nav />
      <div className="flex flex-col w-screen">
        <div className="flex justify-between m-8">
          <h1 className="text-2xl font-bold text-white">Analytics Sealers</h1>
          <select className="w-32 h-12 rounded-lg bg-purple-500 text-white text-center">
            <option className="py-1">2023</option>
          </select>
        </div>
        <div className="h-3/5">
          <div className="flex flex-col">
            {currentCards.map((item) => (
              <div className="w-full flex justify-center mb-10 h-3/5" key={item.id}>
                <div className="flex flex-row rounded bg-[#39394B] w-[1500px] h-16 items-center mt-80px justify-center space-x-28">
                  <div className="w-1/7 text-center">{item.id}</div>
                  <div className="w-1/7 text-center">{item.client}</div>
                  <div className="w-1/7 text-center">{item.profesion}</div>
                  <div className="w-1/7 text-center">{item.nivel}</div>
                  <div className="w-1/7 text-center">{item.telefono}</div>
                  <div className="w-1/7 text-center">{item.Email}</div>
                  <div className="w-1/7 text-center">
                    {item.status === true ? (
                      <div className="bg-emerald-400 w-44 h-11 flex justify-center items-center text-white rounded-3xl">
                        Contactado
                      </div>
                    ) : (
                      <div className="bg-pink-500 w-44 h-11 flex justify-center items-center text-white rounded-3xl ">
                        Sin contacto
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`mx-1 px-4 py-2 rounded-lg ${
                currentPage === index + 1 ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-600'
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        </div>
       
      </div>
    </div>
  )
}

export default AnalyticsSealer;