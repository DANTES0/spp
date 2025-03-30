import DogIcon from '../assets/icons/DogIcon'
export function Header() {
  return (
    <header className="w-[100vw] flex bg-[rgba(255,255,255,0.17)] backdrop-blur-[18px] h-[50px] absolute z-10 items-center">
      <div className="flex items-center gap-4 ml-[20px] justify-center">
        <DogIcon />
        <div className="font-[Bryndan_Write] text-[24px]">СПП</div>
      </div>
    </header>
  )
}
