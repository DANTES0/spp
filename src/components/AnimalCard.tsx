import { FemaleIcon } from '../assets/icons/FemaleIcon'
import { MaleIcon } from '../assets/icons/MaleIcon'

type AnimalCardProps = {
  name: string
  photo: string
  age: string
  description: string
  gender: string
}
export default function AnimalCard({
  name,
  photo,
  age,
  description,
  gender,
}: AnimalCardProps) {
  return (
    <>
      <div className="w-[300px] h-[350px] bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-2xl flex flex-col">
        <img
          src={photo}
          className="w-[300px] min-h-[190px] h-[190px] rounded-tr-[16px] rounded-tl-[16px] object-cover"
        />
        <div className="h-full flex flex-col">
          <div className="flex flex-col font-[Bryndan_Write]">
            <div className="flex justify-between px-[20px] items-end">
              <div className="text-[24px]">{name}</div>
              <div className="flex gap-3 items-center">
                <div className="text-[16px]">{age}</div>
                {gender == 'male' ? <MaleIcon /> : <FemaleIcon />}
              </div>
            </div>
          </div>
          <div className="font-[Bryndan_Write] flex items-center justify-center h-full text-center">
            {description}
          </div>
        </div>
      </div>
    </>
  )
}
