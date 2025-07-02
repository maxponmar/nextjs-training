import Image from "next/image";
import dog1 from "../../public/images/dog1.png";
import dog2 from "../../public/images/dog2.png";
import dog3 from "../../public/images/dog3.png";
import dog4 from "../../public/images/dog4.png";

export const metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  return (
    <div>
      <h1>My Photos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-60 bg-gray-200 rounded-md overflow-hidden">
          <Image
            src={dog1}
            alt="Photo"
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            placeholder="blur"
          />
        </div>
        <div className="h-60 bg-gray-200 rounded-md overflow-hidden">
          <Image
            src={dog2}
            alt="Photo"
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            placeholder="blur"
          />
        </div>
        <div className="h-60 bg-gray-200 rounded-md overflow-hidden">
          <Image
            src={dog3}
            alt="Photo"
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            placeholder="blur"
          />
        </div>
        <div className="h-60 bg-gray-200 rounded-md overflow-hidden">
          <Image
            src={dog4}
            alt="Photo"
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
}
