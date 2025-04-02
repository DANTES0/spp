import { Header } from '../components/Header'
import bgImage from '../assets/MainPageBg.jpg'
import { CardForLand } from '../components/MainPageComponents/CardForLand'
import AnimalCard from '../components/AnimalCard'
import dog1 from '../assets/dog1.jpg'
import dog2 from '../assets/dog2.jpg'
import cat1 from '../assets/cat1.jpg'
import cat2 from '../assets/cat2.jpg'

const landingCarObject = [
  {
    number: 1,
    title: 'Объявление',
    description: 'Создать объявления  для поиска дома питомцу',
  },
  {
    number: 2,
    title: 'Карта',
    description: 'Отметить на карте местоположение одинокого питомца',
  },
  {
    number: 3,
    title: 'Приюты',
    description: 'Обратиться в приюты для оказания помощи питомцам',
  },
]

const animalCardObject = [
  {
    name: 'Шарик',
    photo: dog1,
    age: '6 лет',
    description:
      'Очень веселый и озорный пес, любит веселиться и играть, ему нужна твоя помощь, чтобы обрести дом',
    gender: 'male',
  },
  {
    name: 'Бобик',
    photo: dog2,
    age: '2 года',
    description:
      'Очень веселый и озорный пес, любит веселиться и играть, ему нужна твоя помощь, чтобы обрести дом',
    gender: 'male',
  },
  {
    name: 'Влада',
    photo: cat1,
    age: '4 месяца',
    description:
      'Очень веселый и озорный пес, любит веселиться и играть, ему нужна твоя помощь, чтобы обрести дом',
    gender: 'female',
  },
  {
    name: 'Милка',
    photo: cat2,
    age: '6 лет',
    description:
      'Очень веселый и озорный пес, любит веселиться и играть, ему нужна твоя помощь, чтобы обрести дом',
    gender: 'female',
  },
]

export function MainPage() {
  return (
    <>
      {/* <Header /> */}
      <div className="relative w-[100vw] h-[800px]">
        <img
          src={bgImage}
          className="absolute w-full h-[800px] object-cover"
          alt=""
        />
        <div
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
          className="font-[Bryndan_Write] text-[48px] text-white absolute z-10 w-[400px] h-[300px] text-center top-[75px] "
        >
          Животные нуждаются в твоей помощи
        </div>
        <div className="font-[Bryndan_Write] text-2xl text-white absolute z-10 text-center top-[320px] left-[20px]">
          С помощью этого сайта вы сможете:
        </div>

        <div className="absolute top-[420px] left-[20px] flex gap-[72px]">
          {landingCarObject.map((item) => (
            <CardForLand
              key={item.number}
              number={item.number}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
      <div className="w-[100vw] bg-[#D0EDFF] h-[600px]">
        <div className="font-[Bryndan_Write] text-[36px] text-[#4D4D4D] pl-[20px] pt-[20px]">
          Они нуждаются в тоей помощи
        </div>
        <div className="flex flex-row w-full items-center justify-center gap-[47px] mt-[60px]">
          {animalCardObject.map((item) => (
            <AnimalCard
              key={item.name}
              name={item.name}
              photo={item.photo}
              age={item.age}
              description={item.description}
              gender={item.gender}
            />
          ))}
        </div>
      </div>
    </>
  )
}
