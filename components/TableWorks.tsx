import Image from 'next/image'

interface MiComponenteProps {
    imagen: string; // Tipo explícito para la prop 'imagen'
    titulo: string;
    descripcion: string;
  }

export default function TableWorks({imagen, titulo, descripcion}: MiComponenteProps) {

    return (
        <>
    <div className="bg-white p-4 rounded-lg shadow-md items-center justify-center">
      <div className="w-full h-40 md:h-48 lg:h-56 overflow-hidden rounded-lg relative">
        <Image
          src={imagen}
          alt=""
          layout="responsive"
          width={4000}
          height={3000}
          className="h-auto max-w-full rounded-lg"
        />
      </div>
      <h3 className="text-xl font-semibold">{titulo}</h3>
      <p className="text-gray-600">{descripcion}</p>
    </div>

        </>
        )
      }