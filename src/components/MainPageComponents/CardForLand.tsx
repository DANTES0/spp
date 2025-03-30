type CardForLandProps = {
  number: number
  title: string
  description: string
}

export function CardForLand({ number, title, description }: CardForLandProps) {
  return (
    <div className="flex gap-8 ">
      <div className="w-1.5 h-[220px] bg-[#E76F51] rounded-full"></div>
      <div className=" bg-[#00577A]/[0.78] w-[330px] h-[220px] rounded-[16px] p-[20px] flex flex-col gap-[32px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        <div className="flex gap-[30px]">
          <div className="w-[40px] aspect-square bg-transparent rounded-full border-2 border-white text-white text-[24px] font-[Bryndan_Write] flex items-center justify-center">
            {number}
          </div>
          <div className="px-[16px] rounded-[18px] border-2 border-white text-white text-[24px] font-[Bryndan_Write] flex items-center justify-center">
            {title}
          </div>
        </div>
        <div className="text-white text-[24px] font-[Bryndan_Write]">
          {description}
        </div>
      </div>
    </div>
  )
}
// bg-[rgba(38,70,83,0.78)]
