import Image from "next/Image";

export default function Icon({ name, width = 36, height = 36, ...rest }) {
  return (
    <Image
      src={`/assets/icons/${name}.png`}
      alt=""
      width={width}
      height={height}
      {...rest}
    />
  );
}
