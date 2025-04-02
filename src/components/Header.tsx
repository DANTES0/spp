import DogIcon from '../assets/icons/DogIcon'
export function Header() {
  return (
    <header className="w-[100vw] flex bg-[rgba(255,255,255,0.17)] backdrop-blur-[18px] h-[50px] fixed z-20 items-center justify-between">
      <div className="flex items-center gap-4 ml-[20px] justify-center">
        <DogIcon />
        <div className="font-[Bryndan_Write] text-white text-[24px]">
          <span className="[text-shadow:_0_4px_4px_rgb(0_0_0_/_0.5)] [-webkit-text-stroke:_0.5px_rgb(0_0_0_/_1)] text-[24px]">
            СПП
          </span>
        </div>
      </div>
      <div className="flex font-[Bryndan_Write] mr-[20px] text-[24px] [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.5)] [-webkit-text-stroke:_0.5px_rgb(0_0_0_/_1)] text-white ">
        <div className="hover:text-[#E76F51] cursor-pointer transition duration-200">
          Войти
        </div>
        <div>/</div>
        <div className="hover:text-[#E76F51] cursor-pointer transition duration-200">
          Регистрация
        </div>
      </div>
    </header>
  )
}
