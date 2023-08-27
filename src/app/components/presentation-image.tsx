import Image, { StaticImageData } from 'next/image'

interface Props {
  img: StaticImageData
}

export function PresentationImage({ img }: Props) {
  return (
    <div className="order-first px-2 flex justify-center lg:order-none">
      <Image
        src={img}
        width={256}
        height={256}
        className=" w-64 md:w-72 opacity-50 lg:h-80 lg:w-80"
        aria-hidden="true"
        alt=""
        priority
      />
    </div>
  )
}
