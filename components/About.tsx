import React from 'react';
import Image from 'next/image';
import { Award, BookOpen, Heart } from 'lucide-react';
import felineImage from '@/public/images/feline.png';
import jabutiImage from '@/public/images/jabuti.png';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
             <div className="grid grid-cols-2 gap-4">
                <Image
                  src={felineImage}
                  alt="Felino atendido pela veterinária"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8"
                  width={512}
                  height={512}
                  sizes="(min-width: 1024px) 240px, 45vw"
                />
                <Image
                  src={jabutiImage}
                  alt="Jabuti atendido pela veterinária"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                  width={512}
                  height={512}
                  sizes="(min-width: 1024px) 240px, 45vw"
                />
             </div>
             {/* Decorative box */}
             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-slate-100 rounded-3xl" />
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-sm font-bold tracking-widest text-primary-700 uppercase mb-3">Sobre Mim</h2>
            <h3 className="font-serif text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Cuidado especializado para quem cuida do diferente.
            </h3>
            
            <div className="space-y-4 text-slate-700 font-medium leading-relaxed mb-8 text-lg">
              <p>
                Sou Isadora Nascimento, médica veterinária apaixonada pela interseção entre saúde animal e conservação. Com anos de atuação no mercado, dedico minha carreira a elevar o padrão de cuidados aos animais.
              </p>
              <p>
                Minha metodologia de trabalho une rigor científico com uma visão prática de clínica e medicina preventiva. Entendo que zoológicos e clínicas não precisam apenas de diagnósticos precisos, mas de processos que garantam o bem-estar contínuo dos animais sob seus cuidados.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-slate-50 p-4 rounded-xl text-center hover:shadow-md transition-shadow border border-slate-100">
                <Award className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                <h4 className="font-bold text-slate-900 text-base">Excelência</h4>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl text-center hover:shadow-md transition-shadow border border-slate-100">
                <BookOpen className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                <h4 className="font-bold text-slate-900 text-base">Pesquisa</h4>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl text-center hover:shadow-md transition-shadow border border-slate-100">
                <Heart className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                <h4 className="font-bold text-slate-900 text-base">Cuidado</h4>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
